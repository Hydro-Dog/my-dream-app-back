import {MigrationInterface, QueryRunner} from "typeorm";

export class myInit1602143800346 implements MigrationInterface {
    name = 'myInit1602143800346'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "company_space_interface" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "roomsIds" character varying NOT NULL, "createdDateTime" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP, "createdBy" character varying(300) NOT NULL, "lastChangedDateTime" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP, "lastChangedBy" character varying(300) NOT NULL, CONSTRAINT "PK_792cf7487b5c17a7be5f9d75d41" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "company" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "adminId" character varying NOT NULL, "companySpaceId" character varying NOT NULL, "name" character varying NOT NULL, "location" character varying NOT NULL, "phoneNumber" character varying NOT NULL, "rating" character varying NOT NULL, "feedback" character varying NOT NULL, "staffIds" character varying NOT NULL, "barFriendsIds" character varying NOT NULL, "createdDateTime" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP, "createdBy" character varying(300) NOT NULL, "lastChangedDateTime" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP, "lastChangedBy" character varying(300) NOT NULL, CONSTRAINT "PK_056f7854a7afdba7cbd6d45fc20" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "room" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "indexNumber" character varying NOT NULL, "tablesIds" character varying NOT NULL, "roomTitle" character varying NOT NULL, "createdDateTime" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP, "createdBy" character varying(300) NOT NULL, "lastChangedDateTime" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP, "lastChangedBy" character varying(300) NOT NULL, CONSTRAINT "PK_c6d46db005d623e691b2fbcba23" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "table" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "indexNumber" integer NOT NULL, "tableName" character varying NOT NULL, "seatsQuantity" integer NOT NULL, "status" character varying NOT NULL, "viewMode" character varying NOT NULL, "todayBookingInfoId" character varying NOT NULL, "bookingsIds" character varying NOT NULL, "createdDateTime" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP, "createdBy" character varying(300) NOT NULL, "lastChangedDateTime" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP, "lastChangedBy" character varying(300) NOT NULL, CONSTRAINT "PK_28914b55c485fc2d7a101b1b2a4" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "role" character varying NOT NULL, "firstName" character varying NOT NULL, "secondName" character varying NOT NULL, "lastName" character varying NOT NULL, "phoneNumber" character varying NOT NULL, "email" character varying NOT NULL, "innNumber" character varying NOT NULL, "companyId" character varying NOT NULL, "friendsIds" character varying NOT NULL, "isActive" boolean NOT NULL, "createdDateTime" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP, "createdBy" character varying(300) NOT NULL, "lastChangedDateTime" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP, "lastChangedBy" character varying(300) NOT NULL, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "table"`);
        await queryRunner.query(`DROP TABLE "room"`);
        await queryRunner.query(`DROP TABLE "company"`);
        await queryRunner.query(`DROP TABLE "company_space_interface"`);
    }

}
