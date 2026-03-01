import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Usuario } from '../../models/usuario';
import { Api } from '../../core/services/api';
import { Card } from '../../shared/card/card';
import { Button } from '../../shared/button/button';

@Component({
  selector: 'app-dashboard',
  imports: [Card, CommonModule, Button],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard implements OnInit {
  user: Usuario | null = null;

  constructor(private api: Api, private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    this.api.getMe().subscribe({
      next: (data) => {
        this.user = data;
        this.cdr.detectChanges();
      },
      error: () => console.error('Failed to load user')
    });
  }
}
