import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from '../landing-page/landing-page.component';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, LandingPageComponent, NavbarComponent],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

}
