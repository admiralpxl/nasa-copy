import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NasaCardComponent } from './nasa-card.component';

describe('NasaCardComponent', () => {
  let component: NasaCardComponent;
  let fixture: ComponentFixture<NasaCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NasaCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NasaCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
