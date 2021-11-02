import { ArgsType, Field, Int } from 'type-graphql';

@ArgsType()
class UpdateMovieInput {
  @Field()
  initialTitle!: string;

  @Field({ nullable: true })
  newTitle?: string;

  @Field({ nullable: true })
  director?: string;

  @Field(() => Int, { nullable: true })
  year?: number;

  @Field(() => Int, { nullable: true })
  rating?: number;

  @Field(() => Int, { nullable: true })
  duration?: number;

  @Field({ nullable: true })
  type?: string;
}

export default UpdateMovieInput;
