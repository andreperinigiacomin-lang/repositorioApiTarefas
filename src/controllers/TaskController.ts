import { Response, Request } from 'express';
import TaskService from '../services/TaskService';

class TaskController{
    create(res:Response, req: Request): void{
        const {title} = req.body();
        const task = TaskService.create(title)
        res.status(201).json(task);
    }

}

export default new TaskController();