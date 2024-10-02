import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateProduitComponent } from './create-produit.component';

describe('CreateProduitComponent', () => {
  let component: CreateProduitComponent;
  let fixture: ComponentFixture<CreateProduitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateProduitComponent]
    });
    fixture = TestBed.createComponent(CreateProduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
