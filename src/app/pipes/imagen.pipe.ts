import { Pipe, PipeTransform } from '@angular/core';
import { environment } from '../../environments/environment';

const URL = environment.imgPath;

@Pipe({
  name: 'imagen',
  standalone: false
})
export class ImagenPipe implements PipeTransform {

  transform( img: string | undefined | null, size: string = 'w500', tipo: 'poster'|'avatar'|'backdrop' = 'poster'): string {
    if ( !img ) {
      // Seleccionar fallback según tipo
      switch (tipo) {
        case 'avatar':
          return 'assets/no-avatar.svg';
        case 'backdrop':
          return 'assets/no-image-banner.svg';
        default:
          return 'assets/no-image-banner.svg';
      }
    }
    return `${URL}/${size}${img}`;
  }
}
