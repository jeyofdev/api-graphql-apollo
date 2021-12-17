import { ArgsType, Field, Int } from 'type-graphql';

@ArgsType()
class UpdateEpisodeInput {
  @Field(() => Int)
  id!: number;

  @Field({ nullable: true })
  title?: string;

  @Field(() => Int, { nullable: true })
  number?: number;

  @Field({ nullable: true })
  content?: string;
}

export default UpdateEpisodeInput;
