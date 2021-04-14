import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { DialogAddTaskComponent } from 'src/app/components/dialog-add-task/dialog-add-task.component';
import { TasksFacade } from './+state/tasks.facade';
import { exampleTasks } from 'src/app/resources/data/example-tasks';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  tasksTodo$ = this.tasksFacade.todo$;
  tasksDone$ = this.tasksFacade.done$;
  private unsubscribe$ = new Subject<void>();

  constructor(
    public dialog: MatDialog,
    private tasksFacade: TasksFacade,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.openInfoSnackBar();
  }

  openDialogAddTask(): void {
    this.dialog.open(DialogAddTaskComponent);
  }

  openInfoSnackBar() {
    this.snackBar.open('Nie chce Ci się wpisywać ręcznie? Dodaj przykładowe zadania jednym kliknięciem', 'Dodaj zadania', {
      duration: 5000,
      horizontalPosition: 'end',
      verticalPosition: 'bottom',
      panelClass: ['info-snackbar']
    }).onAction()
    .pipe(takeUntil(this.unsubscribe$))
    .subscribe(() => this.addExampleTasks());
  }

  addExampleTasks(): void {
    exampleTasks.forEach(task => this.tasksFacade.addTodoTask(task));
  }
}
