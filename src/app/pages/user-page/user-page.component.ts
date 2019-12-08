import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'aw-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {
  user: {id: number, name: string};

  constructor() { }

  ngOnInit() { }
}