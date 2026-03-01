import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Usuario } from '../../models/usuario';
import { Api } from '../../core/services/api';
import { Card } from '../../shared/card/card';
import { Button } from '../../shared/button/button';
import { Vuelo } from '../../models/vuelo';
import { Router, RouterLink } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vuelo-detail',
  imports: [CommonModule, Card, Button, RouterLink],
  templateUrl: './vuelo-detail.html',
  styleUrl: './vuelo-detail.scss',
})
export class VueloDetail implements OnInit {

  vuelo: Vuelo | null = null;

  constructor(
    private api: Api,
    private cdr: ChangeDetectorRef,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {

    const id = Number(this.route.snapshot.paramMap.get('id'));
    console.log('Vuelo ID:', id);

    this.api.getVuelo(id).subscribe({
      next: (data) => {
        this.vuelo = data;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('Failed to load vuelo:', err);
        console.log('Status:', err.status, 'Message:', err.message);
      }
    });
  }

  comprarTiquete() {
    if (!this.vuelo) return;
    this.api.buyTicket(this.vuelo.id).subscribe({
      next: () => this.router.navigate(['/dashboard']),
      error: () => alert('Error al comprar')
    });
  }
}
