/*
  Tasks:
    1. Remove hardcoded data and initialize posts as empty array
    2. Import OnInit interface and implement ngOnInit() to make request for posts data
    3. This is the request for posts:
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json => this.posts = json.map(post => {return {...post, dateCreated: Date.now()} }));
*/

import { Component } from '@angular/core';

export class Post {
  id: Number
  title: String
  body: String
  dateCreated: string
  userId: Number
};

//TODO - make form for adding post in the posts array and add task for making some check on ngOnChange

@Component({
  selector: 'aw-posts-page',
  templateUrl: './posts-page.component.html',
  styleUrls: ['./posts-page.component.scss']
})
export class PostsPageComponent {
  public posts: Post[] = [
    {
      id: 1,
      title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      body: "quia et suscipit\nsuscipit recusandae recusand recusand aerecusandaer ecusanda eaere cusandaer ecusa ndaerecus andae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto quia et suscipit\nsuscipit recusandae recusand recusand aerecusandaer ecusanda eaere cusandaer ecusa ndaerecus andae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
      dateCreated: "2019-10-06T22:24:53.299Z",
      userId: 1
    },
    {
      id: 2,
      title: "qui est esse",
      body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
      dateCreated: "2019-10-12T02:34:59.342Z",
      userId: 2,
    },
    {
      id: 3,
      title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
      body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
      dateCreated: "2019-10-18T12:00:42.948Z",
      userId: 3,
    },
    {
      id: 4,
      title: "eum et est occaecati",
      body: "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
      dateCreated: "2019-10-24T19:02:27.145Z",
      userId: 4,
    },
    {
      id: 5,
      title: "nesciunt quas odio",
      body: "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque",
      dateCreated: "2019-10-30T07:25:69.552Z",
      userId: 5
    }
  ]
}
