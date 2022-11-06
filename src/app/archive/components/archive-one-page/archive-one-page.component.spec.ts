import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchiveOnePageComponent } from './archive-one-page.component';

describe('ArchiveOnePageComponent', () => {
  let component: ArchiveOnePageComponent;
  let fixture: ComponentFixture<ArchiveOnePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArchiveOnePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchiveOnePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
