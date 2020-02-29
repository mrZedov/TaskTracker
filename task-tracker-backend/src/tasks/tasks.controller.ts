import {Body, Controller, Delete, Get, HttpStatus, NotFoundException, Param, Post, Put, Res} from '@nestjs/common';
import {TasksService} from "./tasks.service";
import {AssignUserDTO, CreateTaskDTO, EditTaskDTO, FilterStatusTask, SetStatusDTO} from "../dto/task.dto";

@Controller('tasks')
export class TasksController {

    constructor(private service: TasksService) {   }

    @Get('getAll')
    async get(@Res() res) {
        const tasks = await this.service.getAllTask();
        return res.status(HttpStatus.OK).json(tasks);
    }

    @Get('filterByStatus')
    async getFilterByStatus(@Res() res, @Body() filterByStatus: FilterStatusTask) {
        const tasks = await this.service.getFilterStatus(filterByStatus);
        return res.status(HttpStatus.OK).json(tasks);
    }

    @Get('getOrderByID')
    async getOrderByID(@Res() res) {
        const tasks = await this.service.getOrderByID();
        return res.status(HttpStatus.OK).json(tasks);
    }

    @Post('add')
    async post(@Res() res, @Body() createTaskDTO: CreateTaskDTO){
        const newTask = await this.service.addTask(createTaskDTO);
        return res.status(HttpStatus.OK).json({
            message: 'New task has created successfully',
            user: newTask
        })
    }

    @Put('assignUser')
    async editUser(@Res() res, @Body() taskDTO: AssignUserDTO) {
        const editedTask = await this.service.assignUser(taskDTO);
        if (!editedTask) throw new NotFoundException('Task does not exist!');
        return res.status(HttpStatus.OK).json({
            message: 'User successfully assigned to task',
            post: editedTask
        })
    }

    @Put('setStatus')
    async setStatus(@Res() res, @Body() taskDTO: SetStatusDTO) {
        const editedTask = await this.service.setStatus(taskDTO);
        if (!editedTask) throw new NotFoundException('Task does not exist!');
        return res.status(HttpStatus.OK).json({
            message: 'New task status set successfully',
            post: editedTask
        })
    }

    @Put('edit')
    async editTask(@Res() res, @Body() editDTO: EditTaskDTO) {
            const editedTask = await this.service.editTask(editDTO);
            if (!editedTask) throw new NotFoundException('Task does not exist!');
            return res.status(HttpStatus.OK).json({
                message: 'Task successfully changed',
                post: editedTask
            })

    }

    @Delete('delete/:taskID')
    async deleteTask(@Res() res, @Param('taskID') taskID) {
        const deletedTask = await this.service.deleteTask(taskID);
        if (!deletedTask) throw new NotFoundException('Task does not exist!');
        return res.status(HttpStatus.OK).json({
            message: 'Task has been deleted!',
            post: deletedTask
        })
    }

}
