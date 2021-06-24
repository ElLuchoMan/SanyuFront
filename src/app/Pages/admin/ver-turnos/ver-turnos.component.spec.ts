import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerTurnosComponent } from './ver-turnos.component';

describe('VerTurnosComponent', () => {
  let component: VerTurnosComponent;
  let fixture: ComponentFixture<VerTurnosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerTurnosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerTurnosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
