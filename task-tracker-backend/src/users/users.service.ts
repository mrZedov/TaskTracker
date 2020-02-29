
import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {User} from "./user.entity";
import {Repository} from "typeorm";
import {CreateUserDTO, EditUserDTO} from "../dto/user.dto";

@Injectable()
export class UsersService {

    constructor(@InjectRepository(User) private readonly userReposytory: Repository<User>) {    }

    async getAllUser(): Promise<User[]>{
        return await this.userReposytory.find({ relations: ["tasks"] });
    }

    // Создание пользователя
    async addUser(userDTO: CreateUserDTO): Promise<User>{
        const newUser = await this.userReposytory.create(userDTO);
        await this.userReposytory.save(newUser);
        return newUser;
    }

    // Редактирование пользователя
    async editUser(userDTO: EditUserDTO): Promise<User>{
        const editedUser = await this.userReposytory.findOne({where: {user_id: userDTO.user_id}});
        if(editedUser){
            if(userDTO.last_name) editedUser.last_name = userDTO.last_name;
            if(userDTO.first_name) editedUser.first_name = userDTO.first_name;
            await this.userReposytory.save(editedUser);
        }
        return editedUser;
    }

    async deleteUser(userID: number): Promise<User>{
        const deletedUser = await this.userReposytory.findOne({where: {user_id: userID}});
        if(deletedUser){
            await this.userReposytory.delete(deletedUser);
        }
        return deletedUser;
    }

}
