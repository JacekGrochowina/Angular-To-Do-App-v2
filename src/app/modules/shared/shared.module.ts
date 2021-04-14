import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ToolbarComponent } from 'src/app/components/toolbar/toolbar.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { DialogAddTaskComponent } from 'src/app/components/dialog-add-task/dialog-add-task.component';
import { DialogInfoTaskComponent } from 'src/app/components/dialog-info-task/dialog-info-task.component';
import { DialogConfirmComponent } from 'src/app/components/dialog-confirm/dialog-confirm.component';
import { DialogEditTaskComponent } from 'src/app/components/dialog-edit-task/dialog-edit-task.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';

const SharedComponents = [
  ToolbarComponent,
  FooterComponent,
  DialogAddTaskComponent,
  DialogInfoTaskComponent,
  DialogConfirmComponent,
  DialogEditTaskComponent
];

@NgModule({
  declarations: [SharedComponents],
  entryComponents: [
    DialogAddTaskComponent,
    DialogInfoTaskComponent,
    DialogConfirmComponent,
    DialogEditTaskComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule
  ],
  exports: [SharedComponents]
})
export class SharedModule { }
