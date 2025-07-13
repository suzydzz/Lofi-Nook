export type Category = 'Bug'|'Feature'|'Documentation'|'Refactor'|'Test'
export type Status = 'To Do'|'In Progress'|'Done'
export type Priority = 'Low'|'Medium'|'High'
export interface TaskItem{
    id: number;
    title: string;
    description?: string;
    category: Category;
    status: Status;
    priority: Priority;
}