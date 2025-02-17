import { injectable, inject } from 'inversify';
import Todo from '../models/todoModel';
import { ITodoService } from '../interfaces/ITodoService';
import { TodoObserver } from '../observers/todoObserver';
import { ITodoFactory } from '../interfaces/ITodoFatory';

@injectable()
export default class TodoService extends TodoObserver implements ITodoService {
    constructor(@inject('ITodoFactory') private todoFactory: ITodoFactory) {
        super();
    }

    async createTodo(title: string) {
        const newTodo = this.todoFactory.createTodo(title);
        await newTodo.save();
        this.notifyObservers(newTodo); // 새로운 Todo 생성 시 옵저버에게 알림
        return newTodo;
    }

    async getTodos() {
        return await Todo.find();
    }
}
