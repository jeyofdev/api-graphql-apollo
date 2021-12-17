import { Field, ID, Int, ObjectType } from 'type-graphql';
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
}

export default Serie;
