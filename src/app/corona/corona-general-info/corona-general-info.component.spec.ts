import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoronaGeneralInfoComponent } from './corona-general-info.component';

describe('CoronaGeneralInfoComponent', () => {
  let component: CoronaGeneralInfoComponent;
  let fixture: ComponentFixture<CoronaGeneralInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoronaGeneralInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoronaGeneralInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
