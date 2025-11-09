import { Component, OnInit, Input, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Pelicula } from '../../interfaces/interfaces';
import { ModalController, IonicSlides } from '@ionic/angular';
import { DetalleComponent } from '../detalle/detalle.component';

@Component({
  selector: 'app-slideshow-backdrop',
  templateUrl: './slideshow-backdrop.component.html',
  styleUrls: ['./slideshow-backdrop.component.scss'],
  standalone: false
})
export class SlideshowBackdropComponent implements OnInit {

  @Input() peliculas: Pelicula[] = [];

  swiperModules = [IonicSlides];
  breakpoints = {
    320: { slidesPerView: 1, spaceBetween: 2 },
    480: { slidesPerView: 1, spaceBetween: 2 },
    640: { slidesPerView: 1, spaceBetween: 2 },
    800: { slidesPerView: 2, spaceBetween: 1 },
    1024: { slidesPerView: 2, spaceBetween: 1 },
    1280: { slidesPerView: 2.8, spaceBetween: 0 },
    1440: { slidesPerView: 2.8, spaceBetween: 0 }
  };

  constructor( private modalCtrl: ModalController ) { }

  ngOnInit() {
  }

  async verDetalle( id: number ) {

    const modal = await this.modalCtrl.create({
      component: DetalleComponent,
      componentProps: {
        id
      }
    });

    modal.present();
  }

}
