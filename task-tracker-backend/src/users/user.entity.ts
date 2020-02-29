
import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import {Task} from "../tasks/task.entity";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    user_id: number;

    @Column()
    first_name: string;

    @Column()
    last_name: string;

    @OneToMany(type => Task, task => task.user)
    tasks: Task[];

}
