import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlesPanelComponent } from './articles-panel.component';

describe('ArticlesPanelComponent', () => {
  let component: ArticlesPanelComponent;
  let fixture: ComponentFixture<ArticlesPanelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArticlesPanelComponent]
    });
    fixture = TestBed.createComponent(ArticlesPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
