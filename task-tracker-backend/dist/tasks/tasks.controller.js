"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const tasks_service_1 = require("./tasks.service");
const task_dto_1 = require("../dto/task.dto");
let TasksController = class TasksController {
    constructor(service) {
        this.service = service;
    }
    async get(res) {
        const tasks = await this.service.getAllTask();
        return res.status(common_1.HttpStatus.OK).json(tasks);
    }
    async getFilterByStatus(res, filterByStatus) {
        const tasks = await this.service.getFilterStatus(filterByStatus);
        return res.status(common_1.HttpStatus.OK).json(tasks);
    }
    async getOrderByID(res) {
        const tasks = await this.service.getOrderByID();
        return res.status(common_1.HttpStatus.OK).json(tasks);
    }
    async post(res, createTaskDTO) {
        const newTask = await this.service.addTask(createTaskDTO);
        return res.status(common_1.HttpStatus.OK).json({
            message: 'New task has created successfully',
            user: newTask
        });
    }
    async editUser(res, taskDTO) {
        const editedTask = await this.service.assignUser(taskDTO);
        if (!editedTask)
            throw new common_1.NotFoundException('Task does not exist!');
        return res.status(common_1.HttpStatus.OK).json({
            message: 'User successfully assigned to task',
            post: editedTask
        });
    }
    async setStatus(res, taskDTO) {
        const editedTask = await this.service.setStatus(taskDTO);
        if (!editedTask)
            throw new common_1.NotFoundException('Task does not exist!');
        return res.status(common_1.HttpStatus.OK).json({
            message: 'New task status set successfully',
            post: editedTask
        });
    }
    async editTask(res, editDTO) {
        const editedTask = await this.service.editTask(editDTO);
        if (!editedTask)
            throw new common_1.NotFoundException('Task does not exist!');
        return res.status(common_1.HttpStatus.OK).json({
            message: 'Task successfully changed',
            post: editedTask
        });
    }
    async deleteTask(res, taskID) {
        const deletedTask = await this.service.deleteTask(taskID);
        if (!deletedTask)
            throw new common_1.NotFoundException('Task does not exist!');
        return res.status(common_1.HttpStatus.OK).json({
            message: 'Task has been deleted!',
            post: deletedTask
        });
    }
};
__decorate([
    common_1.Get('getAll'),
    __param(0, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TasksController.prototype, "get", null);
__decorate([
    common_1.Get('filterByStatus'),
    __param(0, common_1.Res()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, task_dto_1.FilterStatusTask]),
    __metadata("design:returntype", Promise)
], TasksController.prototype, "getFilterByStatus", null);
__decorate([
    common_1.Get('getOrderByID'),
    __param(0, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TasksController.prototype, "getOrderByID", null);
__decorate([
    common_1.Post('add'),
    __param(0, common_1.Res()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, task_dto_1.CreateTaskDTO]),
    __metadata("design:returntype", Promise)
], TasksController.prototype, "post", null);
__decorate([
    common_1.Put('assignUser'),
    __param(0, common_1.Res()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, task_dto_1.AssignUserDTO]),
    __metadata("design:returntype", Promise)
], TasksController.prototype, "editUser", null);
__decorate([
    common_1.Put('setStatus'),
    __param(0, common_1.Res()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, task_dto_1.SetStatusDTO]),
    __metadata("design:returntype", Promise)
], TasksController.prototype, "setStatus", null);
__decorate([
    common_1.Put('edit'),
    __param(0, common_1.Res()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, task_dto_1.EditTaskDTO]),
    __metadata("design:returntype", Promise)
], TasksController.prototype, "editTask", null);
__decorate([
    common_1.Delete('delete/:taskID'),
    __param(0, common_1.Res()), __param(1, common_1.Param('taskID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], TasksController.prototype, "deleteTask", null);
TasksController = __decorate([
    common_1.Controller('tasks'),
    __metadata("design:paramtypes", [tasks_service_1.TasksService])
], TasksController);
exports.TasksController = TasksController;
//# sourceMappingURL=tasks.controller.js.map