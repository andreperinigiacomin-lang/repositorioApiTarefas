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
    update(id: number, title?: string, completed?: boolean): Task | undefined {
        const task = this.findById(id);
        if(!task){
            return undefined;
        }
        if(title !== undefined){
            task.title = title;
        }
        if(completed !== undefined){
            task.completed = completed;
        }
        return task;
    }
}

export default new TaskService();