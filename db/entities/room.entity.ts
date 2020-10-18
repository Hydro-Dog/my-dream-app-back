/* eslint-disable no-magic-numbers */
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Room {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    companyId: string;

    @Column()
    companySpaceId: string;

    @Column()
    tablesIds: string;

    @Column()
    indexNumber: string;

    @Column()
    roomTitle: string;
}
