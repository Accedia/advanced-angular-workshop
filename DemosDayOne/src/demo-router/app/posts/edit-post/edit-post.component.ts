import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { PostsService } from './../posts.service';
import { Post } from '../post.model';

@Component({
  selector: 'aw-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {
  post: Post;
  postTitle = '';
  postBody = '';
  allowEdit = false;

  constructor(private postsService: PostsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        const postId = +params['id'];
        this.post = this.postsService.getPost(postId);
        this.postTitle = this.post.title;
        this.postBody = this.post.body;
      }
    )

    this.route.queryParams.subscribe(
      (params: Params) => {
        this.allowEdit = params['allowEdit'] == '1' ? true : false;
      }
    )
  }

  onUpdatePost() {
    this.postsService.updatePost(this.post.id, {title: this.postTitle, body: this.postBody});
  }
}
