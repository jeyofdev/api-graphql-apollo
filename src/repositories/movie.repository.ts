import { EntityRepository, Repository } from 'typeorm';
import Movie from '../models/Movie.model.js';

@EntityRepository(Movie)
class MovieRepository extends Repository<Movie> {
  /**
   * Find first movie
   */
  async findFirst(): Promise<Movie | undefined> {
    return this.findOne();
  }

  /**
   * Find last movie
   */
  async findLast(): Promise<Movie | undefined> {
    return this.createQueryBuilder('movie')
      .orderBy('movie.id', 'DESC')
      .getOne();
  }

  /**
   * Find by title
   */
  async findByTitle(title: string): Promise<Movie | undefined> {
    return this.findOne({ title });
  }
}

export default MovieRepository;
