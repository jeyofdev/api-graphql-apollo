import { Field, ID, Int, ObjectType } from 'type-graphql';
import {
  BaseEntity,
  Column,
  Entity,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { IEpisode, ISerie } from '../interfaces/index.js';
import Episode from './Episode.model.js';
import Type from './Type.model.js';

@Entity()
@ObjectType()
class Serie extends BaseEntity implements ISerie {
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

  @OneToMany('Episode', 'serie')
  @Field(() => [Episode], { nullable: true })
  episodes?: IEpisode[];

  @ManyToMany(() => Type, (type) => type.series)
  @Field(() => [Type], { nullable: true })
  types?: Type[];
}

export default Serie;
