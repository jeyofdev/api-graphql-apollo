import { Resolver, Query, Mutation, Args } from 'type-graphql';
import { getCustomRepository } from 'typeorm';
import Episode from '../models/Episode.model.js';
import EpisodeRepository from '../repositories/Episode.repository.js';
import AddEpisodeInput from '../types/episodes/AddEpisode.type.js';
import DeleteEpisodeInput from '../types/episodes/DeleteEpisode.type.js';
import UpdateEpisodeInput from '../types/episodes/UpdateEpisode.type.js';

@Resolver(Episode)
class EpisodeResolver {
  // GET all series
  @Query(() => [Episode])
  async Episodes() {
    const episodeRepository = getCustomRepository(EpisodeRepository);
    const episodes = await episodeRepository.find();

    return episodes;
  }

  // POST
  @Mutation(() => Episode)
  async AddEpisode(@Args() { title, number, content }: AddEpisodeInput) {
    const episodeRepository = getCustomRepository(EpisodeRepository);

    const episode = new Episode();
    episode.title = title;
    episode.number = number;
    episode.content = content;

    await episodeRepository.save(episode);
    return episode;
  }

  // UPDATE;
  @Mutation(() => Episode)
  async UpdateEpisode(
    @Args()
    { id, title, number, content }: UpdateEpisodeInput
  ) {
    const episodeRepository = getCustomRepository(EpisodeRepository);

    const episode = await episodeRepository.findOneOrFail({ id });

    await episodeRepository.update(episode, {
      title: title ?? episode.title,
      number: number ?? episode.number,
      content: content ?? episode.content,
    });

    const updateEpisode = await episodeRepository.findOne({ id });
    return updateEpisode;
  }

  // DELETE
  @Mutation(() => Episode)
  async DeleteEpisode(@Args() { id }: DeleteEpisodeInput) {
    const episodeRepository = getCustomRepository(EpisodeRepository);

    const episode = await episodeRepository.findOneOrFail({ id });
    await episodeRepository.remove(episode);
    return { ...episode, id };
  }
}

export default EpisodeResolver;
