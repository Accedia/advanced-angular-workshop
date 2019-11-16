/*
  Tasks
  1. Import and implement OnInit 
  2. Implement ngOnInit function and set
     the posts in it. This is the query:  
  this.postService.getPosts().then(posts => {
      this.isLoading = false;
      this.posts = posts;
    }).catch(error => {
      this.isLoading = false;
      console.error(error);
    })
*/

import { Component } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { PostService } from '../../services/post.service';
import { Post } from '../../models/post.model';

/* 
  Note:
  To use any of the lifecycle hooks you need to implement the corresponding
  interface. For this example we want to use ngOnInit so we implement OnInit.
*/

@Component({
  selector: 'aw-posts-page',
  templateUrl: './posts-page.component.html',
  styleUrls: ['./posts-page.component.scss']
})
export class PostsPageComponent {
  private isLoading: boolean = true;
  private posts: Post[];
  postForm;

  constructor(
    private formBuilder: FormBuilder,
    private postService: PostService
  ) {
    this.postForm = this.formBuilder.group({
      title: new FormControl(),
      body: new FormControl()
    });
  }

  onSubmit(post) {
    this.posts.unshift({title: post.title, body: post.body, id: 7, userId: 4, dateCreated: Date.now().toString()});
    this.postForm.reset();
  }

  /* 
    Note:
    Any async calls go in the ngOnInit lifecycle hook, simmilar to the 
    componentDidMount one in react.
  */

  ngOnInit() {
    // this.postService.getPosts().then(posts => { ...
  }
}

