import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent {

    showContent = false;
    newPost: any;

    constructor() { }

    onToggleContent(): void {
        this.showContent = !this.showContent;
    }

    onAddPost(newPost: any): void {
        this.newPost = newPost;
    }
}
