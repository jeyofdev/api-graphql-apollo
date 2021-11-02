import mongoose from 'mongoose';
import { Field, ID, ObjectType } from 'type-graphql';

const { model, Schema } = mongoose;

@ObjectType()
class Movie {
  @Field(() => ID)
  title!: string;

  @Field()
  director!: string;

  @Field()
  year!: number;

  @Field()
  rating!: number;

  @Field()
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
