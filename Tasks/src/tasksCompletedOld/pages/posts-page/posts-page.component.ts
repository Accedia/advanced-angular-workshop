import { Component, OnInit, OnDestroy } from '@angular/core';
import { from } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

export class Post {
  id: Number
  title: String
  body: String
  dateCreated: string
  userId: Number
};


@Component({
  selector: 'aw-posts-page',
  templateUrl: './posts-page.component.html',
  styleUrls: ['./posts-page.component.scss']
})
export class PostsPageComponent implements OnInit, OnDestroy {
  public posts: Post[] = [];
  private subscription;

  ngOnInit() {
    this.subscription = from(fetch('https://jsonplaceholder.typicode.com/posts'))
    .pipe(
      switchMap(response => response.json()),
      map(posts => {
        return posts.map(post => {return {...post, dateCreated: Date.now()} });
      })
    )
    .subscribe(response => {
      this.posts = response;
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
