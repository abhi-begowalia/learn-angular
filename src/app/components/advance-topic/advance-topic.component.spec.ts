import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvanceTopicComponent } from './advance-topic.component';

describe('AdvanceTopicComponent', () => {
  let component: AdvanceTopicComponent;
  let fixture: ComponentFixture<AdvanceTopicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdvanceTopicComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdvanceTopicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
