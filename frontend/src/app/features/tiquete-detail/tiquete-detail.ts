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
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    console.log('Ticket ID:', id);

    this.api.getTicket(id).subscribe({
      next: (tiquete) => {
        this.tiquete = tiquete;
        this.cdr.detectChanges();

        if (tiquete?.idVuelo) {
          this.api.getVuelo(tiquete.idVuelo).subscribe({
            next: (vuelo) => {
              this.vuelo = vuelo;
              this.cdr.detectChanges();
            },
            error: (err) => {
              console.error('Failed to load vuelo:', err);
            }
          });
        }
      },
      error: (err) => {
        console.error('Failed to load tiquete:', err);
      }
    });
  }
}
