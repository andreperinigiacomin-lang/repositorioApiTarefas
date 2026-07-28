import { Task } from "../types/Task";
import { prisma } from "../config/prismaClient";

class TaskService{
    async create(title: string) {
        const task = await prisma.task.create({
            data:{
                title,
                completed: false,
            },
        });
        return task;
    }

    async findAll(completed?:string){
        if(completed === undefined){
            return await prisma.task.findMany();
        }
        const isCompleted = completed === "true";
        return await prisma.task.findMany({
            where: {
                completed: isCompleted,
            },
        });
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