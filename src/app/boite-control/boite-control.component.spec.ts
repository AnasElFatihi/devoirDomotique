import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoiteControlComponent } from './boite-control.component';

describe('BoiteControlComponent', () => {
  let component: BoiteControlComponent;
  let fixture: ComponentFixture<BoiteControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoiteControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoiteControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
