import { EntityRepository, Repository } from 'typeorm';
import Type from '../models/Type.model.js';

@EntityRepository(Type)
class TypeRepository extends Repository<Type> {}

export default TypeRepository;
