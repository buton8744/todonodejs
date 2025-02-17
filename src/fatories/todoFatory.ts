import Todo from '../models/todoModel';
import { ITodoFactory } from '../interfaces/ITodoFatory';

export class TodoFactory implements ITodoFactory {
    createTodo(title: string): Todo {
        return new Todo({ title });
    }
}
