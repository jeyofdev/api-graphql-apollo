import { Field, ID, Int, ObjectType } from 'type-graphql';
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

console.log('ok');
@Entity()
@ObjectType()
class Movie extends BaseEntity {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  id!: Number;

  @Column({ type: 'varchar', length: 255 })
  @Field({ nullable: true })
  title?: string;

  @Column({ type: 'varchar', length: 100 })
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

  @Column({ type: 'varchar', length: 50 })
  @Field({ nullable: true })
  type?: string;
}

export default Movie;
