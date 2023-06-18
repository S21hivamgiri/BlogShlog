import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-text-toolbar',
  templateUrl: './text-toolbar.component.html',
  styleUrls: ['./text-toolbar.component.scss']
})
export class TextToolbarComponent {
  @Output() textFormat = new EventEmitter<string>();
  setTextFormat(event: Event) {
    this.textFormat.emit((event.target as HTMLElement).parentElement?.dataset.action); 
  }
}
