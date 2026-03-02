import { Component } from '@angular/core';
import { Button } from '../../../shared/button/button';
import { Card } from '../../../shared/card/card';


@Component({
  selector: 'app-home-buttons',
  standalone: true,
  imports: [Button, Card],
  templateUrl: './home-buttons.html',
  styleUrl: './home-buttons.scss'
})
export class HomeButtons {}