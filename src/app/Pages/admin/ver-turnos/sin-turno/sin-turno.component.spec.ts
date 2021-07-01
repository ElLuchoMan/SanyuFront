import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinTurnoComponent } from './sin-turno.component';

describe('SinTurnoComponent', () => {
  let component: SinTurnoComponent;
  let fixture: ComponentFixture<SinTurnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SinTurnoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SinTurnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
