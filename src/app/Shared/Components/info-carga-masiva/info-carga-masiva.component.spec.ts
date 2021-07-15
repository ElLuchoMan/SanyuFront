import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoCargaMasivaComponent } from './info-carga-masiva.component';

describe('InfoCargaMasivaComponent', () => {
  let component: InfoCargaMasivaComponent;
  let fixture: ComponentFixture<InfoCargaMasivaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoCargaMasivaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoCargaMasivaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
