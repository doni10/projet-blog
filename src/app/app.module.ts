import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MonPostComponent } from './mon-post/mon-post.component';
import { MonPostItemComponent } from './mon-post-item/mon-post-item.component';
import { BlogService } from './services/blog.service';
import { NewPostComponent } from './new-post/new-post.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '../../node_modules/@angular/router';
import { Routes } from '@angular/router'
import { HttpClientModule } from '@angular/common/http';

const appRoutes: Routes =[
  { path: 'posts', component: MonPostComponent },
  { path: 'new', component: NewPostComponent },
  { path: '', component: MonPostComponent },
  { path: '**', redirectTo:'posts'}
]


@NgModule({
  declarations: [
    AppComponent,
    MonPostComponent,
    MonPostItemComponent,
    NewPostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    BlogService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
