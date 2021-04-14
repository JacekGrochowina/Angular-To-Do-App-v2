import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/+state/app-state.model';
import { Task } from 'src/app/resources/interfaces/task.interface';
import { selectTasksDone, selectTasksTodo } from './tasks.selectors';
import {
    AddTodoTask,
    DelTodoTask,
    EditTodoTask,
    DropTodoTask,
    AddDoneTask,
    DelDoneTask,
    EditDoneTask,
    DropDoneTask
} from './tasks.actions';

@Injectable()
export class TasksFacade {
    todo$ = this.store.select(selectTasksTodo);
    done$ = this.store.select(selectTasksDone);

    constructor(private store: Store<AppState>) {}

    addTodoTask(task: Task): void {
        this.store.dispatch(new AddTodoTask(task));
    }

    delTodoTask(id: string): void {
        this.store.dispatch(new DelTodoTask(id));
    }

    editTodoTask(id: string, task: Task): void {
        this.store.dispatch(new EditTodoTask({ id, task }));
    }

    dropTodoTask(previousIndex: number, currentIndex: number): void {
        this.store.dispatch(new DropTodoTask({ previousIndex, currentIndex }));
    }

    addDoneTask(task: Task): void {
        this.store.dispatch(new AddDoneTask(task));
    }

    delDoneTask(id: string): void {
        this.store.dispatch(new DelDoneTask(id));
    }

    editDoneTask(id: string, task: Task): void {
        this.store.dispatch(new EditDoneTask({ id, task }));
    }

    dropDoneTask(previousIndex: number, currentIndex: number): void {
        this.store.dispatch(new DropDoneTask({ previousIndex, currentIndex }));
    }
}
