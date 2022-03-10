import {
    Column, Entity, JoinColumn, ManyToOne, OneToMany,
} from 'typeorm';
import { User } from './user';
import { CommonFields } from './commonFields';
import { Comment, IComment } from './comment';

export interface IPost {
    title: string;
    text: string;
    userId: number;
    comments?: IComment[];
}

@Entity('posts', { database: 'db' })
export class Post extends CommonFields implements IPost {
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
    })
        userId: number;

    @OneToMany(() => Comment, (comment) => comment.post)
        comments: Comment[];

    @ManyToOne(() => User, (user) => user.posts)
    @JoinColumn({ name: 'userId' })
        user: User;
}
