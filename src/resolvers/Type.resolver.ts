import { Resolver, Query, Mutation, Args } from 'type-graphql';
import { getCustomRepository } from 'typeorm';
import Type from '../models/Type.model.js';
import SerieRepository from '../repositories/Serie.repository.js';
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
    { id, title, serieId }: UpdateTypeInput
  ) {
    const typeRepository = getCustomRepository(TypeRepository);
    const serieRepository = getCustomRepository(SerieRepository);

    // Type to update
    const type = await typeRepository.findOneOrFail(
      { id },
      { relations: ['series'] }
    );

    // Update type data
    type.title = title ?? type.title;

    if (serieId) {
      // serie to add or remove to current type
      const newSerie = await serieRepository.findOne(serieId);

      if (newSerie !== undefined) {
        const serieExist = type.series?.find(
          (serie) => serie.id === newSerie.id
        );

        // If the serie is already linked to the current type,
        // remove the serie's type otherwise we add it
        if (serieExist === undefined) {
          type.series?.push(newSerie);
        } else {
          type.series = type.series?.filter(
            (channel) => channel.id !== newSerie.id
          );
        }
      }
    }

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
