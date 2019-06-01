import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IArticle } from './article';
import { ArticleService } from './article.service';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.less']
})
export class ArticleDetailComponent implements OnInit {

  errorMessage = '';
  article: IArticle | undefined;

  constructor(private route:ActivatedRoute,
              private articleService: ArticleService
              ) {
    
   }


   ngOnInit() {
    const param = this.route.snapshot.paramMap.get('id');
    if (param) {
      const id = +param;
      this.getArticle(id);
    }
  }

  getArticle(id: number) {
    this.articleService.getArticle(id).subscribe(
      article => this.article = article,
      error => this.errorMessage = <any>error);
  }




}
