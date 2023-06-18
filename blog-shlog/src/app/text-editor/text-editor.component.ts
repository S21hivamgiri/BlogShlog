import { Component, OnInit } from '@angular/core';

import { DomSanitizer } from '@angular/platform-browser'

const defaultText = 'hi I ma y t rwe jf vkf kndchh jc s';


@Component({
  selector: 'app-text-editor',
  templateUrl: './text-editor.component.html',
  styleUrls: ['./text-editor.component.scss']
})
export class TextEditorComponent implements OnInit {

  presentText = this.sanitizer.bypassSecurityTrustHtml(defaultText);  
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

}


