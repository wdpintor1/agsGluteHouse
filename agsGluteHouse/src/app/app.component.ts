import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './feature/home/shared/nav-bar/nav-bar.component';
import { AppModule } from './app.module';
import { HomeComponent } from './feature/home/home/home.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    AppModule,
    CommonModule, 
    RouterOutlet, 
    NavBarComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'agsGluteHouse';
}
