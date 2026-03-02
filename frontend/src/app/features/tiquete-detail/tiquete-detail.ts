import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Usuario } from '../../models/usuario';
import { Api } from '../../core/services/api';
import { Card } from '../../shared/card/card';
import { Button } from '../../shared/button/button';
import { Vuelo } from '../../models/vuelo';
import { Router, RouterLink } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Tiquete } from '../../models/tiquete';
import { CacheService } from '../../core/services/cache-service';

@Component({
  selector: 'app-tiquete-detail',
  imports: [CommonModule, Card, Button, RouterLink],
  templateUrl: './tiquete-detail.html',
  styleUrl: './tiquete-detail.scss',
})
export class TiqueteDetail implements OnInit {

  tiquete: Tiquete | null = null;
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
    console.log('Ticket ID:', id);

    const tiquete = this.cache.myTickets.find(t => t.id === id);

    if (tiquete) {
      this.tiquete = tiquete;

      const vuelo = this.cache.allVuelos.find(v => v.id === tiquete.idVuelo);
      if (vuelo) {
        this.vuelo = vuelo;
      }

      this.cdr.detectChanges();
    } else {
      console.error('Ticket not found');
    }
  }
}
