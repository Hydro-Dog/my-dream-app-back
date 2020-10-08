/* eslint-disable no-magic-numbers */
import { Column, CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

export class BookingInfo {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    guestName: string;

    @Column()
    guestId: string;

    @Column()
    guestPhoneNumber: string;

    @Column()
    bookingDate: string;

    @Column()
    personsQuantity: number;

    @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
    createdDateTime: Date;

    @Column({ type: 'varchar', length: 300 })
    createdBy: string;

    @UpdateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
    lastChangedDateTime: Date;

    @Column({ type: 'varchar', length: 300 })
    lastChangedBy: string;
}
