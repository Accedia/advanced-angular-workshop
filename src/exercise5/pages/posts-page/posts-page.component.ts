import { Component, OnInit } from '@angular/core';

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
export class PostsPageComponent implements OnInit {
  public posts: Post[] = [];

  ngOnInit() {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(json => this.posts = json.map(post => {return {...post, dateCreated: Date.now()} }));
  }
}
