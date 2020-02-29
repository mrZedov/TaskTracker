import { Task } from "../tasks/task.entity";
export declare class User {
    user_id: number;
    first_name: string;
    last_name: string;
    tasks: Task[];
}
