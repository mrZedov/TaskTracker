import {User} from "../users/user.entity";
import {IsIn, IsInt, IsNotEmpty, MinLength} from "class-validator";

export class CreateTaskDTO {

    @MinLength(5, {
        message: "Title is too short"
    })
    readonly title: string;

    readonly description: string;

    @IsInt()
    @IsNotEmpty()
    readonly userId: number;

}

export class SetStatusDTO {

    @IsInt()
    @IsNotEmpty()
    readonly id: number;

    @IsNotEmpty()
    @IsIn(
        ["View", "In Progress", "Done"]
    )
    readonly newStatus: string;

}

export class AssignUserDTO {

    @IsInt()
    @IsNotEmpty()
    readonly id: number;

    @IsInt()
    @IsNotEmpty()
    readonly newUserId: number;

}

export class EditTaskDTO {

    @IsInt()
    @IsNotEmpty()
    readonly id: number;

    readonly title: string;

    readonly description: string;

}

export class FilterStatusTask {

    @IsNotEmpty()
    @IsIn(
        ["View", "In Progress", "Done"]
    )
    readonly status: string;

}
