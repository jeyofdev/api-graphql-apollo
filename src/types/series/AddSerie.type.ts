import { ArgsType, Field, Int } from 'type-graphql';

@ArgsType()
class AddSerieInput {
  @Field()
  title!: string;

  @Field()
  year!: number;

  @Field(() => Int)
  seasons!: number;
}

export default AddSerieInput;
