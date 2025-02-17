import { Container } from 'inversify';
import TodoService from './services/TodoService';
import { ITodoService } from './interfaces/ITodoService';
import { TodoFactory } from './factories/TodoFactory';
import { ITodoFactory } from './interfaces/ITodoFactory';

const container = new Container();
container.bind<ITodoService>('ITodoService').to(TodoService);
container.bind<ITodoFactory>('ITodoFactory').to(TodoFactory);

export default container;
