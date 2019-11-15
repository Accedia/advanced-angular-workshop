import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { Post } from '../../models/post.model';
import { tap } from 'rxjs/operators';


@Component({
  selector: 'aw-posts-page',
  templateUrl: './posts-page.component.html',
  styleUrls: ['./posts-page.component.scss']
})
export class PostsPageComponent implements OnInit {
  public posts: Post[] = [];
  private isLoadingPosts = true;

  constructor(private postService: PostService) { }

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
}
