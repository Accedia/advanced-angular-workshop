import { Component, OnInit } from '@angular/core';

import { Post } from '../post.model';
import { PostsService } from './../posts.service';

@Component({
  selector: 'aw-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  post: Post;

  constructor(private postService: PostsService) { }

  ngOnInit() {
    this.post = this.postService.getPost(1);
  }
}
