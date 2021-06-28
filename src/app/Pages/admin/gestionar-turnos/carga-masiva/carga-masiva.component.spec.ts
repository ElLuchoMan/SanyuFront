import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CargaMasivaComponent } from './carga-masiva.component';

describe('CargaMasivaComponent', () => {
  let component: CargaMasivaComponent;
  let fixture: ComponentFixture<CargaMasivaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CargaMasivaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CargaMasivaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
