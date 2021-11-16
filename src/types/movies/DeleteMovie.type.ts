import { ArgsType, Field, Int } from 'type-graphql';

@ArgsType()
class DeleteMovieInput {
  @Field()
  id!: string;
}

export default DeleteMovieInput;
