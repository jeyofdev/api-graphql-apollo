import { Resolver, Query, Mutation, Args } from 'type-graphql';
import MovieModel, { Movie } from '../../model/Movie.model.js';
import AddMovieInput from './AddMovieInput.js';
import DeleteMovieInput from './DeleteMovieInput.js';

@Resolver(Movie)
class MovieResolver {
  // GET
  @Query(() => [Movie])
  async Movies() {
    const users = await MovieModel.find();
    return users;
  }

  // POST
  @Mutation(() => Movie)
  async addMovie(
    @Args() { title, director, year, rating, duration, type }: AddMovieInput
  ) {
    const movie = new MovieModel({
      title,
      director,
      year,
      rating,
      duration,
      type,
    });
    const result = await movie.save();
    return result;
  }

  // DELETE
  @Mutation(() => Movie)
  async deleteMovie(@Args() { title }: DeleteMovieInput) {
    const movie = await MovieModel.findOne({ title });
    if (!movie) {
      throw Error('Movie does not exist.');
    }
    await MovieModel.deleteOne({ title });
    return movie;
  }
}

export default MovieResolver;
