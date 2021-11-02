import { ArgsType, Field } from 'type-graphql';

@ArgsType()
class DeleteMovieInput {
  @Field()
  title!: string;
}

export default DeleteMovieInput;
