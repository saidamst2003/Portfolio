import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NavbarComponent} from './navbar/navbar.component';
import {MaisonComponent} from'./maison/maison.component';
import {AproposComponent}from'./apropos/apropos.component';
import {ExperienceeComponent}from'./experiencee/experiencee.component';
import{ContactComponent}from'./contact/contact.component';
import{CompetencesComponent}from'./competences/competences.component'
import { EducationComponent } from './education/education.component';
import { FooterComponent } from './footer/footer.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,NavbarComponent,MaisonComponent,AproposComponent,ExperienceeComponent,ContactComponent,CompetencesComponent,EducationComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MyPortfolio';
}
