import { ArgsType, Field } from 'type-graphql';

@ArgsType()
class GetMovieByTitle {
  @Field()
  title!: string;
}

export default GetMovieByTitle;
