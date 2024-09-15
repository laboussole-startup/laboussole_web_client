import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewExpertListComponent } from './view-expert-list.component';

describe('ViewExpertListComponent', () => {
  let component: ViewExpertListComponent;
  let fixture: ComponentFixture<ViewExpertListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewExpertListComponent]
    });
    fixture = TestBed.createComponent(ViewExpertListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
