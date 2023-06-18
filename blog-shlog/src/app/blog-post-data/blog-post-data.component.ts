import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';
import { COMMA, ENTER, SPACE } from '@angular/cdk/keycodes';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Tags } from '../interfaces/tags';

@Component({
  selector: 'app-blog-post-data',
  templateUrl: './blog-post-data.component.html',
  styleUrls: ['./blog-post-data.component.scss']
})
export class BlogPostDataComponent {
  removable = true;
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
