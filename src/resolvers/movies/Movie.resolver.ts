import { Resolver, Query, Mutation, Args } from 'type-graphql';
import Movie from '../../models/Movie.model.js';
import AddMovieInput from './AddMovieInput.js';
import DeleteMovieInput from './DeleteMovieInput.js';
import UpdateMovieInput from './UpdateMovieInput.js';

@Resolver(Movie)
class MovieResolver {
  // GET
  @Query(() => [Movie])
  async Movies() {
    const users = await Movie.find();
    return users;
  }

  // POST
  @Mutation(() => Movie)
  async addMovie(
    @Args() { title, director, year, rating, duration, type }: AddMovieInput
  ) {
    const movie = new Movie();
    movie.title = title;
    movie.director = director;
    movie.year = year;
    movie.rating = rating;
    movie.duration = duration;
    movie.type = type;

    await movie.save();
    return movie;
  }

  // UPDATE
  @Mutation(() => Movie)
  async updateMovie(
    @Args()
    { id, title, director, year, rating, duration, type }: UpdateMovieInput
  ) {
    const movie = await Movie.findOneOrFail({ id });

    await Movie.update(movie, {
      title: title ?? movie.title,
      director: director ?? movie.director,
      year: year ?? movie.year,
      rating: rating ?? movie.rating,
      duration: duration ?? movie.duration,
      type: type ?? movie.type,
    });

    const updateMovie = await Movie.findOne({ id });
    return updateMovie;
  }

  // DELETE
  @Mutation(() => Movie)
  async deleteMovie(@Args() { id }: DeleteMovieInput) {
    const movie = await Movie.findOneOrFail({ id });
    await Movie.remove(movie);
    return movie;
  }
}

export default MovieResolver;
