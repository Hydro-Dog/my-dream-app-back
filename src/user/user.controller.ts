/* eslint-disable no-dupe-class-members */
/* eslint-disable require-await */
/* eslint-disable no-magic-numbers */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-return-await */
import { Controller, Get, Post, Body } from '@nestjs/common';
import { Req } from '@nestjs/common/decorators/http/route-params.decorator';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Request } from 'express';
import { User } from 'db/entities/user.entity';
import { CreateUserDto } from './user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private userService: UserService) {}

    @Get()
    public async findAll(@Req() req: Request): Promise<User[]> {
        return await this.userService.findAll();
    }

    @Post()
    @ApiOperation({ summary: 'Create user' })
    async create(@Body() createUserDto: CreateUserDto): Promise<User> {
        return this.userService.create(createUserDto);
    }
}
