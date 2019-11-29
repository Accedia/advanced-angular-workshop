import {
    Component,
    OnDestroy,
    OnInit
    } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import {
    find,
    map,
    skip,
    take
    } from 'rxjs/operators';

import { SharedDataService } from '../services/shared-data.service';

@Component({
    selector: 'aw-posts-list',
    templateUrl: './posts-list.component.html',
    styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit, OnDestroy {

    posts = [
        {
            content: "This is our first awesome post.",
            author: "Jane Doe"
        },
        {
            content: "This is another post which is a post and was posted as a post.",
            author: "John Doe"
        },
        {
            content: "This post is the best post on Earth.",
            author: "Donald Bump"
        },
        {
            content: "This is our final and most awesome post.",
            author: "Sashka Vaseva"
        }
    ];

    myObservableSubscription: Subscription;

    myObservable = new Observable(observer => {
        for(let i = 0; i < 100; i++) {
            setTimeout(() => {
                observer.next('Emitting value number: ' + i);
            }, i * 1000);
        }
    });

    constructor(private sharedDataService: SharedDataService) { }

    ngOnInit() {
        this.sharedDataService.addPostSubject.subscribe(post => this.posts.push(post));
        this.sharedDataService.addPostBehaviorSubject.subscribe(post => this.posts.push(post));
        this.sharedDataService.addPostReplaySubject.subscribe(post => this.posts.push(post));

        this.myObservable.pipe(
            map(data => data + ' Appended text'),
            skip(2),
            take(5),
            find(data => data.indexOf('5') > -1)
        ).subscribe(data => console.log(data));
    }

    ngOnDestroy() {
        this.myObservableSubscription.unsubscribe();
    }
}
