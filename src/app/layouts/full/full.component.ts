import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { TokenStorageService } from 'src/app/core/services/tokenStorage/token-storage.service';
import { Router } from '@angular/router';

interface SidebarMenu {
  link: string;
  icon: string;
  menu: string;
  roles: string[];
}

@Component({
  selector: 'app-full',
  templateUrl: './full.component.html',
  styleUrls: ['./full.component.scss']
})
export class FullComponent {
  search: boolean = false;

  // Observable pour détecter les changements de mise en page
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  userRoles: string[] = [];
  
  // Menu de la barre latérale filtré par rôle
  sidebarMenu: SidebarMenu[] = [
    {
      link: "/home",
      icon: "home",
      menu: "Dashboard",
      roles: ['ADMINISTRATEUR', 'UTILISATEUR', 'MANAGER']
    },
    {
      link: "page/categories",
      icon: "disc",
      menu: "Categories",
      roles: ["ADMINISTRATEUR", "MANAGER"]
    },
    {
      link: "page/produits",
      icon: "disc",
      menu: "Produits",
      roles: ["ADMINISTRATEUR", "MANAGER"]
    },
  ];

  constructor(private breakpointObserver: BreakpointObserver,
              private tokenStorageService: TokenStorageService,
              private router: Router) {
    // Récupérer les rôles de l'utilisateur
    this.userRoles = this.tokenStorageService.getUserRoles() || [];
    console.log('Menu original :', this.sidebarMenu); // Avant le filtrage
    console.log('Rôles de l\'utilisateur :', this.userRoles);

    // Filtrer le menu en fonction des rôles
    this.sidebarMenu = this.sidebarMenu.filter(menuItem =>
      menuItem.roles.some(role => this.userRoles.includes(role))
      
    );
    console.log('Menu filtré :', this.sidebarMenu); // Ajoutez cette ligne pour voir le menu après filtrage

  }

  routerActive: string = "activelink";
}
