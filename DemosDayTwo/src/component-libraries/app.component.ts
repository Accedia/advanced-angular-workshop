import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

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

    constructor() { }
}
