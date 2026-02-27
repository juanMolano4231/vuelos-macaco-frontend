import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../../models/usuario';
import { Vuelo } from '../../models/vuelo';
import { Tiquete } from '../../models/tiquete';

@Injectable({ providedIn: 'root' })
export class Api {
  private url = 'http://backend:3000'; // Docker network
  private token = '';

  constructor(private http: HttpClient) { }
  setToken(t: string) { this.token = t; }
  headers() { return { headers: new HttpHeaders({ Authorization: `Bearer ${this.token}` }) }; }

  login(c: any) { return this.http.post(`${this.url}/login`, c); }
  register(u: any) { return this.http.post(`${this.url}/register`, u); }
  getMe() { return this.http.get<Usuario>(`${this.url}/me`, this.headers()); }
  getMyTickets() { return this.http.get<Tiquete[]>(`${this.url}/me/tickets`, this.headers()); }
  getTickets() { return this.http.get<Tiquete[]>(`${this.url}/tickets`, this.headers()); }
  getTicket(id: number) { return this.http.get<Tiquete>(`${this.url}/tickets/${id}`, this.headers()); }
  getVuelos() { return this.http.get<Vuelo[]>(`${this.url}/vuelos`, this.headers()); }
  getVuelo(id: number) { return this.http.get<Vuelo>(`${this.url}/vuelos/${id}`, this.headers()); }
}