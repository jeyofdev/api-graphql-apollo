import { Resolver, Query } from 'type-graphql';
import MovieModel, { Movie } from '../../model/Movie.model.js';

@Resolver(Movie)
class MovieResolver {
  // GET
  @Query(() => [Movie])
  async Movies() {
    const users = await MovieModel.find();
    return users;
  }
}

export default MovieResolver;
