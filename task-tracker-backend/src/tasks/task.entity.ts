
import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn} from "typeorm";
import {User} from "../users/user.entity";

@Entity()
export class Task {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column({default: "View"})
    status: string;

    @Column()
    user_id: number;

    @ManyToOne(type => User)
    @JoinColumn({name: 'user_id', referencedColumnName: 'user_id'})
    user: User;

}
