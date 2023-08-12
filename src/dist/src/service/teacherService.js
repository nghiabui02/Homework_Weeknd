"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = require("../data-source");
const teacher_1 = require("../entity/teacher");
class TeacherService {
    constructor() {
        this.repository = data_source_1.AppDataSource.getRepository(teacher_1.Teacher);
        this.getAll = async () => {
            return await this.repository.find();
        };
        this.save = async (data) => {
            return await this.repository.save(data);
        };
        this.delete = async (data) => {
            return await this.repository.delete({ id: data });
        };
        this.update = async (id, data) => {
            return await this.repository.update(id, data);
        };
        this.findByName = async (name) => {
            try {
                return await this.repository.createQueryBuilder('teacher')
                    .where(`NAME(teacher.name) = :name`, { name })
                    .getMany();
            }
            catch (err) {
                console.error(err);
                throw new Error('Error retrieving trade data');
            }
        };
        this.findSalary = async (salary) => {
            try {
                return await this.repository.createQueryBuilder('teacher')
                    .where(`SALARY(teacher.salary) = :salary`, { salary })
                    .getMany();
            }
            catch (err) {
                console.error(err);
                throw new Error('Error retrieving trade data');
            }
        };
        this.findAge = async (age) => {
            try {
                return await this.repository.createQueryBuilder('teacher')
                    .where(`AGE(teacher.age) = :age`, { age })
                    .getMany();
            }
            catch (err) {
                console.error(err);
                throw new Error('Error retrieving trade data');
            }
        };
    }
}
exports.default = new TeacherService();
//# sourceMappingURL=teacherService.js.map