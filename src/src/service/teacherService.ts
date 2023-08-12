
import {AppDataSource} from "../data-source";
import {Teacher} from "../entity/teacher";
class TeacherService {
    private repository = AppDataSource.getRepository(Teacher)

    getAll = async () => {
        return await this.repository.find()
    }
    save = async (data) => {
        return await this.repository.save(data)
    }
    delete = async (data) => {
        return await this.repository.delete({id:data})
    }
    update = async (id, data) => {
        return await this.repository.update(id, data);
    }
    findByName = async (name) => {
        try {
            return await this.repository.createQueryBuilder('teacher')
                .where(`NAME(teacher.name) = :name`, {name})
                .getMany();
        } catch (err) {
            console.error(err);
            throw new Error('Error retrieving trade data');
        }
    }
    findSalary = async (salary) => {
        try {
            return await this.repository.createQueryBuilder('teacher')
                .where(`SALARY(teacher.salary) = :salary`, {salary})
                .getMany();
        } catch (err) {
            console.error(err);
            throw new Error('Error retrieving trade data');
        }
    }
    findAge = async (age) => {
        try {
            return await this.repository.createQueryBuilder('teacher')
                .where(`AGE(teacher.age) = :age`, {age})
                .getMany();
        } catch (err) {
            console.error(err);
            throw new Error('Error retrieving trade data');
        }
    }
}

export default new TeacherService();
