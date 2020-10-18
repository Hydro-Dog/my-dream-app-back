/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable no-undef */
import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsString, IsUUID } from 'class-validator';

export class CreateUserDto implements Readonly<CreateUserDto> {
    @ApiProperty({ required: true })
    @IsUUID()
    id: string;

    @ApiProperty({ required: true })
    @IsString()
    role: 'admin' | 'user' | 'staff' | 'superadmin';

    @ApiProperty({ required: true })
    @IsString()
    firstName: string;

    @ApiProperty({ required: true })
    @IsString()
    secondName: string;

    @ApiProperty({ required: true })
    @IsString()
    lastName: string;

    @ApiProperty({ required: true })
    @IsString()
    userPic: string;

    @ApiProperty({ required: true })
    @IsString()
    phoneNumber: string;

    @ApiProperty({ required: true })
    @IsString()
    email: string;

    @ApiProperty({ required: true })
    @IsString()
    password: string;

    @ApiProperty({ required: true })
    @IsString()
    secret: string;

    @ApiProperty({ required: true })
    @IsString()
    innNumber: string;

    @ApiProperty({ required: true })
    @IsString()
    companyId: string;

    @ApiProperty({ required: true })
    @IsString()
    friendsIds: string;

    @ApiProperty({ required: true })
    @IsString()
    friendsRequestsIds: string;

    @ApiProperty({ required: true })
    @IsBoolean()
    isActive: boolean;
}
