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
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const task_entity_1 = require("./task.entity");
const user_entity_1 = require("../users/user.entity");
let TasksService = class TasksService {
    constructor(taskReposytory, userReposytory) {
        this.taskReposytory = taskReposytory;
        this.userReposytory = userReposytory;
    }
    async addTask(createTaskDTO) {
        const newTask = await this.taskReposytory.create(createTaskDTO);
        const user = await this.userReposytory.findOne({ where: { user_id: createTaskDTO.userId } });
        if (!user)
            throw new common_1.NotFoundException('User (id=' + createTaskDTO.userId + ') does not exist!');
        newTask.user = user;
        await this.taskReposytory.save(newTask);
        return newTask;
    }
    async setStatus(taskDTO) {
        const editedTask = await this.taskReposytory.findOne({ where: { id: taskDTO.id } });
        if (editedTask) {
            editedTask.status = taskDTO.newStatus;
            await this.taskReposytory.save(editedTask);
        }
        return editedTask;
    }
    async assignUser(taskDTO) {
        const editedTask = await this.taskReposytory.findOne({ where: { id: taskDTO.id } });
        if (!editedTask)
            throw new common_1.NotFoundException('Task (id=' + taskDTO.id + ') does not exist!');
        const user = await this.userReposytory.findOne({ where: { user_id: taskDTO.newUserId } });
        if (!user)
            throw new common_1.NotFoundException('User (id=' + taskDTO.newUserId + ') does not exist!');
        editedTask.user = user;
        await this.taskReposytory.save(editedTask);
        return editedTask;
    }
    async editTask(editDTO) {
        const editedTask = await this.taskReposytory.findOne({ where: { id: editDTO.id } });
        if (editedTask) {
            if (editDTO.title)
                editedTask.title = editDTO.title;
            if (editDTO.description)
                editedTask.description = editDTO.description;
            await this.taskReposytory.save(editedTask);
        }
        return editedTask;
    }
    async deleteTask(taskID) {
        const deletedTask = await this.taskReposytory.findOne({ where: { id: taskID } });
        if (deletedTask) {
            await this.taskReposytory.delete(deletedTask);
        }
        return deletedTask;
    }
    async getAllTask() {
        return await this.taskReposytory.find({ relations: ["user"] });
    }
    async getFilterStatus(filterStatusTask) {
        return await this.taskReposytory.find({ relations: ["user"], where: { status: filterStatusTask.status } });
    }
    async getOrderByID() {
        return await this.taskReposytory.find({ relations: ["user"], order: { id: "DESC" } });
    }
};
TasksService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(task_entity_1.Task)),
    __param(1, typeorm_1.InjectRepository(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], TasksService);
exports.TasksService = TasksService;
//# sourceMappingURL=tasks.service.js.map