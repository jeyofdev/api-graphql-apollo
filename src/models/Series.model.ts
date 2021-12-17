import { Field, ID, Int, ObjectType } from 'type-graphql';
import {
  BaseEntity,
  Column,
  Entity,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import Type from './Type.model.js';

@Entity()
@ObjectType()
class Serie extends BaseEntity {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  id?: number;

  @Column({ type: 'varchar', length: 150 })
  @Field({ nullable: true })
  title?: string;

  @Column()
  @Field(() => Int, { nullable: true })
  year?: number;

  @Column()
  @Field(() => Int, { nullable: true })
  seasons?: number;

  @ManyToMany(() => Type, (type) => type.series)
  @Field(() => [Type], { nullable: true })
  types?: Type[];
}

export default Serie;
