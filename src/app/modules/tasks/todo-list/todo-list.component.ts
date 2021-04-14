import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { DialogAddTaskComponent } from 'src/app/components/dialog-add-task/dialog-add-task.component';
import { DialogConfirmComponent } from 'src/app/components/dialog-confirm/dialog-confirm.component';
import { DialogEditTaskComponent } from 'src/app/components/dialog-edit-task/dialog-edit-task.component';
import { DialogInfoTaskComponent } from 'src/app/components/dialog-info-task/dialog-info-task.component';
import { TasksPriority } from 'src/app/resources/enums/tasks-priority.enum';
import { Task } from 'src/app/resources/interfaces/task.interface';
import { TasksFacade } from '../+state/tasks.facade';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {

  tasksTodo$ = this.tasksFacade.todo$;
  private unsubscribe$ = new Subject<void>();

  constructor(
    public dialog: MatDialog,
    private tasksFacade: TasksFacade
  ) {}

  drop(event: CdkDragDrop<string[]>) {
    this.tasksFacade.dropTodoTask(event.previousIndex, event.currentIndex);
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

  openDialogAddTask(): void {
    this.dialog.open(DialogAddTaskComponent);
  }

  openDialogInfoTask(task: Task): void {
    this.dialog.open(DialogInfoTaskComponent, {
      data: task,
      width: '83%',
      maxWidth: '500px'
    });
  }

  idOutdated(task: Task): boolean {
    return task.finishDate < new Date() ? true : false;
  }

  makeDoneTask(task: Task): void {
    this.tasksFacade.delTodoTask(task._id);
    this.tasksFacade.addDoneTask(task);
  }

  editTodoTask(task: Task): void {
    this.dialog.open(DialogEditTaskComponent, {
      data: task,
      width: '83%',
      maxWidth: '500px'
    });
  }

  confirmDialogDelTodoTask(id: string): void {
    const title = 'Usuwanie zadania';
    const message = 'Czy na pewno chcesz usunąć zadanie?';
    const dialogData = { title, message };
    const dialogRef = this.dialog.open(DialogConfirmComponent, {
      data: dialogData
    });

    dialogRef.afterClosed()
    .pipe(takeUntil(this.unsubscribe$))
    .subscribe(dialogResult => {
      if(dialogResult) {
        this.delTodoTask(id);
      }
    });
  }

  private delTodoTask(id: string): void {
    this.tasksFacade.delTodoTask(id);
  }
}
