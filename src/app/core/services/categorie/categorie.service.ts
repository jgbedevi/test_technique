import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Categorie } from '../../models/categorieModel';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  private apiUrl = 'http://localhost:8080/categories';

  constructor(private http: HttpClient) { }

  getCategories(): Observable<Categorie[]> {
    return this.http.get<Categorie[]>(this.apiUrl)
      .pipe(
        catchError(this.handleError)
      );
  }

    saveCategorie(libelle: string): Observable<Categorie> {
      const params = new URLSearchParams();
      params.set('libelle', libelle);
      
      return this.http.post<Categorie>(this.apiUrl, {}, { params: { libelle } })
        .pipe(
          catchError(this.handleError)
        );
    }
  
    // Gestion des erreurs
    private handleError(error: any) {
      console.error('Une erreur est survenue', error);
      return throwError(() => new Error('Quelque chose s\'est mal passé ; veuillez réessayer plus tard.'));
    }
  
}
