import {
  AfterViewInit,
  Directive,
  ElementRef,
} from '@angular/core';
import { ThemeService } from '../services/theme.service';

@Directive({
  selector: '[appTheme]',
  standalone: true,
})
export class ThemeDirective implements AfterViewInit {
  private isDarkTheme: boolean = false;

  constructor(
    private elementRef: ElementRef,
    private ThemeService: ThemeService
  ) {
    if (this.ThemeService.getDarkTheme()) {
      this.elementRef.nativeElement.classList.add('dark');
    }
  }

  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }
}
