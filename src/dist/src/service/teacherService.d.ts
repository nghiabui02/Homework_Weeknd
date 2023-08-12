import { Teacher } from "../entity/teacher";
declare class TeacherService {
    private repository;
    getAll: () => Promise<Teacher[]>;
    save: (data: any) => Promise<any>;
    delete: (data: any) => Promise<import("typeorm").DeleteResult>;
    update: (id: any, data: any) => Promise<import("typeorm").UpdateResult>;
    findByName: (name: any) => Promise<Teacher[]>;
    findSalary: (salary: any) => Promise<Teacher[]>;
    findAge: (age: any) => Promise<Teacher[]>;
}
declare const _default: TeacherService;
export default _default;
