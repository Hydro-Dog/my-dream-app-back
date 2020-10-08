/* eslint-disable no-magic-numbers */
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Table {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    companyId: string;

    @Column()
    companySpaceId: string;

    @Column()
    roomId: string;

    @Column()
    indexNumber: number;

    @Column()
    tableName: string;

    @Column()
    seatsQuantity: number;

    @Column()
    status: string;

    @Column()
    viewMode: 'view' | 'edit';

    @Column()
    todayBookingInfoId: string;

    @Column()
    bookingsIds: string;

    @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
    createdDateTime: Date;

    @Column({ type: 'varchar', length: 300 })
    createdBy: string;

    @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
    lastChangedDateTime: Date;

    @Column({ type: 'varchar', length: 300 })
    lastChangedBy: string;
}
