import {
    Component,
    EventEmitter,
    OnInit,
    Output
    } from '@angular/core';

@Component({
    selector: 'aw-add-post-panel',
    templateUrl: './add-post-panel.component.html',
    styleUrls: ['./add-post-panel.component.css']
})
export class AddPostPanelComponent {

    postContent: string;
    postAuthor: string;

    @Output() addPost = new EventEmitter<any>();
    
    constructor() { }

    onAddPost(): void {
        this.addPost.emit({ content: this.postContent, author: this.postAuthor });
    }
}
