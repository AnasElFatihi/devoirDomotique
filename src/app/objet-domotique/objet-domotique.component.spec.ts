import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjetDomotiqueComponent } from './objet-domotique.component';

describe('ObjetDomotiqueComponent', () => {
  let component: ObjetDomotiqueComponent;
  let fixture: ComponentFixture<ObjetDomotiqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObjetDomotiqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjetDomotiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
