import { ArgsType, Field, Int } from 'type-graphql';

@ArgsType()
class DeleteTypeInput {
  @Field(() => Int)
  id!: number;
}

export default DeleteTypeInput;
