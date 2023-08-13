import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TuiToggleModule } from '@taiga-ui/kit';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, TuiToggleModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  themeToggle = false;

  onToggle() {
    this.themeToggle = !this.themeToggle;
    console.log(this.themeToggle);
  }
}
