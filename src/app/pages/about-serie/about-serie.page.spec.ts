import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AboutSeriePage } from './about-serie.page';

describe('AboutSeriePage', () => {
  let component: AboutSeriePage;
  let fixture: ComponentFixture<AboutSeriePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutSeriePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
