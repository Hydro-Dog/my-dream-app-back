import {MigrationInterface, QueryRunner} from "typeorm";

export class initialMigration1603014735725 implements MigrationInterface {
    name = 'initialMigration1603014735725'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "booking_info" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "companyId" character varying NOT NULL, "companySpaceId" character varying NOT NULL, "roomId" character varying NOT NULL, "guestName" character varying NOT NULL, "guestId" character varying NOT NULL, "guestPhoneNumber" character varying NOT NULL, "bookingDate" character varying NOT NULL, "personsQuantity" integer NOT NULL, "comment" character varying NOT NULL, CONSTRAINT "PK_0e12852c16b79e924c968ee1036" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "company_space" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "companyId" character varying NOT NULL, "roomsIds" character varying NOT NULL, CONSTRAINT "PK_f2c4182daa1dbd2e2f17832478d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "company" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "adminId" character varying NOT NULL, "companySpaceId" character varying NOT NULL, "name" character varying NOT NULL, "location" character varying NOT NULL, "phoneNumber" character varying NOT NULL, "rating" character varying NOT NULL, "isActive" boolean NOT NULL, "feedback" character varying NOT NULL, "staffIds" character varying NOT NULL, "barFriendsIds" character varying NOT NULL, CONSTRAINT "PK_056f7854a7afdba7cbd6d45fc20" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "room" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "companyId" character varying NOT NULL, "companySpaceId" character varying NOT NULL, "tablesIds" character varying NOT NULL, "indexNumber" character varying NOT NULL, "roomTitle" character varying NOT NULL, CONSTRAINT "PK_c6d46db005d623e691b2fbcba23" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "table" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "companyId" character varying NOT NULL, "companySpaceId" character varying NOT NULL, "roomId" character varying NOT NULL, "indexNumber" integer NOT NULL, "tableName" character varying NOT NULL, "seatsQuantity" integer NOT NULL, "status" character varying NOT NULL, "viewMode" character varying NOT NULL, "todayBookingInfoId" character varying NOT NULL, "bookingsIds" character varying NOT NULL, CONSTRAINT "PK_28914b55c485fc2d7a101b1b2a4" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "role" character varying NOT NULL, "firstName" character varying NOT NULL, "secondName" character varying NOT NULL, "lastName" character varying NOT NULL, "userPic" character varying NOT NULL, "phoneNumber" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "secret" character varying NOT NULL, "innNumber" character varying NOT NULL, "companyId" character varying NOT NULL, "friendsIds" character varying NOT NULL, "friendsRequestsIds" character varying NOT NULL, "isActive" boolean NOT NULL, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "table"`);
        await queryRunner.query(`DROP TABLE "room"`);
        await queryRunner.query(`DROP TABLE "company"`);
        await queryRunner.query(`DROP TABLE "company_space"`);
        await queryRunner.query(`DROP TABLE "booking_info"`);
    }

}
