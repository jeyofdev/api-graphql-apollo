import { Resolver, Query, Mutation, Args } from 'type-graphql';
import { getCustomRepository } from 'typeorm';
import Serie from '../models/Series.model.js';
import SerieRepository from '../repositories/Serie.repository.js';
import AddSerieInput from '../types/series/AddSerie.type.js';
import DeleteSerieInput from '../types/series/DeleteSerie.type.js';
import UpdateSerieInput from '../types/series/UpdateSerie.type.js';

@Resolver(Serie)
class SerieResolver {
  // GET all series
  @Query(() => [Serie])
  async Series() {
    const serieRepository = getCustomRepository(SerieRepository);
    const series = await serieRepository.find({ relations: ['types'] });

    return series;
  }

  // POST
  @Mutation(() => Serie)
  async AddSerie(@Args() { title, year, seasons }: AddSerieInput) {
    const serieRepository = getCustomRepository(SerieRepository);

    const serie = new Serie();
    serie.title = title;
    serie.year = year;
    serie.seasons = seasons;

    const newSerie = await serieRepository.save(serie);
    return serieRepository.findOne(
      { id: newSerie.id },
      { relations: ['types'] }
    );
  }

  // UPDATE;
  @Mutation(() => Serie)
  async UpdateSerie(
    @Args()
    { id, title, year, seasons }: UpdateSerieInput
  ) {
    const serieRepository = getCustomRepository(SerieRepository);

    const serie = await serieRepository.findOneOrFail(
      { id },
      { relations: ['types'] }
    );

    serie.title = title ?? serie.title;
    serie.year = year ?? serie.year;
    serie.seasons = seasons ?? serie.seasons;

    await serieRepository.save(serie);

    const updateSerie = await serieRepository.findOne(
      { id },
      { relations: ['types'] }
    );

    return updateSerie;
  }

  // DELETE
  @Mutation(() => Serie)
  async DeleteSerie(@Args() { id }: DeleteSerieInput) {
    const serieRepository = getCustomRepository(SerieRepository);

    const serie = await serieRepository.findOneOrFail(
      { id },
      { relations: ['types'] }
    );
    await serieRepository.remove(serie);
    return { ...serie, id };
  }
}

export default SerieResolver;
