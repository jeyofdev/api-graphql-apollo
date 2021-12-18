import { EntityRepository, Repository } from 'typeorm';
import Episode from '../models/Episode.model.js';

@EntityRepository(Episode)
class EpisodeRepository extends Repository<Episode> {}

export default EpisodeRepository;
