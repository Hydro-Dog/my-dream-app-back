import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsString, IsUUID } from 'class-validator';

export class CreateCompanyDto implements Readonly<CreateCompanyDto> {
    @ApiProperty({ required: true })
    @IsUUID()
    id: string;

    @ApiProperty({ required: true })
    @IsString()
    adminId: string;

    @ApiProperty({ required: true })
    @IsString()
    companySpaceId: string;

    @ApiProperty({ required: true })
    @IsString()
    name: string;

    @ApiProperty({ required: true })
    @IsString()
    location: string;

    @ApiProperty({ required: true })
    @IsString()
    phoneNumber: string;

    @ApiProperty({ required: true })
    @IsString()
    rating: string;

    @ApiProperty({ required: true })
    @IsString()
    feedback: string;

    @ApiProperty({ required: true })
    @IsString()
    staffIds: string;

    @ApiProperty({ required: true })
    @IsString()
    barFriendsIds: string;

    @ApiProperty({ required: true })
    @IsBoolean()
    isActive: boolean;
}
