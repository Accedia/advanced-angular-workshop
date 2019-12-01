import { Component } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { PostService } from '../../services/post.service';
import { Post } from '../../models/post.model';

/* 
  Note:
  To use any of the lifecycle hooks you need to implement the corresponding
  interface. For this example we want to use ngOnInit so we implement OnInit.
*/

// TODO 1.1
@Component({
  selector: 'aw-posts-page',
  templateUrl: './posts-page.component.html',
  styleUrls: ['./posts-page.component.scss']
})
export class PostsPageComponent {
  private isLoading: boolean = true;
  public posts: Post[] = [];
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
    this.posts.unshift({title: post.title, body: post.body, id: 7, userId: 4, dateCreated: Date.now().toString()});
    this.postForm.reset();
  }

  /* 
    Note:
    Any async calls go in the ngOnInit lifecycle hook, simmilar to the 
    componentDidMount one in react.
  */
  ngOnInit() {
    // TODO 1.2, TODO 1.3
    // this.postService.getPosts().then(posts => { ...
  }
}

