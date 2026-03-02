import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Usuario } from '../../models/usuario';
import { Api } from '../../core/services/api';
import { Card } from '../../shared/card/card';
import { Button } from '../../shared/button/button';
import { Vuelo } from '../../models/vuelo';
import { Router, RouterLink } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { CacheService } from '../../core/services/cache-service';

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
    private route: ActivatedRoute,
    private cache: CacheService
  ) { }

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    console.log('Vuelo ID:', id);

    const vuelo = this.cache.allVuelos.find(v => v.id === id);

    if (vuelo) {
      this.vuelo = vuelo;
      this.cdr.detectChanges();
    } else {
      console.error('Vuelo not found');
    }
  }

  comprarTiquete() {
    if (!this.vuelo) return;

    this.api.buyTicket(this.vuelo.id).subscribe({
      next: async () => {
        await this.cache.init();
        this.router.navigate(['/dashboard']);
      },
      error: () => alert('Error al comprar')
    });
  }
}
