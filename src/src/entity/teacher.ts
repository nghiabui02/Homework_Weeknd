import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Teacher {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({type: 'varchar', length: 255})
    name: string;
    @Column({type: 'int'})
    age: number;
    @Column({type:'int'})
    salary: number;
}
