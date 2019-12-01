import { Component, OnInit } from '@angular/core';

import { PostsService } from './posts.service';
import { Post } from './post.model';

@Component({
  selector: 'aw-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: Post[] = [];

  constructor(private postsService: PostsService) { }

  ngOnInit() {
    this.posts = this.postsService.getPosts();
  }
}
