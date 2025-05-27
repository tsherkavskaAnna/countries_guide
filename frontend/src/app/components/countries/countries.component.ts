import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-countries',
  imports: [CommonModule],
  templateUrl: './countries.component.html',
  styleUrl: './countries.component.css'
})
export class CountriesComponent implements OnInit {
  private countriesService = inject(CountriesService);
  countries = signal<any[]>([]);

  ngOnInit() {
    this.loadAll();
  }

  loadAll() {
    this.countriesService.getCountries().subscribe(data => {
      this.countries.set(data);
    });
  }

  search(query: string) {
    this.countriesService.searchCountry(query).subscribe({
      next: (data) => this.countries.set(data),
      error: () => this.countries.set([])
    })
  }
}
