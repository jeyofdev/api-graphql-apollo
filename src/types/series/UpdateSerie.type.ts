import { ArgsType, Field, Int } from 'type-graphql';

@ArgsType()
class UpdateSerieInput {
  @Field(() => Int)
  id!: number;

  @Field({ nullable: true })
  title?: string;

  @Field(() => Int, { nullable: true })
  year?: number;

  @Field(() => Int, { nullable: true })
  seasons?: number;

  @Field(() => Int, { nullable: true })
  typeId?: number;
}

export default UpdateSerieInput;
