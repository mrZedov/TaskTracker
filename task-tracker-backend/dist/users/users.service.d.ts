import { User } from "./user.entity";
import { Repository } from "typeorm";
import { CreateUserDTO, EditUserDTO } from "../dto/user.dto";
export declare class UsersService {
    private readonly userReposytory;
    constructor(userReposytory: Repository<User>);
    getAllUser(): Promise<User[]>;
    addUser(userDTO: CreateUserDTO): Promise<User>;
    editUser(userDTO: EditUserDTO): Promise<User>;
    deleteUser(userID: number): Promise<User>;
}
