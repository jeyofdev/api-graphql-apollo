import { ArgsType, Field, Int } from 'type-graphql';

@ArgsType()
class AddMovieInput {
  @Field()
  title!: string;

  @Field()
  director!: string;

  @Field(() => Int)
  year!: number;

  @Field(() => Int)
  rating!: number;

  @Field(() => Int)
  duration!: number;

  @Field()
  type!: string;
}

export default AddMovieInput;
