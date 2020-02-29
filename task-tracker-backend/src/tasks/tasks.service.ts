
import {Injectable, NotFoundException} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {Task} from "./task.entity";
import {FilterStatusTask, SetStatusDTO, AssignUserDTO, CreateTaskDTO, EditTaskDTO} from "../dto/task.dto";
import {User} from "../users/user.entity";

@Injectable()
export class TasksService {

    constructor(@InjectRepository(Task) private readonly taskReposytory: Repository<Task>,
                @InjectRepository(User) private readonly userReposytory: Repository<User>) {    }

    async addTask(createTaskDTO: CreateTaskDTO): Promise<Task>{
        const newTask = await this.taskReposytory.create(createTaskDTO);
        const user = await this.userReposytory.findOne({where: {user_id: createTaskDTO.userId}});
        if(!user) throw new NotFoundException('User (id='+createTaskDTO.userId+') does not exist!');
        newTask.user = user;
        await this.taskReposytory.save(newTask);
        return newTask;
    }

    async setStatus(taskDTO: SetStatusDTO): Promise<Task>{
        const editedTask = await this.taskReposytory.findOne({where: {id: taskDTO.id}});
        if(editedTask){
            editedTask.status = taskDTO.newStatus;
            await this.taskReposytory.save(editedTask);
        }
        return editedTask;
    }

    async assignUser(taskDTO: AssignUserDTO): Promise<Task>{
        const editedTask = await this.taskReposytory.findOne({where: {id: taskDTO.id}});
        if(!editedTask) throw new NotFoundException('Task (id='+taskDTO.id+') does not exist!');
        const user = await this.userReposytory.findOne({where: {user_id: taskDTO.newUserId}});
        if(!user) throw new NotFoundException('User (id='+taskDTO.newUserId+') does not exist!');
        editedTask.user = user;
        await this.taskReposytory.save(editedTask);
        return editedTask;
    }

    async editTask(editDTO: EditTaskDTO): Promise<Task>{
        const editedTask = await this.taskReposytory.findOne({where: {id: editDTO.id}});
        if(editedTask){
            if(editDTO.title) editedTask.title = editDTO.title;
            if(editDTO.description) editedTask.description = editDTO.description;
            await this.taskReposytory.save(editedTask);
        }
        return editedTask;
    }

    async deleteTask(taskID: number): Promise<Task>{
        const deletedTask = await this.taskReposytory.findOne({where: {id: taskID}});
        if(deletedTask){
            await this.taskReposytory.delete(deletedTask);
        }
        return deletedTask;
    }

    async getAllTask(): Promise<Task[]>{
        return await this.taskReposytory.find({ relations: ["user"] });
    }

    async getFilterStatus(filterStatusTask: FilterStatusTask): Promise<Task[]>{
        return await this.taskReposytory.find({ relations: ["user"], where: {status: filterStatusTask.status}});
    }

    async getOrderByID(): Promise<Task[]>{
        return await this.taskReposytory.find({ relations: ["user"], order: {id:"DESC"}});
    }

}
