import { ArgsType, Field, Int } from 'type-graphql';

@ArgsType()
class DeleteMovieInput {
  @Field(() => Int)
  id!: number;
}

export default DeleteMovieInput;
