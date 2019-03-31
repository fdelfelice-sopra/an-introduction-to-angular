import { Component, OnInit } from '@angular/core';
import { NumberValueAccessor } from '@angular/forms/src/directives';

import {IArticle} from './article';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.less']
})
export class ArticlesComponent implements OnInit {
  articlesTitle: string = 'Articles';
  articlesPrefix : string = 'Article';
  articlesFirtsList : any[] = ['First','Second','Third'];
  imgWidth : number = 640;
  imgHeight : number = 480;
  imgUrl : string = '//placeimg.com/'+this.imgWidth+'/'+this.imgHeight+'/tech?1';
  
  likedNum : number;

  likeThis(who:number): void{
    this.likedNum = who+1;
  }

  columns : number = 6;

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
  }

}
