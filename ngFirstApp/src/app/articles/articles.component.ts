import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.less']
})
export class ArticlesComponent implements OnInit {
  articlesTitle: string = "Articles";
  articlesPrefix: string = "Article";
  articlesList : any[] = ['First','Second','Third'];

  constructor() { }

  ngOnInit() {
  }

}
