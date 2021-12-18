import { ArgsType, Field, Int } from 'type-graphql';

@ArgsType()
class DeleteSerieInput {
  @Field(() => Int)
  id!: number;
}

export default DeleteSerieInput;
