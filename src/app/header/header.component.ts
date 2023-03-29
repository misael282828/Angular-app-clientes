import { Component} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'

})
export class HeaderComponent {
  title: string ='Angular app';
  curso: string ='Curso Angular con Spring';
  profesor: string ='Misael Guzmán';
}