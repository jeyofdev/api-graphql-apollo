import { Resolver, Query, Mutation, Args } from 'type-graphql';
import { getCustomRepository } from 'typeorm';
import Episode from '../models/Episode.model.js';
import EpisodeRepository from '../repositories/Episode.repository.js';
import SerieRepository from '../repositories/Serie.repository.js';
import AddEpisodeInput from '../types/episodes/AddEpisode.type.js';
import DeleteEpisodeInput from '../types/episodes/DeleteEpisode.type.js';
import UpdateEpisodeInput from '../types/episodes/UpdateEpisode.type.js';

@Resolver(Episode)
class EpisodeResolver {
  // GET all series
  @Query(() => [Episode])
  async Episodes() {
    const episodeRepository = getCustomRepository(EpisodeRepository);
    const episodes = await episodeRepository.find({ relations: ['serie'] });

    return episodes;
  }

  // POST
  @Mutation(() => Episode)
  async AddEpisode(
    @Args() { title, number, content, serieId }: AddEpisodeInput
  ) {
    const episodeRepository = getCustomRepository(EpisodeRepository);
    const serieRepository = getCustomRepository(SerieRepository);

    const serie = await serieRepository.findOne(serieId);

    const episode = new Episode();
    episode.title = title;
    episode.number = number;
    episode.content = content;
    episode.serie = serie;

    const newEpisode = await episodeRepository.save(episode);
    return episodeRepository.findOne(
      { id: newEpisode.id },
      { relations: ['serie'] }
    );
  }

  // UPDATE;
  @Mutation(() => Episode)
  async UpdateEpisode(
    @Args()
    { id, title, number, content, serieId }: UpdateEpisodeInput
  ) {
    const episodeRepository = getCustomRepository(EpisodeRepository);
    const serieRepository = getCustomRepository(SerieRepository);

    const episode = await episodeRepository.findOneOrFail({ id });

    let serie;

    if (serieId) {
      serie = await serieRepository.findOne(serieId);
    } else {
      serie = episode;
    }

    await episodeRepository.update(episode, {
      title: title ?? episode.title,
      number: number ?? episode.number,
      content: content ?? episode.content,
      serie,
    });

    const updateEpisode = await episodeRepository.findOne(
      { id },
      { relations: ['serie'] }
    );
    return updateEpisode;
  }

  // DELETE
  @Mutation(() => Episode)
  async DeleteEpisode(@Args() { id }: DeleteEpisodeInput) {
    const episodeRepository = getCustomRepository(EpisodeRepository);

    const episode = await episodeRepository.findOneOrFail(
      { id },
      { relations: ['serie'] }
    );
    await episodeRepository.remove(episode);
    return { ...episode, id };
  }
}

export default EpisodeResolver;
