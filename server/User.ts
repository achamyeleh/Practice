import { Field, ObjectType } from "type-graphql";
const {Column, Entity, PrimaryGeneratedColumn} = require('typeorm');
@ObjectType()
@Entity({ name: 'usrs' })
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Field({ nullable: true })
    @Column()
    firstName: string;

    @Field({ nullable: true })
    @Column()
    lastName: string;

    @Field({ nullable: true })
    @Column()
    isActive: boolean;
}

