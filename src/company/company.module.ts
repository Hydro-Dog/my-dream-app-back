import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Company } from 'db/entities/company.entity';
import { CompanyController } from './company.controller';
import { CompanyService } from './company.service';

@Module({
    imports: [TypeOrmModule.forFeature([Company])],
    providers: [CompanyService],
    controllers: [CompanyController],
})
export class CompanyModule {}
