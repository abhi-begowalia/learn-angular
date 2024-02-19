import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreWhiteSpaComponent } from './pre-white-spa.component';

describe('PreWhiteSpaComponent', () => {
  let component: PreWhiteSpaComponent;
  let fixture: ComponentFixture<PreWhiteSpaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PreWhiteSpaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PreWhiteSpaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
