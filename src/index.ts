import { ApolloServer } from 'apollo-server';
import dotenv from 'dotenv';
import { buildSchema } from 'type-graphql';
import 'reflect-metadata';
import { createConnection, getConnectionOptions } from 'typeorm';
import MovieResolver from './resolvers/Movie.resolver.js';
import Movie from './models/Movie.model.js';
import Serie from './models/Series.model.js';
import SerieResolver from './resolvers/Serie.resolver.js';

dotenv.config();

const ServerRun = async () => {
  // connection database
  const connectionOptions = await getConnectionOptions();

  await createConnection({
    ...connectionOptions,
    entities: [Movie, Serie],
    synchronize: true,
    logging: true,
  });

  console.log('Connected to database');

  const schema = await buildSchema({
    resolvers: [MovieResolver, SerieResolver],
  });
  const server = new ApolloServer({ schema });

  // The `listen` method launches a web server.
  server.listen(process.env.PORT).then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  });
};

ServerRun();
