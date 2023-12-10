import { Component, Output, EventEmitter } from '@angular/core';
import {
  FormControl,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
})
export class SearchComponent {
  orderSearch = new FormControl('', {
    nonNullable: true,
    validators: [Validators.required],
  });

  @Output() searchFilter = new EventEmitter();
  name = '';
  changeHandler(event: Event) {
    // if (this.orderSearch.valid) {
    //   const value = this.orderSearch.value
    //   console.log(value);

    //   if (value) {
    //     this.searchSearch.emit(value)
    //   }
    // }
    console.log(event);
    const input = event.target as HTMLInputElement;
    console.log(input.value);
    this.searchFilter.emit(input.value);
  }
  
  enviarDatos() {
    console.log('new');
    console.log(this.name);
    this.searchFilter.emit(this.name);
  }
}
