import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgAfterContentCheckedComponent } from './ng-after-content-checked.component';

describe('NgAfterContentCheckedComponent', () => {
  let component: NgAfterContentCheckedComponent;
  let fixture: ComponentFixture<NgAfterContentCheckedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgAfterContentCheckedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NgAfterContentCheckedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
