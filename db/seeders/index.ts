/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
import { createConnection } from 'typeorm';
import { resolve } from 'path';
import { readdirSync } from 'fs';
require('dotenv').config();

const projectDir = resolve(__dirname, '../../');

console.log('process.env: ', process.env);

interface CustomEnv {
    readonly POSTGRES_HOST?: string;
    readonly POSTGRES_PORT?: string;
    readonly POSTGRES_USER?: string;
    readonly POSTGRES_PASSWORD?: string;
    readonly POSTGRES_DATABASE?: string;
  }

const Seeders = readdirSync(__dirname)
    .filter((seeder: string) => seeder !== 'index.ts')
    .sort()
    .map((seeder: string) => require(`${__dirname}/${seeder}`).default);

const RequiredVariables: string[] = [
    'POSTGRES_HOST',
    'POSTGRES_PORT',
    'POSTGRES_USER',
    'POSTGRES_PASSWORD',
    'POSTGRES_DATABASE',
];

function getEnv(env: CustomEnv): CustomEnv | never {
    RequiredVariables.forEach((item: string) => {
        if (!env[item]) {
            throw new Error(`${item} doesn't exists!`);
        }
    });

    return env;
}

const {
    POSTGRES_HOST: dbHost,
    POSTGRES_PORT: dbPort,
    POSTGRES_USER: dbUsername,
    POSTGRES_PASSWORD: dbPassword,
    POSTGRES_DATABASE: dbName,
}: CustomEnv = getEnv(process.env);


async function main() {
    let connection;
    let queryRunner;

    try {
        console.info('🤖 Start seeders!🤖 ');

        connection = await createConnection({
            type: 'postgres',
            host: dbHost,
            port: Number(dbPort),
            username: dbUsername,
            password: dbPassword,
            database: dbName,
            entities: [`${projectDir}/db/entities/*.ts`],
        });
        console.info('🤖 Connection established !🤖 ');
        queryRunner = connection.createQueryRunner();

        await queryRunner.connect();

        await queryRunner.startTransaction();

        for await (const { up } of Seeders) {
            await up(queryRunner);
        }
        await queryRunner.commitTransaction();
    } catch (error) {
        console.error('🤖 error🤖 ', error);
        await queryRunner.rollbackTransaction();
    } finally {
        await queryRunner.release();
        await connection.close();
    }
}

main();

