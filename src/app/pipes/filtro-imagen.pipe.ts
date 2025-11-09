import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroImagen',
  standalone: false
})
export class FiltroImagenPipe implements PipeTransform {

  transform( peliculas: any[] ): any[] {


    return peliculas.filter( peli => {
      return peli.backdrop_path;
    });
  }

}
