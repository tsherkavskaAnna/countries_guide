import { CommonModule } from '@angular/common';
import { Component, HostBinding, signal } from '@angular/core';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  title = 'Countries';

  constructor(public darkService: ThemeService) { }

  toggleDark() {
    this.darkService.toggle();
  }

}
