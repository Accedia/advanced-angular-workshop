import {
    Component,
    EventEmitter,
    OnInit,
    Output
    } from '@angular/core';

@Component({
    selector: 'aw-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {

    @Output() toggleContent = new EventEmitter();

    onToggleContent() {
        this.toggleContent.emit();
    }
}
