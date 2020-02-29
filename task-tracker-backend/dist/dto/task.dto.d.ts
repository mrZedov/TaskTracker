export declare class CreateTaskDTO {
    readonly title: string;
    readonly description: string;
    readonly userId: number;
}
export declare class SetStatusDTO {
    readonly id: number;
    readonly newStatus: string;
}
export declare class AssignUserDTO {
    readonly id: number;
    readonly newUserId: number;
}
export declare class EditTaskDTO {
    readonly id: number;
    readonly title: string;
    readonly description: string;
}
export declare class FilterStatusTask {
    readonly status: string;
}
