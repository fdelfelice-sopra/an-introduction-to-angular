import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { NumberValueAccessor } from '@angular/forms/src/directives';
import {IArticle} from './article';
import { ArticleService } from './article.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.less']
})
export class ArticlesComponent implements OnInit {
  articlesTitle: string = 'Articles';
  articlesPrefix : string = 'Article';
  articlesFirtsList : any[] = ['First','Second','Third'];
  changeLog:any = [];
  
  articles : IArticle[] = [];

  errorMessage:string;

  @Input() columns : number;

  constructor(private articleService: ArticleService) { 
    
  }

  ngOnInit() {
    this.columns = 4;
    console.log('1.' + this.columns);

    this.articleService.getArticles().subscribe(
      articles => {
          this.articles=articles;          
      },
     error => this.errorMessage = <any>error //casting to any
      
  );

  }

  onNotify(notification:any):void{
    //this.articlesTitle = message;
    this.articles[notification[0]-1].like=notification[1];
  }


}
