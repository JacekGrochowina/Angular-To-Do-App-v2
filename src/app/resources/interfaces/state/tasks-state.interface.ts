import { Task } from '../task.interface';

export interface TasksState {
    todo: Task[];
    done: Task[];
}
