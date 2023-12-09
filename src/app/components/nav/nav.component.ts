import { Component, signal, Output, EventEmitter } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',
})
export class NavComponent {
  filter: 'upcoming' | 'completed' | 'past' = 'upcoming';

  @Output() filterName = new EventEmitter();

  changeFilter(filter: 'upcoming' | 'completed' | 'past') {
    this.filter = filter;
  }

  filterNameHandler() {
    console.log('mandando name');
    const filter = this.filter;
    this.filterName.emit(filter);
  }
}
