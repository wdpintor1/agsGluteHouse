import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ServicioMockService {
  async getServicios() {
    return [
      {
        servicio: "Pilates",
        imagen: "pilates",
        descripcionCorta: "Pellentesque dictum nisl in nibh dictum volutpat nec a quam. Vivamus suscipit nisl quis nulla pretium.",
        descripcionLarga: "Pellentesque dictum nisl in nibh dictum volutpat nec a quam. Vivamus suscipit nisl quis nulla pretium."
      },
      {
        servicio: "Free lifting",
        imagen: "lifting",
        descripcionCorta: "Pellentesque dictum nisl in nibh dictum volutpat nec a quam. Vivamus suscipit nisl quis nulla pretium.",
        descripcionLarga: "Pellentesque dictum nisl in nibh dictum volutpat nec a quam. Vivamus suscipit nisl quis nulla pretium."
      },
      {
        servicio: "Yoga",
        imagen: "yoga",
        descripcionCorta: "Pellentesque dictum nisl in nibh dictum volutpat nec a quam. Vivamus suscipit nisl quis nulla pretium.",
        descripcionLarga: "Pellentesque dictum nisl in nibh dictum volutpat nec a quam. Vivamus suscipit nisl quis nulla pretium."
      },
      {
        servicio: "Spinning",
        imagen: "spinning",
        descripcionCorta: "Pellentesque dictum nisl in nibh dictum volutpat nec a quam. Vivamus suscipit nisl quis nulla pretium.",
        descripcionLarga: "Pellentesque dictum nisl in nibh dictum volutpat nec a quam. Vivamus suscipit nisl quis nulla pretium."
      }
    ];
  }
}
