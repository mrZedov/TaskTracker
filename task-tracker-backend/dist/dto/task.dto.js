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
Object.defineProperty(exports, "__esModule", { value: true });
const class_validator_1 = require("class-validator");
class CreateTaskDTO {
}
__decorate([
    class_validator_1.MinLength(5, {
        message: "Title is too short"
    }),
    __metadata("design:type", String)
], CreateTaskDTO.prototype, "title", void 0);
__decorate([
    class_validator_1.IsInt(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", Number)
], CreateTaskDTO.prototype, "userId", void 0);
exports.CreateTaskDTO = CreateTaskDTO;
class SetStatusDTO {
}
__decorate([
    class_validator_1.IsInt(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", Number)
], SetStatusDTO.prototype, "id", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsIn(["View", "In Progress", "Done"]),
    __metadata("design:type", String)
], SetStatusDTO.prototype, "newStatus", void 0);
exports.SetStatusDTO = SetStatusDTO;
class AssignUserDTO {
}
__decorate([
    class_validator_1.IsInt(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", Number)
], AssignUserDTO.prototype, "id", void 0);
__decorate([
    class_validator_1.IsInt(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", Number)
], AssignUserDTO.prototype, "newUserId", void 0);
exports.AssignUserDTO = AssignUserDTO;
class EditTaskDTO {
}
__decorate([
    class_validator_1.IsInt(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", Number)
], EditTaskDTO.prototype, "id", void 0);
exports.EditTaskDTO = EditTaskDTO;
class FilterStatusTask {
}
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsIn(["View", "In Progress", "Done"]),
    __metadata("design:type", String)
], FilterStatusTask.prototype, "status", void 0);
exports.FilterStatusTask = FilterStatusTask;
//# sourceMappingURL=task.dto.js.map