import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Usuario } from '../../models/usuario';
import { Api } from '../../core/services/api';
import { Card } from '../../shared/card/card';
import { Button } from '../../shared/button/button';
import { Vuelo } from '../../models/vuelo';
import { Router, RouterLink } from '@angular/router';
import { Tiquete } from '../../models/tiquete';
import { CacheService } from '../../core/services/cache-service';

@Component({
  selector: 'app-browse-tiquetes',
  imports: [Card, CommonModule, Button, RouterLink],
  templateUrl: './browse-tiquetes.html',
  styleUrl: './browse-tiquetes.scss',
})
export class BrowseTiquetes implements OnInit {

  tickets: Tiquete[] | null = null;

  constructor(private api: Api, private cdr: ChangeDetectorRef, private router: Router, private cache: CacheService) { }

  ngOnInit() {
    this.tickets = this.cache.myTickets;

    this.cdr.detectChanges();
  }

  selectedId: number | null = null;

  selectTiquete(id: number) {
    this.selectedId = id;
    console.log('Selected ticket ID:', id);
  }

  goToDetails(id: number) {
    this.router.navigate(['/tiquete', id]);
  }
}
