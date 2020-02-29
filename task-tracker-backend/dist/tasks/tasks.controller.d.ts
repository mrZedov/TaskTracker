import { TasksService } from "./tasks.service";
import { AssignUserDTO, CreateTaskDTO, EditTaskDTO, FilterStatusTask, SetStatusDTO } from "../dto/task.dto";
export declare class TasksController {
    private service;
    constructor(service: TasksService);
    get(res: any): Promise<any>;
    getFilterByStatus(res: any, filterByStatus: FilterStatusTask): Promise<any>;
    getOrderByID(res: any): Promise<any>;
    post(res: any, createTaskDTO: CreateTaskDTO): Promise<any>;
    editUser(res: any, taskDTO: AssignUserDTO): Promise<any>;
    setStatus(res: any, taskDTO: SetStatusDTO): Promise<any>;
    editTask(res: any, editDTO: EditTaskDTO): Promise<any>;
    deleteTask(res: any, taskID: any): Promise<any>;
}
