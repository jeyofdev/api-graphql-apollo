import { Resolver, Query, Mutation, Args } from 'type-graphql';
import { getCustomRepository } from 'typeorm';
import Type from '../models/Type.model.js';
import TypeRepository from '../repositories/Type.repository.js';
import AddTypeInput from '../types/types/AddType.type.js';
import DeleteTypeInput from '../types/types/DeleteType.type.js';
import UpdateTypeInput from '../types/types/UpdateType.type.js';

@Resolver(Type)
class TypeResolver {
  // GET all series
  @Query(() => [Type])
  async Types() {
    const typeRepository = getCustomRepository(TypeRepository);
    const types = await typeRepository.find({ relations: ['series'] });

    return types;
  }

  // POST
  @Mutation(() => Type)
  async AddType(@Args() { title }: AddTypeInput) {
    const typeRepository = getCustomRepository(TypeRepository);

    const type = new Type();
    type.title = title;

    const newType = await typeRepository.save(type);

    return typeRepository.findOne(
      { id: newType.id },
      { relations: ['series'] }
    );
  }

  // UPDATE;
  @Mutation(() => Type)
  async UpdateType(
    @Args()
    { id, title }: UpdateTypeInput
  ) {
    const typeRepository = getCustomRepository(TypeRepository);

    const type = await typeRepository.findOneOrFail(
      { id },
      { relations: ['series'] }
    );

    type.title = title ?? type.title;

    await typeRepository.save(type);

    return typeRepository.findOne({ id }, { relations: ['series'] });
  }

  // DELETE
  @Mutation(() => Type)
  async DeleteType(@Args() { id }: DeleteTypeInput) {
    const typeRepository = getCustomRepository(TypeRepository);

    const type = await typeRepository.findOneOrFail(
      { id },
      { relations: ['series'] }
    );
    await typeRepository.remove(type);
    return { ...type, id };
  }
}

export default TypeResolver;
