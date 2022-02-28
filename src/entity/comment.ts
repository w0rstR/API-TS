import {
    Column, Entity,
} from 'typeorm';

import { CommonFields } from './commonFields';

export interface IComment {
    title: string;
    text: string;
    like: number,
    dislike: number,
    postId:number,
    authordId: number

}

@Entity('comments', { database: 'db' })
export class Comment extends CommonFields implements IComment {
    @Column({
        type: 'varchar',
        width: 255,
        nullable: false,
    })
        title: string;

    @Column({
        type: 'varchar',
        width: 255,
        nullable: false,
    })
        text: string;

    @Column({
        type: 'int',
        default: 0,
        nullable: false,
    })
        like: number;

    @Column({
        type: 'int',
        default: 0,
        nullable: false,
    })
        dislike: number;

    @Column({
        type: 'int',
        nullable: false,
    })
        postId: number;

    @Column({
        type: 'int',
        nullable: false,
    })
        authordId: number;
}
