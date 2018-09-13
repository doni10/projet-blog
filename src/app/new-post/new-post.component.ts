import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms'
import { BlogService } from '../services/blog.service';
import { Router } from '@angular/router'
import { post } from '../../../node_modules/@types/selenium-webdriver/http';
import { Post } from '../models/post.model';
@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {

  postForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private blogService: BlogService,
  private router: Router) { }

  ngOnInit() {
    this.initForm()
  }

  initForm(){
    this.postForm = this.formBuilder.group({
      title: ['', Validators.required],
      content: ['', Validators.required]
    })
  }
  
  onSavePost(){
    const title = this.postForm.get('title').value;
    const content = this.postForm.get('content').value;
    this.blogService.addPost(title, content);
    this.router.navigate(['/posts']);
  }
}
