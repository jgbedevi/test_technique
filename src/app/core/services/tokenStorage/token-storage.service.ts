import { Injectable } from '@angular/core';

const TOKEN_KEY = 'auth-token';
const REFRESH_TOKEN_KEY = 'refresh-token';
const USER_KEY = 'auth-user';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  constructor() { }

  /**
   * Clears all tokens and user data from session storage.
   */
  signOut(): void {
    window.sessionStorage.clear();
  }

  /**
   * Saves the JWT token in session storage.
   * @param token JWT token
   */
  public saveToken(token: string): void {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  /**
   * Returns the JWT token from session storage.
   */
  public getToken(): string | null {
    return sessionStorage.getItem(TOKEN_KEY);

  }

  /**
   * Saves the refresh token in session storage.
   * @param refreshToken Refresh token
   */
  public saveRefreshToken(refreshToken: string): void {
    window.sessionStorage.removeItem(REFRESH_TOKEN_KEY);
    window.sessionStorage.setItem(REFRESH_TOKEN_KEY, refreshToken);
  }

  /**
   * Returns the refresh token from session storage.
   */
  public getRefreshToken(): string | null {
    return sessionStorage.getItem(REFRESH_TOKEN_KEY);
  }

  /**
   * Saves the user information in session storage.
   * @param user User object
   */
  public saveUser(user: any): void {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  /**
   * Returns the user information from session storage.
   */
  public getUser(): any {
    const user = sessionStorage.getItem(USER_KEY);
    if (user) {
      return JSON.parse(user);
    }
    return null;
  }

  getUserRoles(): string[] {
    const user = this.getUser();
    if (user.role && user.role.libelle) {
      return [user.role.libelle]; // Retourner un tableau avec le libellé du rôle
    }
    return []; // Retourner un tableau vide si aucun rôle n'est trouvé
  }
  


}
