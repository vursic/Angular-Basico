import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {
  
  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Capitan America'];
  heroesBorrados: string[] = [];

  borrarHeroe(): void {
    const heroeBorrado =  this.heroes.shift() || '';
    if (heroeBorrado.length > 0) {
      this.heroesBorrados.push(heroeBorrado);
    }
    
  }
 

}
