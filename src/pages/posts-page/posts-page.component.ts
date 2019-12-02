import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { PostService } from '../../services/post.service';
import { Post } from '../../models/post.model';
import { tap } from 'rxjs/operators';
import { FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'aw-posts-page',
  templateUrl: './posts-page.component.html',
  styleUrls: ['./posts-page.component.scss']
})
export class PostsPageComponent implements OnInit {
  public posts: Post[] = [];
  private isLoadingPosts = true;
  @ViewChild('title', { static: true }) title: ElementRef;
  postForm;

  constructor(
    private formBuilder: FormBuilder,
    private postService: PostService
  ) {
    this.postForm = this.formBuilder.group({
      title: new FormControl(),
      body: new FormControl()
    });
  }

  onSubmit(post) {
    this.posts.unshift({ title: post.title, body: post.body, id: 7, userId: 4, dateCreated: Date.now().toString() });
    this.postForm.reset();
  }

  ngOnInit() {
    this.postService.getPosts()
      .pipe(
        tap(posts => {
          console.log('got posts ', posts);
          this.isLoadingPosts = false;
        }),
      )
      .subscribe(posts => {
        this.posts = posts;
      });
  }

  ngAfterViewInit() {
    console.log(this.title)
  }
}
