import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent {

    showContent = false;

    constructor() { }

    onToggleContent(): void {
        this.showContent = !this.showContent;
    }
}
