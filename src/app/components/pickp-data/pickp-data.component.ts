import { Component, Input } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { Driver, Result } from '../../models/orderDetail.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pickp-data',
  standalone: true,
  imports: [CommonModule, MatExpansionModule],
  templateUrl: './pickp-data.component.html',
  styleUrl: './pickp-data.component.scss',
})
export class PickpDataComponent {
  @Input() driver!: Result;
}
