/*
  Tasks
  1. Implement ngOnChanges function to print on the console 
      the current value and the previous value of the post
*/


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
    // 
  }
}
