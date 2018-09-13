import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { AppComponent } from '../app.component';
import { BlogService } from '../services/blog.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-mon-post',
  templateUrl: './mon-post.component.html',
  styleUrls: ['./mon-post.component.css']
})
export class MonPostComponent implements OnInit, OnDestroy {
  
  Posts : any[];
  postSubscription: Subscription;
  
  constructor(private blogService: BlogService) {
  
  } 
  ngOnInit() {
    this.postSubscription = this.blogService.postSubject.subscribe(
      (posts: any[]) => {
        this.Posts = posts;
      }
    );
    this.blogService.emitPostSubject();
  }

  onFetch(){
    this.blogService.getPostsFromServer();
  }

  ngOnDestroy(){
    this.postSubscription.unsubscribe();
  }
  
}
