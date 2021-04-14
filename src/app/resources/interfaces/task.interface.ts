export interface Task {
    _id: string;
    title: string;
    description: string;
    priority: string;
    finishDate: Date;
    startDate: Date;
    isDone: boolean;
}
