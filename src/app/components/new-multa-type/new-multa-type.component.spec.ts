import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewMultaTypeComponent } from '@app/components/new-multa-type/new-multa-type.component';

describe('NewMultaTypeComponent', () => {
  let component: NewMultaTypeComponent;
  let fixture: ComponentFixture<NewMultaTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NewMultaTypeComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewMultaTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
