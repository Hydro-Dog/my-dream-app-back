import {MigrationInterface, QueryRunner} from "typeorm";

export class myInit1602146034097 implements MigrationInterface {
    name = 'myInit1602146034097'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "userPic" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "userPic"`);
    }

}
