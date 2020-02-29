import { Repository } from "typeorm";
import { Task } from "./task.entity";
import { FilterStatusTask, SetStatusDTO, AssignUserDTO, CreateTaskDTO, EditTaskDTO } from "../dto/task.dto";
import { User } from "../users/user.entity";
export declare class TasksService {
    private readonly taskReposytory;
    private readonly userReposytory;
    constructor(taskReposytory: Repository<Task>, userReposytory: Repository<User>);
    addTask(createTaskDTO: CreateTaskDTO): Promise<Task>;
    setStatus(taskDTO: SetStatusDTO): Promise<Task>;
    assignUser(taskDTO: AssignUserDTO): Promise<Task>;
    editTask(editDTO: EditTaskDTO): Promise<Task>;
    deleteTask(taskID: number): Promise<Task>;
    getAllTask(): Promise<Task[]>;
    getFilterStatus(filterStatusTask: FilterStatusTask): Promise<Task[]>;
    getOrderByID(): Promise<Task[]>;
}
