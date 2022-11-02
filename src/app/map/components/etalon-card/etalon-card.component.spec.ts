import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtalonCardComponent } from './etalon-card.component';

describe('EtalonCardComponent', () => {
  let component: EtalonCardComponent;
  let fixture: ComponentFixture<EtalonCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EtalonCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EtalonCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
