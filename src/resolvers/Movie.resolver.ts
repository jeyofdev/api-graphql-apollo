import { Resolver, Query, Mutation, Args } from 'type-graphql';
import { getCustomRepository } from 'typeorm';
import Movie from '../models/Movie.model.js';
import MovieRepository from '../repositories/Movie.repository.js';
import AddMovieInput from '../types/movies/AddMovie.type.js';
import DeleteMovieInput from '../types/movies/DeleteMovie.type.js';
import GetMovieByTitle from '../types/movies/GetMovieByTitle.js';
import UpdateMovieInput from '../types/movies/UpdateMovie.type.js';

@Resolver(Movie)
class MovieResolver {
  // GET all movies
  @Query(() => [Movie])
  async Movies() {
    const movieRepository = getCustomRepository(MovieRepository);
    const movies = await movieRepository.find();

    return movies;
  }

  // GET first movie
  @Query(() => Movie)
  async FirstMovie() {
    const movieRepository = getCustomRepository(MovieRepository);
    const movie = await movieRepository.findFirst();

    return movie;
  }

  // GET movie
  @Query(() => Movie)
  async MovieByTitle(@Args() { title }: GetMovieByTitle) {
    const movieRepository = getCustomRepository(MovieRepository);
    const movie = await movieRepository.findByTitle(title);

    return movie;
  }

  // GET last movie
  @Query(() => Movie)
  async LastMovie() {
    const movieRepository = getCustomRepository(MovieRepository);
    const movie = await movieRepository.findLast();

    return movie;
  }

  // POST
  @Mutation(() => Movie)
  async AddMovie(
    @Args() { title, director, year, rating, duration, type }: AddMovieInput
  ) {
    const movieRepository = getCustomRepository(MovieRepository);

    const movie = new Movie();
    movie.title = title;
    movie.director = director;
    movie.year = year;
    movie.rating = rating;
    movie.duration = duration;
    movie.type = type;

    await movieRepository.save(movie);
    return movie;
  }

  // UPDATE
  @Mutation(() => Movie)
  async UpdateMovie(
    @Args()
    { id, title, director, year, rating, duration, type }: UpdateMovieInput
  ) {
    const movieRepository = getCustomRepository(MovieRepository);

    const movie = await movieRepository.findOneOrFail({ id });

    await Movie.update(movie, {
      title: title ?? movie.title,
      director: director ?? movie.director,
      year: year ?? movie.year,
      rating: rating ?? movie.rating,
      duration: duration ?? movie.duration,
      type: type ?? movie.type,
    });

    const updateMovie = await movieRepository.findOne({ id });
    return updateMovie;
  }

  // DELETE
  @Mutation(() => Movie)
  async DeleteMovie(@Args() { id }: DeleteMovieInput) {
    const movieRepository = getCustomRepository(MovieRepository);

    const movie = await movieRepository.findOneOrFail({ id });
    await movieRepository.remove(movie);
    return { ...movie, id };
  }
}

export default MovieResolver;
