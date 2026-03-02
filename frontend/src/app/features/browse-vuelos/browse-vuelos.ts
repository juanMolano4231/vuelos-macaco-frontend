import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Usuario } from '../../models/usuario';
import { Api } from '../../core/services/api';
import { Card } from '../../shared/card/card';
import { Button } from '../../shared/button/button';
import { Vuelo } from '../../models/vuelo';
import { Router, RouterLink } from '@angular/router';
import { Dashboard } from '../dashboard/dashboard';
import { CacheService } from '../../core/services/cache-service';

@Component({
  selector: 'app-browse-vuelos',
  imports: [Card, CommonModule, Button, RouterLink],
  templateUrl: './browse-vuelos.html',
  styleUrl: './browse-vuelos.scss',
})
export class BrowseVuelos implements OnInit {

  vuelos: Vuelo[] | null = null;

  constructor(private api: Api, private cdr: ChangeDetectorRef, private router: Router, private cache: CacheService) { }

  ngOnInit() {
    this.vuelos = this.cache.allVuelos;
    this.cdr.detectChanges();
  }

  selectedId: number | null = null;

  selectVuelo(id: number) {
    this.selectedId = id;
    console.log('Selected vuelo ID:', id);
  }

  goToDetails(id: number) {
    this.router.navigate(['/vuelo', id]);
  }
}
