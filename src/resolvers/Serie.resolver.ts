import { Resolver, Query, Mutation, Args } from 'type-graphql';
import { getCustomRepository } from 'typeorm';
import Serie from '../models/Series.model.js';
import SerieRepository from '../repositories/Serie.repository.js';
import TypeRepository from '../repositories/Type.repository.js';
import AddSerieInput from '../types/series/AddSerie.type.js';
import DeleteSerieInput from '../types/series/DeleteSerie.type.js';
import UpdateSerieInput from '../types/series/UpdateSerie.type.js';

@Resolver(Serie)
class SerieResolver {
  // GET all series
  @Query(() => [Serie])
  async Series() {
    const serieRepository = getCustomRepository(SerieRepository);
    const series = await serieRepository.find({
      relations: ['episodes', 'types'],
    });

    return series;
  }

  // POST
  @Mutation(() => Serie)
  async AddSerie(@Args() { title, year, seasons, typeId }: AddSerieInput) {
    const serieRepository = getCustomRepository(SerieRepository);
    const typeRepository = getCustomRepository(TypeRepository);

    const type = await typeRepository.findOne(typeId);

    const types = [];
    if (type) {
      types.push(type);
    }

    const serie = new Serie();
    serie.title = title;
    serie.year = year;
    serie.seasons = seasons;
    serie.types = types;

    const newSerie = await serieRepository.save(serie);

    return serieRepository.findOne(
      { id: newSerie.id },
      { relations: ['episodes', 'types'] }
    );
  }

  // UPDATE;
  @Mutation(() => Serie)
  async UpdateSerie(
    @Args()
    { id, title, year, seasons, typeId }: UpdateSerieInput
  ) {
    const serieRepository = getCustomRepository(SerieRepository);
    const typeRepository = getCustomRepository(TypeRepository);

    // Serie to update
    const serie = await serieRepository.findOneOrFail(
      { id },
      { relations: ['episodes', 'types'] }
    );

    // Update serie data
    serie.title = title ?? serie.title;
    serie.year = year ?? serie.year;
    serie.seasons = seasons ?? serie.seasons;

    if (typeId) {
      // type to add or remove to current serie
      const newType = await typeRepository.findOne(typeId);

      if (newType !== undefined) {
        const typeExist = serie.types?.find((type) => type.id === newType.id);

        // If the type is already linked to the current serie,
        // remove the type's serie otherwise we add it
        if (typeExist === undefined) {
          serie.types?.push(newType);
        } else {
          serie.types = serie.types?.filter((type) => type.id !== newType.id);
        }
      }
    }

    await serieRepository.save(serie);

    return serieRepository.findOne(
      { id },
      { relations: ['episodes', 'types'] }
    );
  }

  // DELETE
  @Mutation(() => Serie)
  async DeleteSerie(@Args() { id }: DeleteSerieInput) {
    const serieRepository = getCustomRepository(SerieRepository);

    const serie = await serieRepository.findOneOrFail(
      { id },
      { relations: ['episodes', 'types'] }
    );
    await serieRepository.remove(serie);
    return { ...serie, id };
  }
}

export default SerieResolver;
