import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'; // Importa RouterModule
import { AppComponent } from './app.component';

@NgModule({  
  imports: [
    RouterModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }