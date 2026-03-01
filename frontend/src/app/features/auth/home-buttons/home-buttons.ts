import { Component } from '@angular/core';
import { Button } from '../../../shared/button/button';

@Component({
  selector: 'app-home-buttons',
  standalone: true,
  imports: [Button],
  templateUrl: './home-buttons.html',
  styleUrl: './home-buttons.scss'
})
export class HomeButtons {}