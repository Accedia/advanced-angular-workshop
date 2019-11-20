import { Component, OnInit } from '@angular/core';

import { PostsService } from './services/posts.service';
import { Post } from './models/post.model';

@Component({
  selector: 'aw-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  private posts: Post[] = [];

  constructor(private postsService: PostsService) { }

  ngOnInit() {
    this.posts = this.postsService.getPosts();
  }
}
