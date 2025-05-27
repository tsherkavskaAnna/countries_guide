import { Component } from '@angular/core';
import { SearchbarComponent } from '../searchbar/searchbar.component';
import { CountriesComponent } from '../countries/countries.component';

@Component({
  selector: 'app-main',
  imports: [SearchbarComponent, CountriesComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
