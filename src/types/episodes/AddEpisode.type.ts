import { ArgsType, Field, Int } from 'type-graphql';

@ArgsType()
class AddEpisodeInput {
  @Field()
  title!: string;

  @Field(() => Int)
  number!: number;

  @Field()
  content!: string;
}

export default AddEpisodeInput;
