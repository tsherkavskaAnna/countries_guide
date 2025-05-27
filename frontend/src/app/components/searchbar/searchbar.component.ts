import { Component, EventEmitter, Output } from '@angular/core';
import { MatIcon } from '@angular/material/icon'

@Component({
  selector: 'app-searchbar',
  imports: [MatIcon],
  templateUrl: './searchbar.component.html',
  styleUrl: './searchbar.component.css'
})
export class SearchbarComponent {
  @Output() search = new EventEmitter<string>();

  onSubmit(form: HTMLFormElement) {
    const query = (form.elements.namedItem('search') as HTMLInputElement).value.trim();
    if (query) {
      this.search.emit(query)
    }
  }

}
