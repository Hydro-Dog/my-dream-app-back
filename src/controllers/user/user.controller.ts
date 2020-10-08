/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-return-await */
import { Controller, Get } from '@nestjs/common';
import { Req } from '@nestjs/common/decorators/http/route-params.decorator';
import { Request } from 'express';
import { User } from 'src/model/user.entity';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  public async findAll(@Req() req: Request): Promise<User[]> {
    console.log('req: ', req);

    return await this.userService.findAll();
  }
}
