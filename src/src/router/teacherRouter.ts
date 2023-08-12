import {Router} from "express";
import TeacherController from "../controller/teacherController";

const TeacherRouter = Router();
TeacherRouter.get('/', TeacherController.findAll);
TeacherRouter.post('/', TeacherController.add);
TeacherRouter.delete('/:id', TeacherController.delete);
TeacherRouter.put('/:id', TeacherController.update);
TeacherRouter.get('/age', TeacherController.findAge);
TeacherRouter.get('/name', TeacherController.findByName);
TeacherRouter.get('/salary', TeacherController.findSalary);

export default TeacherRouter;
