import { User } from "../users/user.entity";
export declare class CreateTaskDTO {
    readonly id: number;
    readonly title: string;
    readonly description: string;
    readonly status: string;
    readonly user: User;
}
export declare class AssignTaskDTO {
    readonly id: number;
    readonly newUserId: number;
}
