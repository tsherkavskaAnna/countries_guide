import { Component, signal } from '@angular/core';
import { SearchbarComponent } from '../searchbar/searchbar.component';
import { CountriesComponent } from '../countries/countries.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main',
  imports: [SearchbarComponent, CountriesComponent, CommonModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  query = signal('');

  onSearch(text: string) {
    this.query.set(text);
  }
}
