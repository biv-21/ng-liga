import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-news-form',
  templateUrl: 'add-news-form.component.html',
  styles: [
  ]
})
export class AddNewsFormComponent {

  constructor(private dialogRef: MatDialogRef<AddNewsFormComponent>) { }
  title = new FormControl('', [Validators.required]);
  cancelClick() {
    this.dialogRef.close();
  }

}
