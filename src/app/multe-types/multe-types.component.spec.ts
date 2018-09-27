import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MulteTypesComponent } from './multe-types.component';

describe('MulteTypesComponent', () => {
  let component: MulteTypesComponent;
  let fixture: ComponentFixture<MulteTypesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MulteTypesComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MulteTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
