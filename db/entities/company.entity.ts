/* eslint-disable no-magic-numbers */
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Company {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    adminId: string;

    @Column()
    companySpaceId: string;

    @Column()
    name: string;

    @Column()
    location: string;

    @Column()
    phoneNumber: string;

    @Column()
    rating: string;

    @Column()
    isActive: boolean;

    @Column()
    feedback: string;

    @Column()
    staffIds: string;

    @Column()
    barFriendsIds: string;
}
