/* eslint-disable @typescript-eslint/no-var-requires */
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { BookingInfo } from 'db/entities/booking-info.entity';
import { CompanySpace } from 'db/entities/company-space.entity';
import { Company } from 'db/entities/company.entity';
import { Room } from 'db/entities/room.entity';
import { User } from 'db/entities/user.entity';
import { Table } from 'typeorm';

require('dotenv').config();

const entities = [
    User,
    Table,
    Room,
    Company,
    CompanySpace,
    BookingInfo,
];

class ConfigService {
    constructor(private env: { [k: string]: string | undefined }) {}

    private getValue(key: string, throwOnMissing = true): string {
        const value = this.env[key];


        if (!value && throwOnMissing) {
            throw new Error(`config error - missing env.${key}`);
        }

        return value;
    }

    public ensureValues(keys: string[]) {
        keys.forEach(k => this.getValue(k, true));

        return this;
    }

    public getPort() {
        return this.getValue('PORT', true);
    }

    public isProduction() {
        const mode = this.getValue('MODE', false);

        return mode !== 'DEV';
    }

    public getTypeOrmConfig(): TypeOrmModuleOptions {
        return {
            type: 'postgres',
            host: this.getValue('POSTGRES_HOST'),
            port: parseInt(this.getValue('POSTGRES_PORT')),
            username: this.getValue('POSTGRES_USER'),
            password: this.getValue('POSTGRES_PASSWORD'),
            database: this.getValue('POSTGRES_DATABASE'),

            entities,
            // entities: ['**/*.entity{.ts,.js}'],
            // entities: ['dist/**/*.entity.js'],

            // migrationsTableName: 'migration',

            // migrations: ['src/migration/*.ts'],

            // cli: { migrationsDir: 'src/migration' },

            ssl: this.isProduction(),
        };
    }
}

const configService = new ConfigService(process.env)
    .ensureValues([
        'POSTGRES_HOST',
        'POSTGRES_PORT',
        'POSTGRES_USER',
        'POSTGRES_PASSWORD',
        'POSTGRES_DATABASE',
    ]);

export { configService };
