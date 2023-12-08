import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',
})
export class NavComponent {
  filter = signal<'upcoming' | 'completed' | 'past'>('upcoming');

  changeFilter(filter: 'upcoming' | 'completed' | 'past') {
    this.filter.set(filter);
  }
}
