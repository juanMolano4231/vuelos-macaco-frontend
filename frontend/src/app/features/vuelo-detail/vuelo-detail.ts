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
export class VueloDetail implements OnInit{

  constructor(
  private api: Api,
  private cdr: ChangeDetectorRef,
  private router: Router,
  private route: ActivatedRoute
) {}

  ngOnInit() {
  const id = this.route.snapshot.paramMap.get('id');
  console.log('Vuelo ID:', id);
  // fetch this.api.getVuelo(+id)
}
}
