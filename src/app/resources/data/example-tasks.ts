import { Task } from '../interfaces/task.interface';

export const exampleTasks: Task[] = [
    {
        _id: '621bde13-4f5d-4683-a270-234f40d7d65e',
        title: 'Treść pierwszego przykładowego zadania',
        description: 'Opcjonalny opis pierwszego, dodanego automatycznie, przykładowego zadania. Dzięki tej funkcji nie musisz tracić czasu na wpisywanie samodzielnie przykładowych wartości, w celu przetestowania aplikacji.',
        priority: 'low',
        finishDate: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate()+7),
        startDate:  new Date(),
        isDone: false,
    },
    {
        _id: '621bde13-4f5d-4183-a270-234f40d7d65e',
        title: 'Treść drugiego przykładowego zadania',
        description: null,
        priority: 'mid',
        finishDate: new Date(new Date().getFullYear(), new Date().getMonth()+1, new Date().getDate()+3),
        startDate: new Date(),
        isDone: false,
    },
    {
        _id: '621bae13-4f5d-4683-a270-234f40d7d65e',
        title: 'Treść trzeciego przykładowego zadania',
        description: 'Opcjonalny opis trzeciego, dodanego automatycznie, przykładowego zadania. Dzięki tej funkcji nie musisz tracić czasu na wpisywanie samodzielnie przykładowych wartości, w celu przetestowania aplikacji.',
        priority: 'hight',
        finishDate: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate()+1),
        startDate: new Date(),
        isDone: false,
    },
    {
        _id: '721bde13-4f5d-4683-a270-234f40d7d65e',
        title: 'Treść czwartego przykładowego zadania, o dłuższym niż poprzednie tytule',
        description: 'Opcjonalny opis czwartego, dodanego automatycznie, przykładowego zadania. Dzięki tej funkcji nie musisz tracić czasu na wpisywanie samodzielnie przykładowych wartości, w celu przetestowania aplikacji.',
        priority: 'low',
        finishDate: new Date(),
        startDate: new Date(),
        isDone: false,
    },
    {
        _id: '721bde13-4f1d-4683-a270-234f40d7d65e',
        title: 'Treść piątego przykładowego zadania',
        description: null,
        priority: 'low',
        finishDate: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate()+3),
        startDate: new Date(),
        isDone: false,
    }
];
