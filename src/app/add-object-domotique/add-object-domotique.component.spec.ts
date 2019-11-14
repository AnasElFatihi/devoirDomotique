import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddObjectDomotiqueComponent } from './add-object-domotique.component';

describe('AddObjectDomotiqueComponent', () => {
  let component: AddObjectDomotiqueComponent;
  let fixture: ComponentFixture<AddObjectDomotiqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddObjectDomotiqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddObjectDomotiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
