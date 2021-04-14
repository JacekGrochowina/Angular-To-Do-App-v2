import { TasksState } from 'src/app/resources/interfaces/state/tasks-state.interface';
import { Task } from 'src/app/resources/interfaces/task.interface';
import { TasksAction, TasksActionTypes } from './tasks.actions';
import { moveItemInArray } from '@angular/cdk/drag-drop';

const tasksInitialState: TasksState = {
    todo: [],
    done: []
};

export function TasksReducer(
    state = tasksInitialState,
    action: TasksAction
): TasksState {
    switch (action.type) {
        case TasksActionTypes.addTodoTask: {
            const todoTask = {...action.payload};
            todoTask.isDone = false;
            return {
                ...state,
                todo: [...state.todo, todoTask]
            }
        }

        case TasksActionTypes.delTodoTask: {
            return {
                ...state,
                todo: state.todo.filter((task: Task) => task._id !== action.payload)
            }
        }

        case TasksActionTypes.editTodoTask: {
            return {
                ...state,
                todo: state.todo.map((task: Task) => task._id === action.payload.id ? action.payload.task : task)
            }
        }

        case TasksActionTypes.dropTodoTask: {
            const arrayTodo = [...state.todo];
            moveItemInArray(arrayTodo, action.payload.previousIndex, action.payload.currentIndex);
            return {
                ...state,
                todo: arrayTodo
            }
        }

        case TasksActionTypes.addDoneTask: {
            const doneTask = {...action.payload};
            doneTask.isDone = true;
            return {
                ...state,
                done: [...state.done, doneTask]
            }
        }

        case TasksActionTypes.delDoneTask: {
            return {
                ...state,
                done: state.done.filter((task: Task) => task._id !== action.payload)
            }
        }

        case TasksActionTypes.editDoneTask: {
            return {
                ...state,
                done: state.done.map((task: Task) => task._id === action.payload.id ? action.payload.task : task)
            }
        }

        case TasksActionTypes.dropDoneTask: {
            const arrayDone = [...state.done];
            moveItemInArray(arrayDone, action.payload.previousIndex, action.payload.currentIndex);
            return {
                ...state,
                done: arrayDone
            }
        }

        default: {
            return {
                ...state
            }
        }
    }
}
