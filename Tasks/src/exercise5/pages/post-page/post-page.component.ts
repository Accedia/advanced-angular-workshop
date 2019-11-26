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
  private posts: Post[];

  constructor(private activatedRoute: ActivatedRoute, private postService: PostService) { }
  ngOnInit() {

    // this.postService.getPosts().then(posts => {
    //   this.isLoading = false;
    //   this.posts = posts;
    // }).catch(error => {
    //   this.isLoading = false;
    //   console.error(error);
    // })
    
    /*
      Note:
      We are subscribing to route param changes so that we are
      notified any time the id in the urlchanges. This will
      ensure that the user gets the correct post every time.
    */


    this.routeSubscription = this.activatedRoute.params.subscribe(routeParamsObject => {
      this.getPostById(routeParamsObject.id)
    });
  }

  /*
    Note:
    It's important to unsubscribe from any subscriptions you have
    initialized throughout the life of your component. This is to
    prevent your application from having memory leaks which will 
    lead to bad user experience.
  */
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