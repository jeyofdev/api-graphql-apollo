import { Field, ID, ObjectType } from 'type-graphql';
import {
  BaseEntity,
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import Serie from './Series.model.js';

@Entity()
@ObjectType()
class Type extends BaseEntity {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  id?: number;

  @Column({ type: 'varchar', length: 150 })
  @Field({ nullable: true })
  title?: string;

  @ManyToMany(() => Serie, (serie) => serie.types)
  @JoinTable()
  @Field(() => [Serie], { nullable: true })
  series?: Serie[];
}

export default Type;
