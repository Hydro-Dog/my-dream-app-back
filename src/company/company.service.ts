/* eslint-disable no-return-await */
import { InjectRepository } from '@nestjs/typeorm';
import { CreateCompanyDto } from 'src/company/company.dto';
import { Company } from 'db/entities/company.entity';
import { Repository } from 'typeorm';

export class CompanyService {
    private readonly comanies: Company[] = [];

    constructor(@InjectRepository(Company) private readonly companyRepo: Repository<Company>) {}

    create(company: CreateCompanyDto): Company {
        this.comanies.push(company);

        return company;
    }

    async findAll(): Promise<Company[]> {
        return await this.companyRepo.find();
    }

    async findOne(id: string): Promise<Company> {
        return await this.companyRepo.findOne(id);
    }

    async remove(id: string): Promise<void> {
        await this.companyRepo.delete(id);
    }
}
