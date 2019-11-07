import { Component, Input } from '@angular/core';

import { Post } from '../../pages/posts-page/posts-page.component'

@Component({
  selector: 'aw-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {
  @Input() post: Post;
}
