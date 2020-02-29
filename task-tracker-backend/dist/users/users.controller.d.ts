import { UsersService } from "./users.service";
import { CreateUserDTO, EditUserDTO } from "../dto/user.dto";
export declare class UsersController {
    private service;
    constructor(service: UsersService);
    get(res: any): Promise<any>;
    post(res: any, userDTO: CreateUserDTO): Promise<any>;
    editUser(res: any, userDTO: EditUserDTO): Promise<any>;
    deletePost(res: any, userID: any): Promise<any>;
}
