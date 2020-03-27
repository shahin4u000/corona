import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoronaTableViewComponent } from './corona-table-view.component';

describe('CoronaTableViewComponent', () => {
  let component: CoronaTableViewComponent;
  let fixture: ComponentFixture<CoronaTableViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoronaTableViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoronaTableViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
