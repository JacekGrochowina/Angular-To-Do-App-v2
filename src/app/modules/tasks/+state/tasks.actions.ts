import { Action } from '@ngrx/store';
import { DropTaskPayload } from 'src/app/resources/interfaces/payloads/drop-task.payload';
import { EditTaskPayload } from 'src/app/resources/interfaces/payloads/edit-task.payload';
import { Task } from 'src/app/resources/interfaces/task.interface';

export enum TasksActionTypes {
    addTodoTask = '[Tasks] Add Todo Task',
    delTodoTask = '[Tasks] Del Todo Task',
    editTodoTask = '[Tasks] Edit Todo Task',
    dropTodoTask = '[Tasks] Drop Todo Task',

    addDoneTask = '[Tasks] Add Done Task',
    delDoneTask = '[Tasks] Del Done Task',
    editDoneTask = '[Tasks] Edit Done Task',
    dropDoneTask = '[Tasks] Drop Done Task',
}

export class AddTodoTask implements Action {
    readonly type = TasksActionTypes.addTodoTask;

    constructor(public payload: Task) {}
}

export class DelTodoTask implements Action {
    readonly type = TasksActionTypes.delTodoTask;

    constructor(public payload: string) {}
}

export class EditTodoTask implements Action {
    readonly type = TasksActionTypes.editTodoTask;

    constructor(public payload: EditTaskPayload) {}
}

export class DropTodoTask implements Action {
    readonly type = TasksActionTypes.dropTodoTask;

    constructor(public payload: DropTaskPayload) {}
}

export class AddDoneTask implements Action {
    readonly type = TasksActionTypes.addDoneTask;

    constructor(public payload: Task) {}
}

export class DelDoneTask implements Action {
    readonly type = TasksActionTypes.delDoneTask;

    constructor(public payload: string) {}
}

export class EditDoneTask implements Action {
    readonly type = TasksActionTypes.editDoneTask;

    constructor(public payload: EditTaskPayload) {}
}

export class DropDoneTask implements Action {
    readonly type = TasksActionTypes.dropDoneTask;

    constructor(public payload: DropTaskPayload) {}
}

export type TasksAction
    = AddTodoTask
    | DelTodoTask
    | EditTodoTask
    | DropTodoTask
    | AddDoneTask
    | DelDoneTask
    | EditDoneTask
    | DropDoneTask;
