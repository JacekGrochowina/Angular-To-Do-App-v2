import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TasksFacade } from 'src/app/modules/tasks/+state/tasks.facade';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-dialog-add-task',
  templateUrl: './dialog-add-task.component.html',
  styleUrls: ['./dialog-add-task.component.scss']
})
export class DialogAddTaskComponent implements OnInit {

  addTaskForm!: FormGroup;
  minDate!: Date;

  constructor(
    private tasksFacade: TasksFacade,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.initAddTaskForm();
  }

  onSubmit(): void {
    this.tasksFacade.addTodoTask({
      _id: uuidv4(),
      ...this.addTaskForm.value,
      startDate: new Date(),
      isDone: false
    });
  }

  private initAddTaskForm(): void {
    this.minDate = new Date();
    this.addTaskForm = this.fb.group({
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
}
