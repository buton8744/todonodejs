import { gql } from 'apollo-server-express';

const typeDefs = gql`
    type Todo {
        id: ID!
        title: String!
        completed: Boolean!
    }

    type Query {
        todos: [Todo]
    }

    type Mutation {
        createTodo(title: String!): Todo
    }
`;

export default typeDefs;
