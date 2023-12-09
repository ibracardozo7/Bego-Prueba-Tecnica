import { Component, Output, EventEmitter } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
})
export class SearchComponent {
  orderFilter = new FormControl('', {
    nonNullable: true,
    validators: [Validators.required],
  });

  @Output() searchFilter = new EventEmitter();

  search() {
    console.log("search");
    this.searchFilter.emit(this.orderFilter);
  }

  changeHandler() {
    if (this.orderFilter.valid) {
      const value = this.orderFilter.value.trim();
      console.log(value);

      if (value !== '') {
        // this.addTask(value);
        // this.newTaskCtrl.setValue('');
      }
    }
  }
}
