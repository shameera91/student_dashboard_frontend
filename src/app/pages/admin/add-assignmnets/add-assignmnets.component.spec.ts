import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAssignmnetsComponent } from './add-assignmnets.component';

describe('AddAssignmnetsComponent', () => {
  let component: AddAssignmnetsComponent;
  let fixture: ComponentFixture<AddAssignmnetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAssignmnetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAssignmnetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
