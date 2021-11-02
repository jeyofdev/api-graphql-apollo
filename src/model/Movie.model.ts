import mongoose from 'mongoose';
import { Field, ID, Int, ObjectType } from 'type-graphql';

const { model, Schema } = mongoose;

@ObjectType()
class Movie {
  @Field(() => ID)
  title!: string;

  @Field()
  director!: string;

  @Field(() => Int)
  year!: number;

  @Field(() => Int)
  rating!: number;

  @Field(() => Int)
  duration!: number;

  @Field()
  type!: string;
}

const movieSchema = new Schema({
  title: String,
  director: String,
  year: Number,
  rating: Number,
  duration: Number,
  type: String,
});

const MovieModel = model('movie', movieSchema);

export default MovieModel;
export { Movie };
