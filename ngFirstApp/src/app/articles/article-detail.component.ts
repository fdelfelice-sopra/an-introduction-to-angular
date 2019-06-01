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


  constructor(private route:ActivatedRoute) {
    console.log(this.route.snapshot.paramMap.get('id')); //Retrive id parameter
   }


  ngOnInit() {
  }

}
