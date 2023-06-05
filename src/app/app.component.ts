import { Component } from '@angular/core';
import { AnimeService } from './services/anime.service';
import { Anime, Studio, Type } from './anime.interface';
import { StudioService } from './services/studio.service';
import { TypeService } from './services/type.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  animes: Anime[] = [];
  studios: Studio[] = [];
  types: Type[] = []
  textoBuscar: string = '';
  tipoBusqueda: string = 'name';
  isReady: boolean = false;
  typesReady: boolean = false;
  studiosReady: boolean = false;

  newType: Type = {
    TypeId: 0,
    Type: ''
  };
  newStudio: Studio = {
    StudioId: 0,
    Name: ''
  };
  newAnime: Anime = {
    AnimeID: 0,
    Name: '',
    Japanese_name: '',
    Episodes: 0,
    Release_season: '',
    Tags: '',
    Rating: 0.0,
    Release_year: 0,
    StudioId: 1,
    TypeId: 1
  };


  constructor(
    private animeService: AnimeService,
    private studioService: StudioService,
    private typeService: TypeService
  ) {
    this.obtenerTodosTypes();
    this.obtenerTodosStudios();
    this.obtenerTodosAnimes();

    document.oncontextmenu = () => false;
  }

  obtenerTodosAnimes(): void {
    this.animeService.getAnimes().subscribe(
      (animelist) => {
        // console.log(animelist);
        this.animes = animelist;
        this.isReady = true;
      }
    );
  }

  obtenerTodosStudios(): void {
    this.studioService.getStudios().subscribe(
      (studioList) => {
        this.studios = studioList;
        this.studiosReady = true;
      }
    );
  }

  obtenerTodosTypes(): void {
    this.typeService.getTypes().subscribe(
      (typeList) => {
        this.types = typeList;
        this.typesReady = true;
      }
    );
  }

  cambiarTipoBusqueda(tipo: string): void {
    this.tipoBusqueda = tipo;
  }

  realizarBusqueda(): void {
    this.isReady = false;
    if (this.textoBuscar.trim() == '') {
      this.obtenerTodosAnimes();
      return;
    }

    switch (this.tipoBusqueda) {
      case 'year':
        this.animeService.getAnimesByReleaseYear(parseInt(this.textoBuscar)).subscribe(
          (animelist) => {
            this.animes = animelist;
            this.isReady = true;
          }
        );
        break;

      case 'name':
        this.animeService.getAnimesByName(this.textoBuscar).subscribe(
          (animelist) => {
            this.animes = animelist;
            this.isReady = true;
          }
        );
        break;

      case 'studio':
        this.animeService.getAnimesByStudio(this.textoBuscar).subscribe(
          (animelist) => {
            this.animes = animelist;
            this.isReady = true;
          }
        );
        break;

      default:
        break;
    }
  }

  registrarTipo(): void {
    if (this.newType.Type.trim() == ''){
      alert("El atributo Tipo es necesario, no se guardaron los datos")
      return;
    }
    
    this.typesReady = false;
    this.typeService.postTypes(this.newType).subscribe(
      () => {
        this.obtenerTodosTypes();
        alert("Se registró con éxito el nuevo tipo");
      }
    );
  }

  registrarStudio(): void {
    if (this.newStudio.Name.trim() == ''){
      alert("El atributo Nombre es necesario, no se guardaron los datos")
      return;
    }
    
    this.studiosReady = false;
    this.studioService.postStudios(this.newStudio).subscribe(
      () => {
        this.obtenerTodosStudios();
        alert("El nuevo estudio se registró con éxito")
      }
    );
  }

  registrarAnime(): void {   
    if (this.newAnime.Name.trim() == ''){
      alert("El atributo Nombre es necesario, no se guardaron los datos")
      return;
    }

    this.isReady = false;
    // this.animeService.postAnimes(this.newAnime).subscribe(
    //   () => {
    //     this.obtenerTodosAnimes();
    //     alert("El anime se registró con éxito");
    //   }
    // );
    console.log(this.newAnime);
    
    alert(this.newAnime);
    this.isReady = true;
  }

  sayHello( saludo: string ): void {
    alert("Hola we!\n" + saludo);
  }
}
