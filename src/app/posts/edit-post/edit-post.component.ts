import { Component, OnInit } from '@angular/core';

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

  constructor(private postsService: PostsService) { }

  ngOnInit() {
    this.post = this.postsService.getPost(1);
    this.postTitle = this.post.title;
    this.postBody = this.post.body;
  }

  onUpdatePost() {
    this.postsService.updatePost(this.post.id, {title: this.postTitle, body: this.postBody});
  }
}
