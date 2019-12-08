import { FormsModule } from '@angular/forms';
import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { FilterPipe } from './pipes/filter/filter.pipe';
import { UnlessDirective } from './directives/unless/unless.directive';
import { ImpovedHighlightDirective } from './directives/improved-highlight/improved-highlight.directive';
import { HighlightDirective } from './directives/highlight/highlight.directive';
import { PostPageComponent } from './pages/post-page/post-page.component';
import { PostsPageComponent } from './pages/posts-page/posts-page.component';
import { PostComponent } from './components/post/post.component';

@NgModule({
    declarations: [
      PostsPageComponent,
      PostPageComponent,
      PostComponent,
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