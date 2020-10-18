/* eslint-disable no-magic-numbers */
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class CompanySpace {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    companyId: string

    @Column()
    roomsIds: string
}
