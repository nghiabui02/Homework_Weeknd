import {Request, Response} from "express";
import TeacherService from "../service/teacherService";


class TeacherController {
    findAll = async (req: Request, res: Response) => {
        let data = await TeacherService.getAll()
        res.json(data)
    }

    add = async (req: Request, res: Response) => {
        let data = await TeacherService.save(req.body);
        res.json(data);
    }
    delete = async (req: Request, res: Response) => {
        console.log(req.params.id)
        let data = await TeacherService.delete(req.params.id);
        res.json(data);
    }
    update = async (req, res) => {
        await TeacherService.update(req.params.id, req.body)
        res.json('complete')
    }
    findByName = async (req: Request, res: Response) => {
        let data = await TeacherService.findByName(req.query.name);
        res.json(data)
    }
    findSalary = async (req: Request, res: Response) => {
        let data = await TeacherService.findSalary(req.query.salary);
        res.json(data)
    }
    findAge = async (req: Request, res: Response)=>{
        let data = await TeacherService.findAge(req.query.age)
        res.json(data)
    }

}

export default new TeacherController();
