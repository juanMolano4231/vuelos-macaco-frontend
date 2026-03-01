import { Routes } from '@angular/router';
import { Login } from './features/auth/login/login';
import { Dashboard } from './features/dashboard/dashboard';
import { HomeButtons } from './features/auth/home-buttons/home-buttons';
import { Register } from './features/auth/register/register';
import { BrowseVuelos } from './features/browse-vuelos/browse-vuelos';
import { BrowseTiquetes } from './features/browse-tiquetes/browse-tiquetes';
import { VueloDetail } from './features/vuelo-detail/vuelo-detail';
import { TiqueteDetail } from './features/tiquete-detail/tiquete-detail';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'login', component: Login },
    { path: 'register', component: Register },
    { path: 'dashboard', component: Dashboard },
    { path: 'home', component: HomeButtons },
    { path: 'vuelos', component: BrowseVuelos },
    { path: 'tiquetes', component: BrowseTiquetes },
    { path: 'vuelo/:id', component: VueloDetail },
    { path: 'tiquete/:id', component: TiqueteDetail }
];
