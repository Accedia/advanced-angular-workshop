import {
    AfterViewInit,
    Component,
    ElementRef,
    OnInit,
    ViewChild
    } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { tap } from 'rxjs/operators';

import { Post } from '../../models/post.model';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'aw-posts-page',
  templateUrl: './posts-page.component.html',
  styleUrls: ['./posts-page.component.scss']
})
export class PostsPageComponent implements OnInit, AfterViewInit {

    public posts: Post[] = [];
    private isLoading = true;
    @ViewChild('title', { static: true }) title: ElementRef;
    postForm: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
        private postService: PostService
    ) {
        this.postForm = this.formBuilder.group({
            title: new FormControl(),
            body: new FormControl()
        });
    }

    onSubmit(post: Post): void {
        this.posts.unshift(
            { 
                title: post.title, 
                body: post.body, 
                id: 7, userId: 4, 
                dateCreated: Date.now().toString() 
            }
        );

        this.postForm.reset();
    }

    /*
        Note:
        Every observable has a pipe method that you can use to
        'chain' methods that you need executed once a value has
        been emmitted. For instance, the 'tap' method is often 
        used to peek at the value or to set loading states,
        while a 'map' method will be useful if we need to map a
        value to another one. 
    */
    ngOnInit() {
        // TODO 2.1
        // this.postService.getPosts().pipe(...).subscribe(...)
    }

    ngAfterViewInit() {
        console.log(this.title);
    }
}
