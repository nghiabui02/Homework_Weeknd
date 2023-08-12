import { Request, Response } from "express";
declare class TeacherController {
    findAll: (req: Request, res: Response) => Promise<void>;
    add: (req: Request, res: Response) => Promise<void>;
    delete: (req: Request, res: Response) => Promise<void>;
    update: (req: any, res: any) => Promise<void>;
    findByName: (req: Request, res: Response) => Promise<void>;
    findSalary: (req: Request, res: Response) => Promise<void>;
    findAge: (req: Request, res: Response) => Promise<void>;
}
declare const _default: TeacherController;
export default _default;
