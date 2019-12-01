import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Post } from '../../models/post.model';

@Component({
  selector: 'aw-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnChanges {
  @Input() post: Post;

  ngOnChanges(changes: SimpleChanges) {
    // TODO 3.1
    // console...
  }
}
