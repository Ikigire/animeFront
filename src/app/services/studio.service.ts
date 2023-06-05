import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Studio } from '../anime.interface';

@Injectable({
    providedIn: 'root'
})
export class StudioService {
    
    root = 'https://app-anime-api.herokuapp.com/api/v0/'
    
    constructor(private http: HttpClient){}

    getStudios(): Observable<Studio[]> {
        const url = this.root + 'studios';
        
        return  this.http.get<Studio[]>(url)
        .pipe(
            catchError(() => of([]))
        );
    }
    
    postStudios( studio: Studio ): Observable<any> {
        const url = this.root + 'studios';
        
        return  this.http.post<any>(url, studio)
        // .pipe(
        //     catchError(() => of([]))
        // );
    }
    
    getStudioById( id: number ): Observable<Studio> {
        const url = this.root + 'studios/' + id;
        
        return  this.http.get<Studio>(url)
        .pipe(
            catchError(() => of())
        );
    }
    
    putStudio( studio: Studio ): Observable<Studio> {
        const url = this.root + 'studios/' + studio.StudioId;
        
        return  this.http.put<Studio>(url, studio)
        .pipe(
            catchError(() => of())
        );
    }
    
    deleteStudio( id: number ): Observable<any> {
        const url = this.root + 'studios/' + id;
        
        return  this.http.delete<any>(url)
        .pipe(
            catchError(() => of())
        );
    }



}