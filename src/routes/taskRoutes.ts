import { Router } from "express";
import TaskController from "../controllers/TaskController";

const router = Router();

router.post("/tasks", (req, res) => TaskController.create(res, req));

router.get('/tasks', (req, res) => TaskController.findAll(res, req));

router.get('/tasks/:id', (req, res) => TaskController.findById(res, req));

router.put('/tasks/:id', (req, res) => TaskController.update(res, req));

router.delete('/tasks/:id', (req, res) => TaskController.delete(res, req));

export default router;