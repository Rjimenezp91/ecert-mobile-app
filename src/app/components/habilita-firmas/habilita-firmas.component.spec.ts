import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HabilitaFirmasComponent } from './habilita-firmas.component';

describe('HabilitaFirmasComponent', () => {
  let component: HabilitaFirmasComponent;
  let fixture: ComponentFixture<HabilitaFirmasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HabilitaFirmasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HabilitaFirmasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
