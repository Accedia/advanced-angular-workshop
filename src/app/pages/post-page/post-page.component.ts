import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { PostsService } from 'src/app/services/posts.service';
import { Post } from 'src/app/models/post.model';

@Component({
  selector: 'aw-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.css']
})
export class PostPageComponent implements OnInit {
  post: Post;

  constructor(private postService: PostsService, 
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        const postId = +params['id'];
        this.post = this.postService.getPost(postId);
      }
    )
  }
}
