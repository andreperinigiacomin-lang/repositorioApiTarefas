import { Task } from "../types/Task";

class TaskService{
    tasks: Task[] = [];
    create(title: string): Task {
        const task: Task = {
            id: Math.floor(Math.random() * 1000000),
            title,
            completed: false,
        };
        this.tasks.push(task);
        return task;
    }
    findAll(): Task[]{
        return this.tasks;
    }
    findById(id: number): Task | undefined {
        return this.tasks.find(task => task.id === id);
    }
}

export default new TaskService();