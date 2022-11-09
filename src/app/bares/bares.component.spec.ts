import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaresComponent } from './bares.component';

describe('BaresComponent', () => {
  let component: BaresComponent;
  let fixture: ComponentFixture<BaresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
