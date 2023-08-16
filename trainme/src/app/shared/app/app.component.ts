import { NgDompurifySanitizer } from '@tinkoff/ng-dompurify';
import {
  TuiRootModule,
  TuiDialogModule,
  TuiAlertModule,
  TUI_SANITIZER,
} from '@taiga-ui/core';
import { Component, OnInit } from '@angular/core';
import {
  BreakpointObserver,
  Breakpoints,
  LayoutModule,
} from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../components/footer/footer.component';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { HeaderComponent } from '../components/header/header.component';
import { ThemeDirective } from '../directives/theme.directive';
import { ThemeService } from '../services/theme.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    TuiRootModule,
    TuiDialogModule,
    TuiAlertModule,
    FooterComponent,
    NavbarComponent,
    LayoutModule,
    HeaderComponent,
    ThemeDirective,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [{ provide: TUI_SANITIZER, useClass: NgDompurifySanitizer }],
})
export class AppComponent implements OnInit {
  title = 'trainme';

  constructor(private breakPointObserver: BreakpointObserver,
    public themeService: ThemeService) {}

  ngOnInit(): void {
    this.breakPointObserver
      .observe([
        Breakpoints.XSmall,
        Breakpoints.Small,
        Breakpoints.Medium,
        Breakpoints.Large,
        Breakpoints.XLarge,
      ])
      .subscribe((result) => {
        const breakpoints = result.breakpoints;

        if (breakpoints[Breakpoints.XSmall]) {
          console.log('Matches XSmall viewport');
        } else if (breakpoints[Breakpoints.Small]){
          console.log('Matches Small viewport');
        } else if (breakpoints[Breakpoints.Medium]){
          console.log('Matches Medium viewport');
        } else if (breakpoints[Breakpoints.Large]){
          console.log('Matches Large viewport');
        } else if (breakpoints[Breakpoints.XLarge]){
          console.log('Matches XLarge viewport');
        }
      });
  }
}
