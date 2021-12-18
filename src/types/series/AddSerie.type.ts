import { ArgsType, Field, Int } from 'type-graphql';

@ArgsType()
class AddSerieInput {
  @Field()
  title!: string;

  @Field()
  year!: number;

  @Field(() => Int)
  seasons!: number;

  @Field(() => Int, { nullable: true })
  typeId!: number;
}

export default AddSerieInput;
