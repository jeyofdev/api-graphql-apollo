import { EntityRepository, Repository } from 'typeorm';
import Serie from '../models/Series.model.js';

@EntityRepository(Serie)
class SerieRepository extends Repository<Serie> {}

export default SerieRepository;
