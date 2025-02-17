import Todo from '../models/todoModel';

const todoResolver = {
    Query: {
        todos: async () => await Todo.find(),
    },
    Mutation: {
        createTodo: async (_: any, { title }: { title: string }) => {
            const newTodo = new Todo({ title });
            await newTodo.save();
            return newTodo;
        },
    },
};

export default todoResolver;
