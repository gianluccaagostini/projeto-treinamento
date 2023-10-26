import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadsatrarUsuariosComponent } from './cadsatrar-usuarios.component';

describe('CadsatrarUsuariosComponent', () => {
  let component: CadsatrarUsuariosComponent;
  let fixture: ComponentFixture<CadsatrarUsuariosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadsatrarUsuariosComponent]
    });
    fixture = TestBed.createComponent(CadsatrarUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
