import {Request, Response} from "express";
import UserService from "../service/userService";


class UserController {
    private userService;

    constructor() {
        this.userService = UserService;
    }

    findAll = async (req: Request, res: Response) => {
        let data = await this.userService.findAll()
        res.json(data);
    }
    register = async (req: Request, res: Response) => {
        await UserService.register(req.body);
        res.status(201).json('Create user success')
    }

    login = async (req: Request, res: Response) => {
        let resultCheck = await UserService.checkUser(req.body);
        res.status(200).json(resultCheck);
    }
}
export default new UserController();