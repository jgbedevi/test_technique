import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiRoot: string = `http://localhost:8080/auth`;

  constructor(private http: HttpClient) { }

  /**
   * Login method to authenticate the user.
   * @param email
   * @param password
   */
  login(email: string, password: string): Observable<any> {
    const loginPayload = { email: email, password: password };
    return this.http.post(`${this.apiRoot}/login`, loginPayload, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }

  /**
   * Logout method to disconnect the user.
   */
  logout(): Observable<void> {
    return this.http.post<void>(`${this.apiRoot}/logout`, {}, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }

  /**
   * Refresh the token using the refresh token.
   * @param refreshToken
   */
  refreshToken(refreshToken: string): Observable<any> {
    const refreshTokenPayload = { refreshToken: refreshToken };
    return this.http.post(`${this.apiRoot}/refresh-token`, refreshTokenPayload, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }
}

