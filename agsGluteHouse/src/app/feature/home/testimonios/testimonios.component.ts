import { Component, ElementRef, ViewChild, Renderer2 } from '@angular/core';
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
  @ViewChild('testimoniosSection', { static: true }) testimoniosSection?: ElementRef;
  constructor(private testimoniosMockService: TestimonioMockService, private readonly renderer: Renderer2) { }
  testimonios: any[] = [];
  ngOnInit(): void {
    this.getTestimoniosData();
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
    };
    /*if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.activarAnimacion();
            observer.unobserve(entry.target);
          }
        });
      }, options);
  
      this.testimoniosSection && observer.observe(this.testimoniosSection.nativeElement);
    }*/
  }
  activarAnimacion() {
    // Verifica si testimoniosSection está definida
    if (this.testimoniosSection) {
      // Aquí puedes agregar tu lógica para activar la animación
      this.renderer.addClass(this.testimoniosSection.nativeElement, 'tu-clase-de-animacion');
    }
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
