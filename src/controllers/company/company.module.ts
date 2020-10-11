import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompanyEntity } from 'src/model/company.entity';
import { CompanyController } from './company.controller';
import { CompanyService } from './company.service';

@Module({
    imports: [TypeOrmModule.forFeature([CompanyEntity])],
    providers: [CompanyService],
    controllers: [CompanyController],
})
export class CompanyModule {}
