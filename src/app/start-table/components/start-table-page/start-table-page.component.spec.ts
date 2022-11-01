import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartTablePageComponent } from './start-table-page.component';

describe('StartTablePageComponent', () => {
  let component: StartTablePageComponent;
  let fixture: ComponentFixture<StartTablePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartTablePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StartTablePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
