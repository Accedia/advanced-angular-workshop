import { Component } from '@angular/core';

import { PostService } from '../../services/post.service';
import { Post } from '../../models/post.model';

@Component({
  selector: 'aw-posts-page',
  templateUrl: './posts-page.component.html',
  styleUrls: ['./posts-page.component.scss']
})
export class PostsPageComponent {
  public posts: Post[];

  constructor(postService: PostService) {
    this.posts = postService.getPosts();
  }
}
