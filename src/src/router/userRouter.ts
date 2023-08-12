import {Router} from "express";
import userController from "../controller/userController";

const UserRouter = Router();
UserRouter.get('/users', userController.findAll)
UserRouter.post('/login', userController.login);
UserRouter.post('/register', userController.register);


export default UserRouter;