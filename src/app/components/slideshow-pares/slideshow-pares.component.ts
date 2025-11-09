import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pelicula } from '../../interfaces/interfaces';
import { DetalleComponent } from '../detalle/detalle.component';
import { ModalController, IonicSlides } from '@ionic/angular';

@Component({
  selector: 'app-slideshow-pares',
  templateUrl: './slideshow-pares.component.html',
  styleUrls: ['./slideshow-pares.component.scss'],
  standalone: false
})
export class SlideshowParesComponent implements OnInit {

  @Input() peliculas: Pelicula[] = [];
  @Output() cargarMas = new EventEmitter();

  swiperModules = [IonicSlides];

  breakpoints = {
    320: { slidesPerView: 3, spaceBetween: 2 },
    480: { slidesPerView: 3.5, spaceBetween: 5 },
    640: { slidesPerView: 3.9, spaceBetween: 5 },
    800: { slidesPerView: 4.4, spaceBetween: 6 },
    1024: { slidesPerView: 5.5, spaceBetween: 6 }
  };

  constructor( private modalCtrl: ModalController ) { }

  ngOnInit() {
  }

  onClick() {
    this.cargarMas.emit();
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
