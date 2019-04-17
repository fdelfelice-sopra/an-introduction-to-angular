import { Component, Input, Output , EventEmitter, OnInit  } from '@angular/core';

@Component({
  selector: 'app-like-btn',
  templateUrl: './like-btn.component.html',
  styleUrls: ['./like-btn.component.less']
})
export class LikeBtnComponent implements OnInit {
  
  @Input() like : boolean;
  @Input() id : number;
  @Output() likeClicked : EventEmitter<any> = new EventEmitter<any>();
  liked:boolean;
  label:string;
  
  ngOnInit():void{
    this.liked = this.like;
    this.label = this.like?'Dislike':'Like it!';
  }

  clicked():void{
    this.liked = this.liked? false : true;
    this.label = this.liked?'Dislike':'Like it!';
    this.likeClicked.emit([this.id , this.liked ]);   
  }

}
