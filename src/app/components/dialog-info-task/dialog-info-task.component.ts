import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TasksPriority } from 'src/app/resources/enums/tasks-priority.enum';
import { Task } from 'src/app/resources/interfaces/task.interface';

@Component({
  selector: 'app-dialog-info-task',
  templateUrl: './dialog-info-task.component.html',
  styleUrls: ['./dialog-info-task.component.scss']
})
export class DialogInfoTaskComponent {

  task!: Task;

  constructor(
    public dialogRef: MatDialogRef<DialogInfoTaskComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogInfoTaskComponent
  ) {
    //@ts-ignore
    this.task = data;
  }

  idOutdated(task: Task): boolean {
    return task.finishDate < new Date() ? true : false;
  }

  isLowPriority(task: Task): boolean {
    return task.priority === TasksPriority.low ? true : false;
  }

  isMidPriority(task: Task): boolean {
    return task.priority === TasksPriority.mid ? true : false;
  }

  isHightPriority(task: Task): boolean {
    return task.priority === TasksPriority.hight ? true : false;
  }
}
