import { Injectable } from '@angular/core';
import {
    BehaviorSubject,
    Observable,
    ReplaySubject,
    Subject
    } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class SharedDataService {

    public addPostObservable = new Observable<any>();
    public addPostSubject = new Subject<any>();
    public addPostBehaviorSubject = new BehaviorSubject<any>({});
    public addPostReplaySubject = new ReplaySubject<any>();

    constructor() { }

    public addPost(content: string, author: string): void {
        this.addPostSubject.next({ content: content + ' -> Subject', author });
        this.addPostBehaviorSubject.next({ content: content + ' -> Behavior Subject', author});
        this.addPostReplaySubject.next({ content: content + ' -> Replay Subject', author});
    }
}
