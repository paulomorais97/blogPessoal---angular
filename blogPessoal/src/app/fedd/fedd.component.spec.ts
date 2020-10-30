import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeddComponent } from './fedd.component';

describe('FeddComponent', () => {
  let component: FeddComponent;
  let fixture: ComponentFixture<FeddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
