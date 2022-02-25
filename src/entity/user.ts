import { Column, Entity } from 'typeorm';
import { CommonFields } from './commonFields';

export interface IUser{
    firstName: string,
    lastName: string,
    age?: number,
    phone: string,
    email: string,
    password: string
}

@Entity('Users', { database: 'okten' })
export class User extends CommonFields implements IUser {
    @Column({
        type: 'varchar',
        width: 250,
        nullable: false,
    })
        firstName: string;

    @Column({
        type: 'varchar',
        width: 250,
        nullable: false,
    })
        lastName: string;

    @Column({
        type: 'int',
        width: 250,
        nullable: false,
    })
        age?: number;

    @Column({
        type: 'varchar',
        width: 250,
        nullable: false,
        unique: true,
    })
        phone: string;

    @Column({
        type: 'varchar',
        width: 250,
        nullable: false,
        unique: true,
    })
        email: string;

    @Column({
        type: 'int',
        width: 250,
        nullable: false,
    })
        password: string;
}
