import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { NumberValueAccessor } from '@angular/forms/src/directives';

import {IArticle} from './article';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.less']
})
export class ArticlesComponent implements OnInit , OnChanges {
  articlesTitle: string = 'Articles';
  articlesPrefix : string = 'Article';
  articlesFirtsList : any[] = ['First','Second','Third'];
  changeLog:any = [];

  likedNum : number;

  likeThis(who:number): void{
    this.likedNum = who+1;
  }

  @Input() columns : number;

  articles_hardCoded : IArticle[] =[
      {
        "id": 1,
        "title": "Article Title 1",
        "picture": "https://placeimg.com/640/480/tech?1",
        "plot": "Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.",
        "tag": "tech",
        "like": false
      },
      {
        "id": 2,
        "title": "Article Title 2",
        "picture": "https://placeimg.com/640/480/tech?2",
        "plot": "Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.",
        "tag": "tech",
        "like": true
      },
      {
        "id": 3,
        "title": "Article Title 3",
        "picture": "https://placeimg.com/640/480/tech?3",
        "plot": "Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.",
        "tag": "tech",
        "like": false
      }
  ];




  constructor() { }

  ngOnInit() {
    this.columns = 4;
    console.log('1.' + this.columns);
  }

  //detects changes to input properties of the component (not all changes!)
  ngOnChanges(changes: SimpleChanges) {
    for (let propName in changes) {
      let chng = changes[propName];
      let cur  = JSON.stringify(chng.currentValue);
      let prev = JSON.stringify(chng.previousValue);
      this.changeLog.push(`${propName}: currentValue = ${cur}, previousValue = ${prev}`);
      console.log(this.changeLog);
    }
  }
}
