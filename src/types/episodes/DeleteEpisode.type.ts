import { ArgsType, Field, Int } from 'type-graphql';

@ArgsType()
class DeleteEpisodeInput {
  @Field(() => Int)
  id!: number;
}

export default DeleteEpisodeInput;
