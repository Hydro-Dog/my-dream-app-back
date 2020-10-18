/* eslint-disable no-magic-numbers */
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    role: 'admin' | 'user' | 'staff' | 'superadmin';

    @Column()
    firstName: string;

    @Column()
    secondName: string;

    @Column()
    lastName: string;

    @Column()
    userPic: string;

    @Column()
    phoneNumber: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    secret: string;

    @Column()
    innNumber: string;

    @Column()
    companyId: string;

    @Column()
    friendsIds: string;

    @Column()
    friendsRequestsIds: string;

    @Column()
    isActive: boolean;
}
