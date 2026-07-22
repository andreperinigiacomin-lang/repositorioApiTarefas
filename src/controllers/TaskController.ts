import { Response, Request } from 'express';
import TaskService from '../services/TaskService';

class TaskController{
    create(res:Response, req: Request): void{
        const {title} = req.body();
        const task = TaskService.create(title)
        res.status(201).json(task);
    }

    findAll(res: Response, req: Request): void{
        const tasks = TaskService.findAll();
        res.status(200).json(tasks);
    }

    findById(res: Response, req: Request): void{
        const id = Number(req.params.id);
        const task = TaskService.findById(id);
        if(!task){
            res.status(404).json({
                message: "Task não encontrada"});
            return
        }
        res.status(200).json(task);
    }

}

export default new TaskController();