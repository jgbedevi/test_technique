import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivate } from '@angular/router';
import { TokenStorageService } from '../tokenStorage/token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private tokenStorageService: TokenStorageService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const user = this.tokenStorageService.getUser();
    const roles = route.data['roles'] as Array<string>;

    if (user && roles && roles.some(role => user.roles.includes(role))) {
      return true;  // Autoriser l'accès si l'utilisateur a l'un des rôles requis
    }

    // Si l'utilisateur n'a pas le bon rôle ou n'est pas connecté
    this.router.navigate(['/login']);
    return false;
  }
}
