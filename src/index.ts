import { ApolloServer } from 'apollo-server';
import dotenv from 'dotenv';
import { buildSchema } from 'type-graphql';
import mongoose from 'mongoose';
import 'reflect-metadata';
import MovieResolver from './resolvers/movies/Movie.resolver.js';
import MovieModel from './model/Movie.model.js';

dotenv.config();

const ServerRun = async () => {
  const PORT = process.env.PORT || 4000;
  const { MONGO_URL } = process.env;

  if (!MONGO_URL) {
    throw Error('A MONGO_URL must be provided in environment.');
  }

  // Connect MongoDb
  const connectOptions = { autoIndex: true };
  await mongoose.connect(<string>process.env.MONGO_URL, connectOptions);

  console.log('Connected to database MongoDB');

  await MovieModel.init();

  const schema = await buildSchema({ resolvers: [MovieResolver] });
  const server = new ApolloServer({ schema });

  // The `listen` method launches a web server.
  server.listen(PORT).then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  });
};

ServerRun();
