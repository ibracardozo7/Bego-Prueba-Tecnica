import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderUpcomingComponent } from './order-upcoming.component';

describe('OrderUpcomingComponent', () => {
  let component: OrderUpcomingComponent;
  let fixture: ComponentFixture<OrderUpcomingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderUpcomingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OrderUpcomingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
