/* eslint-disable require-await */
/* eslint-disable no-return-await */
/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Body, Controller, Get, Req } from '@nestjs/common';
import { Post } from '@nestjs/common/decorators/http/request-mapping.decorator';
import { ApiOperation } from '@nestjs/swagger';
import { Request } from 'express';
import { CreateCompanyDto } from 'src/dto/company.dto';
import { CompanyEntity } from 'src/model/company.entity';
import { CompanyService } from './company.service';

@Controller('company')
export class CompanyController {
    constructor(private companyService: CompanyService) {}

    @Get()
    public async findAll(@Req() req: Request): Promise<CompanyEntity[]> {
        return await this.companyService.findAll();
    }

    @Post()
    @ApiOperation({ summary: 'Create company' })
    async create(@Body() createCompanyDto: CreateCompanyDto): Promise<CompanyEntity> {
        return this.companyService.create(createCompanyDto);
    }
}
