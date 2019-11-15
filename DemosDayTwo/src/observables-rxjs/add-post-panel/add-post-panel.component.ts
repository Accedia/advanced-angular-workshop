import { Component } from '@angular/core';

import { SharedDataService } from '../services/shared-data.service';

@Component({
    selector: 'aw-add-post-panel',
    templateUrl: './add-post-panel.component.html',
    styleUrls: ['./add-post-panel.component.css']
})
export class AddPostPanelComponent {

    postContent: string;
    postAuthor: string;
    
    constructor(private sharedDataService: SharedDataService) { }

    onAddPost(): void {
        this.sharedDataService.addPost(this.postContent, this.postAuthor);
    }
}
