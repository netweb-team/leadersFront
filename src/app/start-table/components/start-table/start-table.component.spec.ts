import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartTableComponent } from './start-table.component';

describe('StartTableComponent', () => {
  let component: StartTableComponent;
  let fixture: ComponentFixture<StartTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StartTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
