import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieWallComponent } from './movie-wall.component';

describe('MovieWallComponent', () => {
  let component: MovieWallComponent;
  let fixture: ComponentFixture<MovieWallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieWallComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieWallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
