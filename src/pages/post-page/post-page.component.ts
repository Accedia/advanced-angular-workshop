import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../../models/post.model';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'aw-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.scss']
})
export class PostPageComponent implements OnInit {
  private routeSubscription: Subscription;
  private isLoading: boolean = false;
  private post: Post;

  constructor(private activatedRoute: ActivatedRoute, private postService: PostService) { }
  ngOnInit() {

    this.routeSubscription = this.activatedRoute.params.subscribe(routeParamsObject => {
      this.getPostById(routeParamsObject.id)
    });
  }

  ngOnDestroy() {
    this.routeSubscription.unsubscribe();
  }

  getPostById(id: string) {
    this.isLoading = true;

    this.postService.getPostById(id).subscribe(
      post => {
        this.isLoading = false;
        this.post = post;
      },
      error => {
        this.isLoading = false;
        this.post = undefined;
      }
    )
  }


  getNextPostUrl(id: string) {
    return '/posts/' + (Number(id) + 1);
  }
}
