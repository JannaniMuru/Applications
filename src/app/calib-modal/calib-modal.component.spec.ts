import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalibModalComponent } from './calib-modal.component';

describe('CalibModalComponent', () => {
  let component: CalibModalComponent;
  let fixture: ComponentFixture<CalibModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalibModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
   
    fixture = TestBed.createComponent(CalibModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
