import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {

  private isDarkTheme = true;

  constructor() {
    /** 
    if(sessionStorage.getItem('isDarkTheme') === true.toString()) {
      this.isDarkTheme = true;
    }
    */
  }

  setDarkTheme(isDarkTheme: boolean): void {
    this.isDarkTheme = isDarkTheme;
    //sessionStorage.setItem('isDarkTheme', isDarkTheme.toString());
  }

  toggleTheme(): boolean {
    this.isDarkTheme = !this.isDarkTheme;
    return this.isDarkTheme;
  }

  getDarkTheme(): boolean {
    return this.isDarkTheme;
  }
}
