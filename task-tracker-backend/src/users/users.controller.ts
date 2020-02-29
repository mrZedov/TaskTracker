
import { Controller, Put, Get, Post, Delete, HttpStatus, Res, Param, Body, NotFoundException} from '@nestjs/common';
import {UsersService} from "./users.service";
import {CreateUserDTO, EditUserDTO} from "../dto/user.dto";

@Controller('users')
export class UsersController {

    constructor(private service: UsersService) {   }

    @Get('getAll')
    async get(@Res() res) {
        const users = await this.service.getAllUser();
        return res.status(HttpStatus.OK).json(users);
    }

    @Post('add')
    async post(@Res() res, @Body() userDTO: CreateUserDTO){
        const newUser = await this.service.addUser(userDTO);
        return res.status(HttpStatus.OK).json({
            message: 'New user has created successfully',
            user: newUser
        })
    }

    @Put('edit')
    async editUser(@Res() res, @Body() userDTO: EditUserDTO) {
        const editedUser = await this.service.editUser(userDTO);
        if (!editedUser) throw new NotFoundException('User does not exist!');
        return res.status(HttpStatus.OK).json({
            message: 'User has been successfully updated',
            post: editedUser
        })
    }

    @Delete('delete/:userID')
    async deletePost(@Res() res, @Param('userID') userID) {
        const deletedUser = await this.service.deleteUser(userID);
        if (!deletedUser) throw new NotFoundException('User does not exist!');
        return res.status(HttpStatus.OK).json({
            message: 'User has been deleted!',
            post: deletedUser
        })
    }
}
