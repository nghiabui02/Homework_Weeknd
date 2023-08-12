"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const teacherController_1 = __importDefault(require("../controller/teacherController"));
const TeacherRouter = (0, express_1.Router)();
TeacherRouter.get('/', teacherController_1.default.findAll);
TeacherRouter.post('/', teacherController_1.default.add);
TeacherRouter.delete('/:id', teacherController_1.default.delete);
TeacherRouter.put('/:id', teacherController_1.default.update);
TeacherRouter.get('/age', teacherController_1.default.findAge);
TeacherRouter.get('/name', teacherController_1.default.findByName);
TeacherRouter.get('/salary', teacherController_1.default.findSalary);
exports.default = TeacherRouter;
//# sourceMappingURL=teacherRouter.js.map