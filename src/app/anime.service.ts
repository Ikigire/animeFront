import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AnimeService {
    root = 'localhost:5000/api/v0/'
    constructor(private http: HttpClient){}
    
    getAnimes(): Observable<any[]> {
        const url = this.root + 'animes/by_release_year/2023';
        console.log(url);
        
        return this.http.get<any[]>(url)
        .pipe(
            catchError(() => of([]))
        );
    }
}