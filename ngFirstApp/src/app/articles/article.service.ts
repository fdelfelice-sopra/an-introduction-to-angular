import {} from '@angular/core';
import { IArticle } from './article';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class ArticleService{
    getArticles() : IArticle[]{
        //HERE TEMP DATA RETRIEVING
        return [
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
        ]
    }


}

