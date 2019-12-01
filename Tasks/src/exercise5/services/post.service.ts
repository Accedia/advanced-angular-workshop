/*
  Note:
  When using the http module, there is no need to unsubscribe
  from observables since every request ultimately completes, and
  the module takes care of the observable for us.
*/

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Post } from '../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  constructor(private http: HttpClient) { }

  /*
    Note:
    The url for the post request is 'https://jsonplaceholder.typicode.com/posts/<id>'

    Don't forget to add a date to each post using the map function
  */
  getPostById(id: string): Observable<Post | undefined> {
    // TODO 1.1
    return undefined // return this.http.get(...
  }

  getPosts(): Observable<Post[]> {
    return this.http.get('https://jsonplaceholder.typicode.com/posts').pipe(
      map(posts => (posts as Object[]).map(addDateToPost) as Post[])
    );
  }
}

const addDateToPost = post => ({ ...post, dateCreated: Date.now() })
