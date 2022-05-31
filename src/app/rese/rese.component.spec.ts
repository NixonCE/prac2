import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReseComponent } from './rese.component';

describe('ReseComponent', () => {
  let component: ReseComponent;
  let fixture: ComponentFixture<ReseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
