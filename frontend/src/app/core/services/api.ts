import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuario } from '../../models/usuario';
import { Vuelo } from '../../models/vuelo';
import { Tiquete } from '../../models/tiquete';

@Injectable({ providedIn: 'root' })
export class Api {
  private url = 'http://localhost:3000/api';
  private token = '';

  constructor(private http: HttpClient) { }
  setToken(t: string) { this.token = t; }
  headers() { return { headers: new HttpHeaders({ Authorization: `Bearer ${this.token}` }) }; }

  login(c: any) { return this.http.post(`${this.url}/auth/login`, c); }
  register(u: any) { return this.http.post(`${this.url}/auth/register`, u); }
  getMe() { return this.http.get<Usuario>(`${this.url}/me`, this.headers()); }
  getMyTickets() { return this.http.get<Tiquete[]>(`${this.url}/me/tickets`, this.headers()); }
  getTickets() { return this.http.get<Tiquete[]>(`${this.url}/tickets`, this.headers()); }
  getTicket(id: number) { return this.http.get<Tiquete>(`${this.url}/tickets/${id}`, this.headers()); }
  getVuelos() { return this.http.get<Vuelo[]>(`${this.url}/vuelos`, this.headers()); }
  getVuelo(id: number) { return this.http.get<Vuelo>(`${this.url}/vuelos/${id}`, this.headers()); }
  buyTicket(vueloId: number) {
  return this.http.post(`${this.url}/vuelos/${vueloId}`, {}, this.headers());
}
}
