import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboaedComponent } from './dashboard.component';

describe('DashboaedComponent', () => {
  let component: DashboaedComponent;
  let fixture: ComponentFixture<DashboaedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboaedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboaedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
