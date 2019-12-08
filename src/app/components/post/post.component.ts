import { Component, Input } from '@angular/core';

import { Post } from 'src/app/models/post.model';

@Component({
  selector: 'aw-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  @Input() post: Post;
}
