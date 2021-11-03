import { Field, ID, Int, ObjectType } from 'type-graphql';
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
class Movie extends BaseEntity {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  id!: Number;

  @Column()
  @Field({ nullable: true })
  title?: string;

  @Column()
  @Field({ nullable: true })
  director?: string;

  @Column()
  @Field(() => Int, { nullable: true })
  year?: number;

  @Column()
  @Field(() => Int, { nullable: true })
  rating?: number;

  @Column()
  @Field(() => Int, { nullable: true })
  duration?: number;

  @Column()
  @Field({ nullable: true })
  type?: string;
}

export default Movie;
