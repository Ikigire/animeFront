import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { Anime } from '../anime.interface';

@Injectable({
    providedIn: 'root'
})
export class AnimeService {
    root = 'https://app-anime-api.herokuapp.com/api/v0/'
    constructor(private http: HttpClient){}
        
    getAnimes(): Observable<Anime[]> {
        const url = this.root + 'animes';
        
        return this.http.get<Anime[]>(url)
        .pipe(
            catchError(() => of([]))
        );
    }
    
    getAnimesByName( name: string ): Observable<Anime[]> {
        const url = this.root + 'animes/by_name/' + name;
        
        return this.http.get<Anime[]>(url)
        .pipe(
            catchError(() => of([]))
        );
    }
    
    getAnimesByStudio( studioName: string ): Observable<Anime[]> {
        const url = this.root + 'animes/by_studio/' + studioName;
        
        return this.http.get<Anime[]>(url)
        .pipe(
            catchError(() => of([]))
        );
    }
    
    getAnimesByReleaseYear( year: number ): Observable<Anime[]> {
        const url = this.root + 'animes/by_release_year/' + year;
        
        return this.http.get<Anime[]>(url)
        .pipe(
            catchError(() => of([]))
        );
    }

    postAnimes( anime: Anime ): Observable<Anime> {
        const url = this.root + 'animes';
        
        return this.http.post<Anime>(url, anime)
        .pipe(
            catchError(() => of())
        );
    }

    getAnimesById( animeID: number ): Observable<Anime> {
        const url = this.root + 'animes/by_id/' + animeID;
        
        return this.http.get<Anime>(url)
        .pipe(
            catchError(() => of())
        );
    }

    putAnimes( anime: Anime ): Observable<Anime> {
        const url = this.root + 'animes/by_id/' + anime.AnimeID;
        
        return this.http.put<Anime>(url, anime)
        .pipe(
            catchError(() => of())
        );
    }

    deleteAnimes( animeId: number ): Observable<any> {
        const url = this.root + 'animes/by_id/' + animeId;
        
        return this.http.delete<any>(url)
        .pipe(
            catchError(() => of())
        );
    }
}