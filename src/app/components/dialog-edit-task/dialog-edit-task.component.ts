import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TasksFacade } from 'src/app/modules/tasks/+state/tasks.facade';
import { Task } from 'src/app/resources/interfaces/task.interface';

@Component({
  selector: 'app-dialog-edit-task',
  templateUrl: './dialog-edit-task.component.html',
  styleUrls: ['./dialog-edit-task.component.scss']
})
export class DialogEditTaskComponent implements OnInit {

  task!: Task;
  editTaskForm!: FormGroup;
  minDate!: Date;

  constructor(
    private tasksFacade: TasksFacade,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: DialogEditTaskComponent
  ) {
    //@ts-ignore
    this.task = data;
  }

  ngOnInit(): void {
    this.initEditTaskForm();
    this.setInitialValueEditTaskForm();
  }

  onSubmit(): void {
    this.tasksFacade.editTodoTask(this.task._id, { ...this.task, ...this.editTaskForm.value });
  }

  isChanged(): boolean {
    return  this.editTaskForm.controls.title.value !== this.task.title ||
            this.editTaskForm.controls.description.value !== this.task.description ||
            this.editTaskForm.controls.priority.value !== this.task.priority ||
            this.editTaskForm.controls.finishDate.value !== this.task.finishDate
    ? true : false;
  }

  private initEditTaskForm(): void {
    this.minDate = new Date();
    this.editTaskForm = this.fb.group({
      title: ['', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(80)
      ]],
      description: ['', [
        Validators.minLength(3),
        Validators.maxLength(255)
      ]],
      priority: ['', Validators.required],
      finishDate: ['', Validators.required]
    });
  }

  private setInitialValueEditTaskForm(): void {
    this.editTaskForm.setValue({
      title: this.task.title,
      description: this.task.description,
      priority: this.task.priority,
      finishDate: this.task.finishDate
    });
  }
}
