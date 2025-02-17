import Todo from '../models/todoModel';

export interface ITodoFactory {
    createTodo(title: string): Todo;
}
