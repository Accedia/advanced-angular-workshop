import { Component, OnInit } from '@angular/core';

import { PostsService } from '../../services/posts.service';
import { Post } from '../../models/post.model';

@Component({
  selector: 'aw-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.css']
})
export class PostPageComponent implements OnInit {
  post: Post;

  constructor(private postService: PostsService) { }

  ngOnInit() {
    this.post = this.postService.getPost(1);
  }
}
