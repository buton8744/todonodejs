import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import connectDB from './config/database';
import typeDefs from './schemas/todoSchema';
import todoResolver from './resolvers/todoResolver';
import dotenv from 'dotenv';
import logger from './middleware/logger';
import container from './inversify.config';

dotenv.config();

const app = express();
connectDB();

app.use(logger); // 미들웨어 추가

const server = new ApolloServer({ 
    typeDefs, 
    resolvers: todoResolver,
    context: () => ({ container }) // DI 컨테이너를 context에 추가
});
server.applyMiddleware({ app });

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}${server.graphqlPath}`);
});
