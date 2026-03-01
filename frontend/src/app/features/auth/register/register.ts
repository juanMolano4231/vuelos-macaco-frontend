import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Api } from '../../../core/services/api';
import { Card } from '../../../shared/card/card';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, Card],
  templateUrl: './register.html',
  styleUrl: './register.scss'
})
export class Register {

  credentials = { nombre: '', correo: '', edad: '', contrasena: '' };

  constructor(private api: Api, private router: Router) { }

  register() {
    this.api.register(this.credentials).subscribe({
      next: (res: any) => {
        this.router.navigate(['/login']);
      },
      error: () => alert('Register failed')
    });
  }

}
