import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewMultaComponent } from '@app/components/new-multa/new-multa.component';

describe('NewMultaComponent', () => {
  let component: NewMultaComponent;
  let fixture: ComponentFixture<NewMultaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NewMultaComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewMultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
