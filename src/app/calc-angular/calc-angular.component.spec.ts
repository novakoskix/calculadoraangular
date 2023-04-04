import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcAngularComponent } from './calc-angular.component';

describe('CalcAngularComponent', () => {
  let component: CalcAngularComponent;
  let fixture: ComponentFixture<CalcAngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalcAngularComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalcAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
