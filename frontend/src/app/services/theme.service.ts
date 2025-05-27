import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  darkMode = signal<boolean>(false);

  toggle() {
    const isDark = !this.darkMode();
    this.darkMode.set(isDark);
    document.documentElement.classList.toggle('dark', isDark);
  }

  isDark() {
    return this.darkMode();
  }
}
