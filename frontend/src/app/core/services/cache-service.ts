import { Injectable } from '@angular/core';
import { Api } from './api';
import { Router } from '@angular/router';
import { Usuario } from '../../models/usuario';
import { Vuelo } from '../../models/vuelo';
import { Tiquete } from '../../models/tiquete';
import { forkJoin, lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CacheService {
  private token = '';
  user: Usuario | null = null;
  myTickets: Tiquete[] = [];
  allVuelos: Vuelo[] = [];


  constructor(private api: Api, private router: Router) { }


  async init() {
    this.token = this.api.getToken();
    if (!this.token) {
      this.router.navigate(['/login']);
      return;
    }

    try {
      const [me, myTickets, allVuelos] = await lastValueFrom(
        forkJoin([
          this.api.getMe(),
          this.api.getMyTickets(),
          this.api.getVuelos()
        ])
      );

      this.user = me;
      this.myTickets = myTickets ?? [];
      this.allVuelos = allVuelos ?? [];
    } catch (err) {
      console.error('Cache init failed', err);
      this.router.navigate(['/login']);
    }
  }
}