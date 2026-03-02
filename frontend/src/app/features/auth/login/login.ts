import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Api } from '../../../core/services/api';
import { Card } from '../../../shared/card/card';
import { CacheService } from '../../../core/services/cache-service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, Card],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {
  credentials = { correo: '', contrasena: '' };

  constructor(private api: Api, private router: Router, private cache: CacheService) { }

  login() {
  this.api.login(this.credentials).subscribe({
    next: async (res: any) => {
      this.api.setToken(res.token);
      await this.cache.init();
      this.router.navigate(['/dashboard']);
    },
    error: () => alert('Login failed')
  });
}
}