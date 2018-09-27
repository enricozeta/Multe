import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultaTypesComponent } from '@app/components/multa-types/multa-types.component';

describe('MulteTypesComponent', () => {
  let component: MultaTypesComponent;
  let fixture: ComponentFixture<MultaTypesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MultaTypesComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultaTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
