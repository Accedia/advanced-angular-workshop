import { Component } from '@angular/core';
import { Post } from '../../models/post.model';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../../services/post.service';

//TODO - make form for adding post in the posts array and add task for making some check on ngOnChange

@Component({
  selector: 'aw-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.scss']
})
export class PostPageComponent {
  private post: Post | undefined;

  constructor(
    private activatedRoute: ActivatedRoute,
    private postService: PostService
  ) {
    this.post = this.postService.getPostById(this.activatedRoute.snapshot.params.id);
  }
}
