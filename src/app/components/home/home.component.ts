import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  images = [
    { id: 1, image: 'https://i.pinimg.com/564x/73/ae/21/73ae21f8e6059fb39111285fd5d78125.jpg', titulo: 'XDDDDDDDD' },
    { id: 2, image: 'https://i.pinimg.com/564x/10/9e/bb/109ebb210e01d4f6f1dd0a0a2686e9cd.jpg', titulo: 'El es tan lindo!' },
    { id: 3, image: 'https://i.pinimg.com/564x/a3/b2/31/a3b2310603e1265b970e6be7089aeadc.jpg', titulo: 'Mehico' },
    { id: 4, image: 'https://i.pinimg.com/564x/4e/6a/e6/4e6ae6d1dfc5a3d047946b53e06a0a65.jpg', titulo: 'Mehico 2' },
    { id: 5, image: 'https://i.pinimg.com/564x/3b/b8/80/3bb88048d4b98630f43bcb5e31e9a9c6.jpg', titulo: 'Quando o assunto é perereca' },
    { id: 6, image: 'https://i.pinimg.com/564x/a0/c7/0e/a0c70ea181a3fab1907fff1f7fd3f5a5.jpg', titulo: 'XD' },
    { id: 7, image: 'https://i.pinimg.com/564x/14/fd/fc/14fdfc95fd3be0ae59587df1c5c18a6b.jpg', titulo: 'Waltermelon' },
    { id: 8, image: 'https://i.pinimg.com/736x/ec/d6/62/ecd662cbb98e5b9f2528415862c56837.jpg', titulo: 'cock + mentos' },
  ];
}
