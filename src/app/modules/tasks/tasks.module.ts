import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksRoutingModule } from './tasks-routing.module';
import { TasksComponent } from './tasks.component';
import { TasksFacade } from './+state/tasks.facade';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatMenuModule } from '@angular/material/menu';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { TodoListComponent } from './todo-list/todo-list.component';
import { DoneListComponent } from './done-list/done-list.component';


@NgModule({
  declarations: [
    TasksComponent,
    TodoListComponent,
    DoneListComponent
  ],
  imports: [
    CommonModule,
    TasksRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatCheckboxModule,
    MatTooltipModule,
    MatMenuModule,
    MatSnackBarModule,
    DragDropModule
  ],
  providers: [TasksFacade]
})
export class TasksModule { }
