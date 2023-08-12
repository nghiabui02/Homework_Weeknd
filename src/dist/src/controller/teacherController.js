"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const teacherService_1 = __importDefault(require("../service/teacherService"));
class TeacherController {
    constructor() {
        this.findAll = async (req, res) => {
            let data = await teacherService_1.default.getAll();
            res.json(data);
        };
        this.add = async (req, res) => {
            let data = await teacherService_1.default.save(req.body);
            res.json(data);
        };
        this.delete = async (req, res) => {
            console.log(req.params.id);
            let data = await teacherService_1.default.delete(req.params.id);
            res.json(data);
        };
        this.update = async (req, res) => {
            await teacherService_1.default.update(req.params.id, req.body);
            res.json('complete');
        };
        this.findByName = async (req, res) => {
            let data = await teacherService_1.default.findByName(req.query.name);
            res.json(data);
        };
        this.findSalary = async (req, res) => {
            let data = await teacherService_1.default.findSalary(req.query.salary);
            res.json(data);
        };
        this.findAge = async (req, res) => {
            let data = await teacherService_1.default.findAge(req.query.age);
            res.json(data);
        };
    }
}
exports.default = new TeacherController();
//# sourceMappingURL=teacherController.js.map