import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import{NavbarComponent} from './navbar/navbar.component';
import{MaisonComponent} from'./maison/maison.component'
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,NavbarComponent,MaisonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MyPortfolio';
}
