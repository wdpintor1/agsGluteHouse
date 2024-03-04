import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestimonioMockService } from '../../../shared/data/testimonio-mock.service';
@Component({
  selector: 'app-testimonios',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './testimonios.component.html',
  styleUrl: './testimonios.component.css'
})
export class TestimoniosComponent {

  constructor(private testimoniosMockService: TestimonioMockService) { }
  testimonios: any[] = [];
  ngOnInit(): void {
    this.getTestimoniosData();
  }
  getTestimoniosData() {
    this.testimoniosMockService.getTestimonios().then(respuesta => {
      if (respuesta) {
        this.testimonios = respuesta.map(testimonio => ({
          ...testimonio,
          testimonio: this.recortarTestimonio(testimonio.testimonio, 200) // Cambia 200 por el número de caracteres deseado
        }));
      }
    });
  }
  
  recortarTestimonio(testimonio: string, longitudMaxima: number): string {
    if (testimonio.length > longitudMaxima) {
      return testimonio.substring(0, longitudMaxima) + "...";
    } else {
      return testimonio;
    }
  }

}
