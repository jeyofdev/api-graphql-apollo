import { Field, ID, Int, ObjectType } from 'type-graphql';
import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { IEpisode, ISerie } from '../interfaces/index.js';

import Serie from './Series.model.js';

@Entity()
@ObjectType()
class Episode extends BaseEntity implements IEpisode {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  id?: number;

  @Column({ type: 'varchar', length: 150 })
  @Field({ nullable: true })
  title?: string;

  @Column()
  @Field(() => Int, { nullable: true })
  number?: number;

  @Column({ type: 'text' })
  @Field({ nullable: true })
  content?: string;

  @ManyToOne('Serie', 'episodes')
  @Field(() => Serie, { nullable: true })
  serie?: ISerie;
}

export default Episode;
