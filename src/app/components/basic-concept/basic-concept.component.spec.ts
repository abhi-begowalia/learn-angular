import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicConceptComponent } from './basic-concept.component';

describe('BasicConceptComponent', () => {
  let component: BasicConceptComponent;
  let fixture: ComponentFixture<BasicConceptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicConceptComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BasicConceptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
