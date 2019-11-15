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

  getPostById(id: string): Observable<Post | undefined> {
    return this.http.get('https://jsonplaceholder.typicode.com/posts/' + id).pipe(
      map(post =>
        post
          ? addDateToPost(post) as Post
          : undefined
      )
    )
  }

  getPosts(): Observable<Post[]> {
    return this.http.get('https://jsonplaceholder.typicode.com/posts').pipe(
      map(posts => (posts as Object[]).map(addDateToPost) as Post[])
    );
  }
}

const addDateToPost = post => ({ ...post, dateCreated: Date.now() })
