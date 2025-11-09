import { Component } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { Pelicula } from '../interfaces/interfaces';
import { ModalController } from '@ionic/angular';
import { DetalleComponent } from '../components/detalle/detalle.component';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false
})
export class Tab2Page {

  textoBuscar = '';
  buscando = false;
  peliculas: Pelicula[] = [];
  ideas: string[] = ['La resurreccion de Freezer ', 'Chucky', 'Donde estan las rubias', 'Titanic'];

  constructor( private moviesService: MoviesService,
               private modalCtrl: ModalController) { }

  buscar( event: any ) {
    const valor: string = (event?.detail?.value ?? this.textoBuscar).trim();

    if ( valor.length === 0 ) {
      this.buscando = false;
      this.peliculas = [];
      return;
    }

    this.buscando = true;

    this.moviesService.buscarPeliculas( valor )
        .subscribe( (resp: any) => {
          console.log( resp );
          this.peliculas = resp['results'];
          this.buscando = false;
        });
  }

  seleccionarIdea(idea: string) {
    this.textoBuscar = idea.trim();
    this.buscar({ detail: { value: this.textoBuscar } });
  }

  onSearchbarKey(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.buscar({ detail: { value: this.textoBuscar } });
    }
  }

  async detalle( id: string ) {

    const modal = await this.modalCtrl.create({
      component: DetalleComponent,
      componentProps: {
        id
      }
    });

    modal.present();

  }

}
