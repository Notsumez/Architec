import { Component} from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-explorar',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, DatePipe],
  templateUrl: './explorar.component.html',
  styleUrl: './explorar.component.scss'
})
export class ExplorarComponent {
  dataAtual = new Date;
}
