import { Resolver, Query, Mutation, Args } from 'type-graphql';
import { getCustomRepository } from 'typeorm';
import Movie from '../models/Movie.model.js';
import MovieRepository from '../repositories/movie.repository.js';
import AddMovieInput from '../types/movies/AddMovie.type.js';
import DeleteMovieInput from '../types/movies/DeleteMovie.type.js';
import GetMovieByTitle from '../types/movies/GetMovieByTitle.js';
import UpdateMovieInput from '../types/movies/UpdateMovie.type.js';

@Resolver(Movie)
class MovieResolver {
  // GET all movies
  @Query(() => [Movie])
  async Movies() {
    const userRepository = getCustomRepository(MovieRepository);
    const movies = await userRepository.find();

    return movies;
  }

  // GET first movie
  @Query(() => Movie)
  async FirstMovie() {
    const userRepository = getCustomRepository(MovieRepository);
    const movie = await userRepository.findFirst();

    return movie;
  }

  // GET movie
  @Query(() => Movie)
  async MovieByTitle(@Args() { title }: GetMovieByTitle) {
    const userRepository = getCustomRepository(MovieRepository);
    const movie = await userRepository.findByTitle(title);

    return movie;
  }

  // GET last movie
  @Query(() => Movie)
  async LastMovie() {
    const userRepository = getCustomRepository(MovieRepository);
    const movie = await userRepository.findLast();

    return movie;
  }

  // POST
  @Mutation(() => Movie)
  async AddMovie(
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
  async UpdateMovie(
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
  async DeleteMovie(@Args() { id }: DeleteMovieInput) {
    const movie = await Movie.findOneOrFail({ id });
    await Movie.remove(movie);
    return movie;
  }
}

export default MovieResolver;
