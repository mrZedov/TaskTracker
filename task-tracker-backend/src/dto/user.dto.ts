import {IsInt, IsNotEmpty, MinLength} from "class-validator";

export class CreateUserDTO {

    @IsNotEmpty()
    @MinLength(3, {
        message: "Firstname is too short"
    })
    readonly first_name: string;

    @IsNotEmpty()
    @MinLength(3, {
        message: "Lastname is too short"
    })
    readonly last_name: string
}

export class EditUserDTO {

    @IsInt()
    @IsNotEmpty()
    user_id: number;

    @IsNotEmpty()
    @MinLength(3, {
        message: "Firstname is too short"
    })
    readonly first_name: string;

    @IsNotEmpty()
    @MinLength(3, {
        message: "Lastname is too short"
    })
    readonly last_name: string
}
