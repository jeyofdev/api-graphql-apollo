import { ArgsType, Field, Int } from 'type-graphql';

@ArgsType()
class UpdateTypeInput {
  @Field(() => Int)
  id!: number;

  @Field({ nullable: true })
  title?: string;

  @Field(() => Int, { nullable: true })
  serieId?: number;
}

export default UpdateTypeInput;
