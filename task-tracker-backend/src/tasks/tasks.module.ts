
import { Module } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TasksController } from './tasks.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Task} from "../tasks/task.entity";
import {User} from "../users/user.entity";
import {UsersService} from "../users/users.service";
import {UsersController} from "../users/users.controller";

@Module({
  imports: [
    TypeOrmModule.forFeature([Task, User])
  ],
  providers: [TasksService, UsersService],
  controllers: [TasksController]
})
export class TasksModule {}
