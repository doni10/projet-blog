import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class BlogService {

  postSubject =new Subject<any[]>();

  private posts = [];
  
  constructor(private httpClient: HttpClient) { }

  emitPostSubject(){
    this.postSubject.next(this.posts.slice());
  }
  
  addPost(title: string,content: string){
    const postObject = {
      id:0, 
      title: '',
      content: '',
      loveIts:0 
    }
    postObject.title = title;
    postObject.content = content;
    postObject.id = this.posts[(this.posts.length-1)].id + 1;
    this.posts.push(postObject);
    this.emitPostSubject();
  }
  
  removePost(i: number){
    this.posts.splice(i, 1);
    this.emitPostSubject();
  }

  setloveIts(i: number,loveIts: number){
    this.posts[i].loveIts = loveIts;
    this.emitPostSubject();
  }
  
  getPostsFromServer(){
    this.httpClient
      .get<any[]>('https://httpclient-00001.firebaseio.com/posts.json')
      .subscribe(
        (response) => {
          this.posts = response;
          this.emitPostSubject();
        },
        (error) => {
          console.log('Erreur ! ' + error);
        }
      );
  }
}
