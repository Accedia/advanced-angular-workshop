import { FormsModule } from '@angular/forms';
import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { FilterPipe } from './pipes/filter/filter.pipe';
import { UnlessDirective } from './directives/unless/unless.directive';
import { ImpovedHighlightDirective } from './directives/improved-highlight/improved-highlight.directive';
import { HighlightDirective } from './directives/highlight/highlight.directive';
import { EditPostComponent } from './edit-post/edit-post.component';
import { PostComponent } from './post/post.component';
import { PostsComponent } from './posts.component';

@NgModule({
    declarations: [
      PostsComponent,
      PostComponent,
      EditPostComponent,
      HighlightDirective,
      ImpovedHighlightDirective,
      UnlessDirective,
      FilterPipe
    ],
    imports: [
      FormsModule,
      CommonModule,
      PostsRoutingModule
    ]
})
export class PostsModule {}