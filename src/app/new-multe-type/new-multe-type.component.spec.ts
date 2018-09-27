import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewMulteTypeComponent } from './new-multe-type.component';

describe('NewMulteTypeComponent', () => {
  let component: NewMulteTypeComponent;
  let fixture: ComponentFixture<NewMulteTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NewMulteTypeComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewMulteTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
