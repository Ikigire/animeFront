import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Type } from '../anime.interface';

@Injectable({
    providedIn: 'root'
})
export class TypeService {
    root = 'https://app-anime-api.herokuapp.com/api/v0/'
    constructor(private http: HttpClient){}

    getTypes(): Observable<Type[]> {
        const url = this.root + 'types';
        
        return  this.http.get<Type[]>(url)
        .pipe(
            catchError(() => of([]))
        );
    }
    
    postTypes( type: Type ): Observable<Type> {
        const url = this.root + 'types';
        
        return  this.http.post<Type>(url, type)
        .pipe(
            catchError(() => of())
        );
    }
    
    getTypesById( typeId: number ): Observable<Type> {
        const url = this.root + 'types/' + typeId;
        
        return  this.http.get<Type>(url)
        .pipe(
            catchError(() => of())
        );
    }
    
    putTypes( type: Type ): Observable<Type> {
        const url = this.root + 'types/' + type.TypeId;
        
        return  this.http.put<Type>(url, type)
        .pipe(
            catchError(() => of())
        );
    }
    
    deleteTypes( typeId: number ): Observable<any> {
        const url = this.root + 'types/' + typeId;
        
        return  this.http.delete<any>(url)
        .pipe(
            catchError(() => of())
        );
    }
}