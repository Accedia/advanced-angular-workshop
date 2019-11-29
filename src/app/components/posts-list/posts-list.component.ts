import {
    Component,
    Input,
    OnChanges,
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked, 
    AfterViewInit, 
    AfterViewChecked, 
    OnDestroy,
    SimpleChanges,
    ElementRef,
    ViewChild,
    ContentChild
} from '@angular/core';

@Component({
    selector: 'aw-posts-list',
    templateUrl: './posts-list.component.html',
    styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit, 
                                            OnChanges,
                                            DoCheck, 
                                            AfterContentInit,
                                            AfterContentChecked, 
                                            AfterViewInit, 
                                            AfterViewChecked, 
                                            OnDestroy {

    @Input() post: any;
    @ViewChild('header', { static: false}) headerViewChild: ElementRef;
    @ContentChild('appContent', { static: false}) appContentChild: ElementRef;

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

    constructor() {
        console.log("Posts list === constructor === was called!");
    }

    ngOnInit() {
        console.log("Posts list === ON INIT === was called!");
        console.log(this.headerViewChild);
        console.log(this.appContentChild);
    }

    ngOnChanges() {
        console.log("Posts list === ON CHANGES === was called!");
    }

    ngDoCheck() {
        console.log("Posts list === DO CHECK === was called!");
    }

    ngAfterContentInit() {
        console.log("Posts list === AFTER CONTENT INIT === was called!");
        console.log(this.appContentChild);
    }

    ngAfterViewInit() {
        console.log("Posts list === AFTER VIEW INIT === was called!");
        console.log(this.headerViewChild);
    }

    ngAfterContentChecked() {
        console.log("Posts list === AFTER CONTENT CHECKED === was called!");
    }

    ngAfterViewChecked() {
        console.log("Posts list === AFTER VIEW CHECKED === was called!");
    }

    ngOnDestroy() {
        console.log("Posts list === ON DESTROY === was called!");
    }
}
