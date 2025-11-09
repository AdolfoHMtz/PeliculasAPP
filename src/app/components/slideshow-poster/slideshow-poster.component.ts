import { Component, OnInit, Input } from '@angular/core';
import { Pelicula } from '../../interfaces/interfaces';
import { ModalController, IonicSlides } from '@ionic/angular';
import { DetalleComponent } from '../detalle/detalle.component';

@Component({
  selector: 'app-slideshow-poster',
  templateUrl: './slideshow-poster.component.html',
  styleUrls: ['./slideshow-poster.component.scss'],
  standalone: false
})
export class SlideshowPosterComponent implements OnInit {

  @Input() peliculas: Pelicula[] = [];
  swiperModules = [IonicSlides];

  breakpoints = {
    320: { slidesPerView: 2.6, spaceBetween: 3 },
    480: { slidesPerView: 3.5, spaceBetween: 4 },
    640: { slidesPerView: 3.9, spaceBetween: 5 },
    800: { slidesPerView: 4.4, spaceBetween: 5 },
    1024: { slidesPerView: 5.5, spaceBetween: 6 }
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
