import { Resolver, Query, Mutation, Args } from 'type-graphql';
import { getCustomRepository } from 'typeorm';
import Serie from '../models/Series.model.js';
import SerieRepository from '../repositories/serie.repository.js';
import AddSerieInput from '../types/series/AddSerie.type.js';
import DeleteSerieInput from '../types/series/DeleteSerie.type.js';
import UpdateSerieInput from '../types/series/UpdateSerie.type.js';

@Resolver(Serie)
class SerieResolver {
  // GET all series
  @Query(() => [Serie])
  async Series() {
    const serieRepository = getCustomRepository(SerieRepository);
    const series = await serieRepository.find();

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

    await serieRepository.save(serie);
    return serie;
  }

  // UPDATE;
  @Mutation(() => Serie)
  async UpdateSerie(
    @Args()
    { id, title, year, seasons }: UpdateSerieInput
  ) {
    const serieRepository = getCustomRepository(SerieRepository);

    const serie = await serieRepository.findOneOrFail({ id });

    await serieRepository.update(serie, {
      title: title ?? serie.title,
      year: year ?? serie.year,
      seasons: seasons ?? serie.seasons,
    });

    const updateSerie = await serieRepository.findOne({ id });
    return updateSerie;
  }

  // DELETE
  @Mutation(() => Serie)
  async DeleteSerie(@Args() { id }: DeleteSerieInput) {
    const serieRepository = getCustomRepository(SerieRepository);

    const serie = await serieRepository.findOneOrFail({ id });
    await serieRepository.remove(serie);
    return { ...serie, id };
  }
}

export default SerieResolver;
