import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServiciosComponent } from './servicios/servicios.component';
const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'servicios', component: ServiciosComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class HomeRoutingModule { }
