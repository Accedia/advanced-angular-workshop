import {
    Component,
    EventEmitter,
    OnInit,
    Output
    } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
    selector: 'aw-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

    @Output() toggleContent = new EventEmitter();

    private observableExample = new Observable(observer => {
        observer.next('First call');
        observer.next('Second call');
        setTimeout(() => {
            observer.next('Third call');
        }, 3000)
        observer.next('Last call');
        //throw 'Errrrooor';
        //observer.complete();
    });

    ngOnInit() {
        console.log('Before subscription');

        this.observableExample.subscribe(data => {
            console.log(data);
        }, error => {
            console.log(error);
        }, () => {
            console.log('The observable was completed!');
        });

        console.log('After subscription');
    }

    onToggleContent(): void {
        this.toggleContent.emit();
    }
}
