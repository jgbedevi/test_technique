import { inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivate, CanActivateFn } from '@angular/router';
import { TokenStorageService } from '../tokenStorage/token-storage.service';


export const AuthGuard: CanActivateFn = (route, state) => {
  const tokenStorage = inject(TokenStorageService);
  const router = inject(Router);

  const token = tokenStorage.getToken();
  if (token) {
      return true; // Autoriser l'accès
  } else {
      router.navigate(['/login']); // Rediriger vers la page de login
      return false; // Bloquer l'accès
  }
};
