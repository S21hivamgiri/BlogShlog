import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';
import { COMMA, ENTER, SPACE } from '@angular/cdk/keycodes';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

import { DomSanitizer } from '@angular/platform-browser'

const defaultText = 'hi I ma y t rwe jf vkf kndchh jc s';

interface Tags {
 name: string; 
}

@Component({
  selector: 'app-text-editor',
  templateUrl: './text-editor.component.html',
  styleUrls: ['./text-editor.component.scss']
})
export class TextEditorComponent implements OnInit {
  presentText = this.sanitizer.bypassSecurityTrustHtml(defaultText);
  title = '';
  removable=true;
  visible = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA, SPACE];
  tags: Tags[] = [
    { name: 'Lamhey' }
  ];
  titleFormControl = new FormControl('', [
    Validators.required
  ]);
  chipFormControl = new FormControl('');
  
  setFormat(commandName: string, value?: string) {
    // Non-IE case
    var sel = window.getSelection();
    // Temporarily enable designMode so that
    // document.execCommand() will work
    document.designMode = "on";
    // Select the element's content
    sel = window.getSelection();
    // Execute the command
    document.execCommand(commandName, false, value);
    // Disable designMode
    document.designMode = "off";
    sel?.removeAllRanges();
  }

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
  }

  add(event: MatChipInputEvent): void {
    const value = event.value;
    // Add our fruit
    if ((value || '').trim()) {
      if (this.tags.length < 20)
        this.tags.push({ name: value.trim() });
    }
    // Reset the input value
    event.chipInput!.clear();
  }

  remove(fruit: Tags): void {
    const index = this.tags.indexOf(fruit);
    if (index >= 0) {
      this.tags.splice(index, 1);
    }
  }

  drop(event: CdkDragDrop<[]>) {
    moveItemInArray(this.tags, event.previousIndex, event.currentIndex);
  }
}


