// produit.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Produit } from '../../models/produitModel';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  private apiUrl = 'http://localhost:8080/api/produits'; 
  constructor(private http: HttpClient) {}

  getProduits(): Observable<Produit[]> {
    return this.http.get<Produit[]>(this.apiUrl)
      .pipe(
        catchError(this.handleError)
      );
  }

  saveProduit(produit: Produit): Observable<string> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<string>(this.apiUrl, produit, { headers })
      .pipe(
        catchError(this.handleError)
      );
  }

  updateProduit(idProduit: number, produit: Produit): Observable<string> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put<string>(`${this.apiUrl}?idProduit=${idProduit}`, produit, { headers })
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: any): Observable<never> {
    console.error('Une erreur est survenue', error);
    throw new Error('Erreur lors de la communication avec le serveur');
  }
}
