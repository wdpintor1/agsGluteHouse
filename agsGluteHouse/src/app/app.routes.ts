import { Routes } from '@angular/router';
import { HomeComponent } from './feature/home/home/home.component';
import { ServiciosComponent } from './feature/home/servicios/servicios.component';
export const routes: Routes = [
    { path: '', component: HomeComponent },
    {
        path: 'home',
        loadChildren: () => import('./feature/home/home.routes').then(i => i.HomeRoutingModule),
    },
    { path: 'servicios', component: ServiciosComponent },
];
