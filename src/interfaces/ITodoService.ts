import Todo from '../models/todoModel';

export interface ITodoService {
    createTodo(title: string): Promise<Todo>;
    getTodos(): Promise<Todo[]>;
}
