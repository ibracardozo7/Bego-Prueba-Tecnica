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
  filter = signal<'upcoming' | 'completed' | 'past' | ''>('');

  @Output() filterName = new EventEmitter();

  // filterNameHandler() {
  //   console.log('mandando name');
  //   const filter = this.filter;
  // }

  changeFilter(filter: 'upcoming' | 'completed' | 'past') {
    console.log(filter);
    this.filter.update((prev) => {
      if (prev == filter) {
        return '';
      }

      return filter;
    });
    this.filterName.emit(filter);
  }
}
