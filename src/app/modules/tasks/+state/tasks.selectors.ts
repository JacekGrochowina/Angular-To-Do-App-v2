import { AppState } from 'src/app/+state/app-state.model';
import { createSelector } from '@ngrx/store';
import { TasksState } from 'src/app/resources/interfaces/state/tasks-state.interface';

export const selectTasks = (state: AppState) => state.tasks;

export const selectTasksTodo = createSelector(
    selectTasks,
    (state: TasksState) => state.todo
);

export const selectTasksDone = createSelector(
    selectTasks,
    (state: TasksState) => state.done
);
