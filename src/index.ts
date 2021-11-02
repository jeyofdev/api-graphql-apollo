import { ApolloServer, gql } from 'apollo-server';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const PORT = process.env.PORT || 4000;
const { MONGO_URL } = process.env;

if (!MONGO_URL) {
  throw Error('A MONGO_URL must be provided in environment.');
}

// Connect MongoDb
const connectOptions = { autoIndex: true };
mongoose
  .connect(<string>process.env.MONGO_URL, connectOptions)
  .then(() => console.log('Connected to database MongoDB'))
  .catch((err) => console.log(err));

const typeDefs = gql`
  type Query {
    movies: [Movie]
  }
  type Movie {
    id: Int
    title: String
    director: String
    year: Int
    rating: Int
    duration: Int
    type: String
  }
`;

const movies = [
  {
    id: 1,
    title: 'Star Wars : a new hope',
    director: 'George Lucas',
    year: '1977',
    rating: 8.6,
    duration: 121,
    type: 'Sci-Fi',
  },
  {
    id: 2,
    title: 'The Godfather',
    director: 'Francis Ford Coppola',
    year: '1972',
    rating: 9.2,
    duration: 175,
    type: 'Drama',
  },
];

const resolvers = {
  Query: {
    movies: () => movies,
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen(PORT).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
