import { TestBed, async, inject } from '@angular/core/testing';

import { ArticleDetailGuard } from './article-detail.guard';

describe('ArticleDetailGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ArticleDetailGuard]
    });
  });

  it('should ...', inject([ArticleDetailGuard], (guard: ArticleDetailGuard) => {
    expect(guard).toBeTruthy();
  }));
});
