import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.less']
})
export class ArticlesComponent implements OnInit {
  articlesTitle: string = 'Articles';
  articlesPrefix : string = 'Article';
  articlesList : any[] = ['First','Second','Third'];
  imgWidth : number = 640;
  imgHeight : number = 480;
  imgUrl : string = '//placeimg.com/'+this.imgWidth+'/'+this.imgHeight+'/tech?1';
  likedNum : number;

  likeThis(who:number): void{
    this.likedNum = who+1;
  }

  constructor() { }

  ngOnInit() {
  }

}
