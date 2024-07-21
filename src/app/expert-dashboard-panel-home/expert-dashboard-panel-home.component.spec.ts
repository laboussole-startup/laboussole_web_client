import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertDashboardPanelHomeComponent } from './expert-dashboard-panel-home.component';

describe('ExpertDashboardPanelHomeComponent', () => {
  let component: ExpertDashboardPanelHomeComponent;
  let fixture: ComponentFixture<ExpertDashboardPanelHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExpertDashboardPanelHomeComponent]
    });
    fixture = TestBed.createComponent(ExpertDashboardPanelHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
