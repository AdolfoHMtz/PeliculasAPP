import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { PeliculaDetalle } from '../interfaces/interfaces';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class DataLocalService {

  peliculas: PeliculaDetalle[] = [];
  private _storage: Storage | null = null;

  constructor( private storage: Storage,
              private toastCtrl: ToastController  ) {
    this.init();
  }

  async init() {
    // Inicializar el storage
    const storage = await this.storage.create();
    this._storage = storage;
    await this.cargarFavoritos();
  }

  async presentToast( message: string ) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 2000
    });
    toast.present();
  }

  async guardarPelicula( pelicula: PeliculaDetalle ) {
    let existe = false;
    let mensaje = '';

    for ( const peli of this.peliculas ) {
      if ( peli.id === pelicula.id ) {
        existe = true;
        break;
      }
    }
    if ( existe ) {
      this.peliculas = this.peliculas.filter( peli => peli.id !== pelicula.id );
      mensaje = 'Eliminado de favoritos';
    } else {
      this.peliculas.push( pelicula );
      mensaje = 'Añadida a favoritos';
    }

    this.presentToast( mensaje );
    await this._storage?.set('peliculas', this.peliculas );
    return !existe;
  }

  async cargarFavoritos() {
    if (!this._storage) {
      await this.init();
    }
    const peliculas = await this._storage?.get('peliculas');
    this.peliculas = peliculas || [];
    return this.peliculas;
  }

  async existePelicula( id: number ) {
    await this.cargarFavoritos();
    const existe = this.peliculas.find( peli => peli.id === id );
    return (existe) ? true : false;
  }
}
