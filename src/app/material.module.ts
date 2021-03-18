import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  exports: [
    MatCardModule,
    MatIconModule,
    MatSnackBarModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule
  ]
})
export class MaterialModule { }