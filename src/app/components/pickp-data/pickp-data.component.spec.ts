import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PickpDataComponent } from './pickp-data.component';

describe('PickpDataComponent', () => {
  let component: PickpDataComponent;
  let fixture: ComponentFixture<PickpDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PickpDataComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PickpDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
