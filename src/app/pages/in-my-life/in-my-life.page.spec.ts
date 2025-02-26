import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InMyLifePage } from './in-my-life.page';

describe('InMyLifePage', () => {
  let component: InMyLifePage;
  let fixture: ComponentFixture<InMyLifePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(InMyLifePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
