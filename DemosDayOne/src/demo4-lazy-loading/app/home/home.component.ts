import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'aw-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private router: Router) { }

  onShowPosts() {
    this.router.navigate(['/posts']);
  }
}
