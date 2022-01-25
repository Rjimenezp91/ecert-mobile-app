import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutomatizaFirmasComponent } from './automatiza-firmas.component';

describe('AutomatizaFirmasComponent', () => {
  let component: AutomatizaFirmasComponent;
  let fixture: ComponentFixture<AutomatizaFirmasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutomatizaFirmasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutomatizaFirmasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
