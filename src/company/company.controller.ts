/* eslint-disable require-await */
/* eslint-disable no-return-await */
/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Body, Controller, Get, Req } from '@nestjs/common';
import { Post } from '@nestjs/common/decorators/http/request-mapping.decorator';
import { ApiOperation } from '@nestjs/swagger';
import { Request } from 'express';
import { CreateCompanyDto } from 'src/company/company.dto';
import { Company } from 'db/entities/company.entity';
import { CompanyService } from './company.service';

@Controller('company')
export class CompanyController {
    constructor(private companyService: CompanyService) {}

    @Get()
    public async findAll(@Req() req: Request): Promise<Company[]> {
        return await this.companyService.findAll();
    }

    @Post()
    @ApiOperation({ summary: 'Create company' })
    async create(@Body() createCompanyDto: CreateCompanyDto): Promise<Company> {
        return this.companyService.create(createCompanyDto);
    }
}
