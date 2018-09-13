import { Component, OnInit, Input } from '@angular/core';
import { BlogService } from '../services/blog.service';

@Component({
  selector: 'app-mon-post-item',
  templateUrl: './mon-post-item.component.html',
  styleUrls: ['./mon-post-item.component.css']
})
export class MonPostItemComponent implements OnInit {

  @Input() monPostTitle: string ;
  @Input() monPostContent: string ;
  @Input() loveIts: number ;
  @Input() created_at: Date ;
  @Input() index: number ;

  constructor(private blogService: BlogService) {
    this.created_at = new Date();
    this.monPostContent = "";
    this.monPostTitle = "";
    
   }

  ngOnInit() {
  }

  increaseLike(){
    this.loveIts++ ;
    this.blogService.setloveIts(this.index, this.loveIts);
  }

  decreaseLike(){
    this.loveIts-- ;
    this.blogService.setloveIts(this.index, this.loveIts);
  }
  getColor(){
    if (this.loveIts > 0){
      return 'green';
    } else if (this.loveIts < 0){
      return 'red';
    }
  }

  getDate(){
    return this.created_at;
  }

  onDelete(){
    this.blogService.removePost(this.index);
    
  }
}
