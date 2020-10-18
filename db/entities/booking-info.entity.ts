/* eslint-disable no-magic-numbers */
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class BookingInfo {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    companyId: string;

    @Column()
    companySpaceId: string;

    @Column()
    roomId: string;

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

    @Column()
    comment: string;
}
