import { CommonModule } from '@angular/common';
import { Component, inject, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-countries',
  imports: [CommonModule],
  templateUrl: './countries.component.html',
  styleUrl: './countries.component.css'
})
export class CountriesComponent implements OnChanges {
  @Input() filter = '';

  countries: any[] = [];
  loading = true;
  error = '';

  private countriesService = inject(CountriesService);

  ngOnChanges(changes: SimpleChanges): void {
    this.loading = true;
    if (this.filter) {
      this.countriesService.searchCountry(this.filter).subscribe({
        next: (res) => {
          this.countries = res;
          this.loading = false;
        },
        error: (err) => {
          this.error = 'Nessun risultato trovato';
          this.loading = false;
        }
      });
    } else {
      this.countriesService.getCountries().subscribe({
        next: (res) => {
          this.countries = res;
          this.loading = false;
        },
        error: (err) => {
          this.error = 'Errore con caricamenti lista di paesi';
          this.loading = false;
        }
      })
    }
  }

}
