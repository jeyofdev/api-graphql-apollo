import { Field, ID, Int, ObjectType } from 'type-graphql';
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
class Episode extends BaseEntity {
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
}

export default Episode;
