import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Post } from '../post.model';
import { PostsService } from './../posts.service';

@Component({
  selector: 'aw-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
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

  onEdit() {
    this.router.navigate(['/posts', this.post.id, 'edit'], {queryParamsHandling: 'preserve'});
  }
}
