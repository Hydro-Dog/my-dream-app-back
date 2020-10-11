/* eslint-disable no-return-await */
/* eslint-disable no-undef */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from 'src/dto/user.dto';
import { User } from 'src/model/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
    private readonly users: User[] = [];


    constructor(@InjectRepository(User) private readonly userRepo: Repository<User>) {}

    create(user: CreateUserDto): User {
        this.users.push(user);

        return user;
    }

    async findAll(): Promise<User[]> {
        return await this.userRepo.find();
    }

    async findOne(id: string): Promise<User> {
        return await this.userRepo.findOne(id);
    }

    async remove(id: string): Promise<void> {
        await this.userRepo.delete(id);
    }
}
