import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmittalComponent } from './submittal.component';

describe('SubmittalComponent', () => {
  let component: SubmittalComponent;
  let fixture: ComponentFixture<SubmittalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmittalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmittalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
