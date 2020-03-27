import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoronaStatComponent } from './corona-stat.component';

describe('CoronaStatComponent', () => {
  let component: CoronaStatComponent;
  let fixture: ComponentFixture<CoronaStatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoronaStatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoronaStatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
