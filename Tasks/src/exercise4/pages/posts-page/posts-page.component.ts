/*
  Tasks
  1. Import and implement OnInit 
  1. Implement ngOnInit function and set
     the posts in it. This is the query:  
  this.postService.getPosts().then(posts => {
      this.isLoadingPosts = false;
      this.posts = posts;
    }).catch(error => {
      this.isLoadingPosts = false;
      console.error(error);
    })
*/

import { Component } from '@angular/core';
import { PostService } from '../../services/post.service';
import { Post } from '../../models/post.model';

//TODO - make form for adding post in the posts array and add task for making some check on ngOnChange

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

  constructor(private postService: PostService) { }

  /* 
    Note:
    Any async calls go in the ngOnInit lifecycle hook, simmilar to the 
    componentDidMount one in react.
  */

  ngOnInit() {
    // this.postService.getPosts().then(posts => { ...
  }
}

