import { Component, EventEmitter, Output } from '@angular/core';
import { MatIcon } from '@angular/material/icon'
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import {debounceTime } from 'rxjs';

@Component({
  selector: 'app-searchbar',
  imports: [MatIcon, ReactiveFormsModule],
  templateUrl: './searchbar.component.html',
  styleUrl: './searchbar.component.css'
})
export class SearchbarComponent {
  @Output() search = new EventEmitter<string>();

  control = new FormControl('');

  constructor() {
    this.control.valueChanges.pipe(debounceTime(500)).subscribe(value => {
      this.search.emit(value?.trim());
    })
  }

  onSubmit(event: Event) {
    event.preventDefault();
    const input = (event.target as HTMLFormElement).querySelector('input') as HTMLInputElement;
    const query = input.value.trim();
    if (query) {
      this.search.emit(query);
    }

  }

}
