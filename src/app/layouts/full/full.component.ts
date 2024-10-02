import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { TokenStorageService } from 'src/app/core/services/tokenStorage/token-storage.service';
import { Router } from '@angular/router';

interface sidebarMenu {
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

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

    userRoles: string[] = [];


  constructor(private breakpointObserver: BreakpointObserver,
    private tokenStorageService: TokenStorageService,
    private router: Router
  ) {     // Récupérer les rôles de l'utilisateur
    this.userRoles = this.tokenStorageService.getUserRoles();

    // Filtrer le menu en fonction des rôles
    this.sidebarMenu = this.sidebarMenu.filter(menuItem =>
      menuItem.roles.some(role => this.userRoles.includes(role))
    );
}

  routerActive: string = "activelink";

  sidebarMenu: sidebarMenu[] = [
    {
      link: "/home",
      icon: "home",
      menu: "Dashboard",
      roles:["ADMINISTRATEUR","UTILISATEUR","MANAGEUR"]
    },
    {
      link: "/categories",
      icon: "disc",
      menu: "Categories",
      roles:["ADMINISTRATEUR","MANAGEUR"]

    },
  ]





}
