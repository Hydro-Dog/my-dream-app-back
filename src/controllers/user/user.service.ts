/* eslint-disable no-return-await */
/* eslint-disable no-undef */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from 'src/dto/user.dto';
import { UserEntity } from 'src/model/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
    private readonly users: UserEntity[] = [];


    constructor(@InjectRepository(UserEntity) private readonly userRepo: Repository<UserEntity>) {}

    create(user: CreateUserDto): UserEntity {
        this.users.push(user);

        return user;
    }

    async findAll(): Promise<UserEntity[]> {
        return await this.userRepo.find();
    }

    async findOne(id: string): Promise<UserEntity> {
        return await this.userRepo.findOne(id);
    }

    async remove(id: string): Promise<void> {
        await this.userRepo.delete(id);
    }
}
