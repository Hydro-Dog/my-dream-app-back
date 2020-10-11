/* eslint-disable no-return-await */
import { InjectRepository } from '@nestjs/typeorm';
import { CreateCompanyDto } from 'src/dto/company.dto';
import { CompanyEntity } from 'src/model/company.entity';
import { Repository } from 'typeorm';

export class CompanyService {
    private readonly comanies: CompanyEntity[] = [];

    constructor(@InjectRepository(CompanyEntity) private readonly companyRepo: Repository<CompanyEntity>) {}

    create(company: CreateCompanyDto): CompanyEntity {
        this.comanies.push(company);

        return company;
    }

    async findAll(): Promise<CompanyEntity[]> {
        return await this.companyRepo.find();
    }

    async findOne(id: string): Promise<CompanyEntity> {
        return await this.companyRepo.findOne(id);
    }

    async remove(id: string): Promise<void> {
        await this.companyRepo.delete(id);
    }
}
