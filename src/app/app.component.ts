import { Component, Input } from '@angular/core';
import { BlogService } from './services/blog.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  
   
  constructor(private blogService: BlogService) {
    //this.posts=blogService.posts;
  }  
  
}
