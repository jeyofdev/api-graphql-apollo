import { ArgsType, Field, Int } from 'type-graphql';

@ArgsType()
class UpdateTypeInput {
  @Field(() => Int)
  id!: number;

  @Field({ nullable: true })
  title?: string;
}

export default UpdateTypeInput;
