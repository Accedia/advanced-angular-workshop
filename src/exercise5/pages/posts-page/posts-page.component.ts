/*
  Tasks:
    1. Finish the ngOnInit implementation.
*/

import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { Post } from '../../models/post.model';
import { tap } from 'rxjs/operators';


@Component({
  selector: 'aw-posts-page',
  templateUrl: './posts-page.component.html',
  styleUrls: ['./posts-page.component.scss']
})
export class PostsPageComponent implements OnInit {
  public posts: Post[] = [];
  private isLoadingPosts = true;

  constructor(private postService: PostService) { }

  /*
     Note:
     Every observable has a pipe method that you can use to
     'chain' methods that you need executed once a value has
     been emmitted. For instance, the 'tap' method is often 
     used to peek at the value or to set loading states,
     while a 'map' method will be useful if we need to map a
     value to another one. 
   */
  ngOnInit() {
    //this.postSubscription = this.postService.getPosts().pipe(...).subscribe(...)
  }
}
