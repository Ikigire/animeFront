import { Component } from '@angular/core';
import { AnimeService } from './anime.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  animes = [];
  constructor(private animeService: AnimeService) {
    this.animeService.getAnimes().subscribe(
      (animes) => {
        console.log(animes);
        
      }
    )
  }


}
