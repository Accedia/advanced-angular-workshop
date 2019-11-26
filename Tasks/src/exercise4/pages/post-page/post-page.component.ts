/*
  Note:
  You may notice that when changing the url we do not actually
  get the corresponding post. This is because we checking for
  the route params in activatedRoute.snapshot which does not
  get updated. We will see how to get this to work in the next
  exercise when we talk about RxJS.
*/
import { Component, OnInit } from '@angular/core';
import { Post } from '../../models/post.model';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'aw-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.scss']
})
export class PostPageComponent implements OnInit {
  private post: Post | undefined;
  private isLoading: boolean = true;

  constructor(
    private activatedRoute: ActivatedRoute,
    private postService: PostService
  ) { }

  ngOnInit() {
    this.postService.getPostById(this.activatedRoute.snapshot.params.id).then((post: Post) => {
      this.post = post;
      this.isLoading = false;
    }).catch(error => {
      this.isLoading = false;
      console.error(error);
    })
  }

  getNextPostUrl() {
    return '/posts/' + (Number(this.activatedRoute.snapshot.params.id) + 1);
  }
}
