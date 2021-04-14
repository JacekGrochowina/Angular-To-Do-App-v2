import { Task } from '../task.interface';

export interface EditTaskPayload {
    id: string;
    task: Task
}
