import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TuiToggleModule } from '@taiga-ui/kit';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, TuiToggleModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  isDark: boolean | undefined;

  constructor(private themeService: ThemeService) {
    this.isDark = this.themeService.getDarkTheme();
  }

  onToggle() {
    this.isDark = this.themeService.toggleTheme();
  }
}
