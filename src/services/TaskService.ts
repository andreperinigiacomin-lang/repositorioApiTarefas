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

    findAll(completed?:string){
        if(completed === undefined){
            return this.tasks;
        }
        const isCompleted = completed === "true";
        return this.tasks.filter(task => task.completed === isCompleted);
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

    delete(id: number): boolean {
        const index = this.tasks.findIndex(task => task.id === id);
        if(index === -1){ //se nao acha, retorna -1
            return false;
        }
        this.tasks.splice(index, 1);
        return true;
    }
}

export default new TaskService();