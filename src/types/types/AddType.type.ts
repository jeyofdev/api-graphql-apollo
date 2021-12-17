import { ArgsType, Field } from 'type-graphql';

@ArgsType()
class AddTypeInput {
  @Field()
  title!: string;
}

export default AddTypeInput;
