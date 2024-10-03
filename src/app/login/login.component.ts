import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../core/services/auth/auth.service';
import { TokenStorageService } from '../core/services/tokenStorage/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: any = {
    email: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  constructor(
    private authService: AuthService,
    private tokenStorage: TokenStorageService,
    private router: Router
  ) { }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      const user = this.tokenStorage.getUser();
      this.roles = user.role ? [user.role.libelle] : []; 
    }
  }

  
  onSubmit(): void {
    if (!this.form.email || !this.form.password) {
      this.errorMessage = 'Veuillez entrer un email et un mot de passe valides.';
      this.isLoginFailed = true;
      return;
    }

    const { email, password } = this.form;

    this.authService.login(email, password).subscribe({
      next: data => {
        console.log('Données de connexion :', data);
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveRefreshToken(data.refreshToken);
        this.tokenStorage.saveUser(data.user); 

        this.isLoginFailed = false;
        this.isLoggedIn = true;

        const user = this.tokenStorage.getUser();
        this.roles = user.role ? [user.role.libelle] : []; 

        console.log('Rôles de l\'utilisateur :', this.roles); 

        this.router.navigate(['/home/dashboard']); 
      },
      error: err => {
        this.errorMessage = err.error.message || 'Connexion échouée';
        this.isLoginFailed = true;
      }
    });
  }

  reloadPage(): void {
    window.location.reload();
  }
}
