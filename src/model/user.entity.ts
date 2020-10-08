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
    innNumber: string;

    @Column()
    companyId: string;

    @Column()
    friendsIds: string;

    @Column()
    isActive: boolean;

    @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
    createdDateTime: Date;

    @Column({ type: 'varchar', length: 300 })
    createdBy: string;

    @UpdateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
    lastChangedDateTime: Date;

    @Column({ type: 'varchar', length: 300 })
    lastChangedBy: string;
}
