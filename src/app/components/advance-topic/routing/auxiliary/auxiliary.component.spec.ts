import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuxiliaryComponent } from './auxiliary.component';

describe('AuxiliaryComponent', () => {
  let component: AuxiliaryComponent;
  let fixture: ComponentFixture<AuxiliaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuxiliaryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AuxiliaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
