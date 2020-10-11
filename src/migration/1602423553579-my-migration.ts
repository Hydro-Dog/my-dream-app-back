import {MigrationInterface, QueryRunner} from "typeorm";

export class myMigration1602423553579 implements MigrationInterface {
    name = 'myMigration1602423553579'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "booking_info" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "companyId" character varying NOT NULL, "companySpaceId" character varying NOT NULL, "roomId" character varying NOT NULL, "guestName" character varying NOT NULL, "guestId" character varying NOT NULL, "guestPhoneNumber" character varying NOT NULL, "bookingDate" character varying NOT NULL, "personsQuantity" integer NOT NULL, "comment" character varying NOT NULL, "createdDateTime" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP, "createdBy" character varying(300) NOT NULL, "lastChangedDateTime" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP, "lastChangedBy" character varying(300) NOT NULL, CONSTRAINT "PK_0e12852c16b79e924c968ee1036" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "room" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "companyId" character varying NOT NULL, "companySpaceId" character varying NOT NULL, "tablesIds" character varying NOT NULL, "indexNumber" character varying NOT NULL, "roomTitle" character varying NOT NULL, "createdDateTime" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP, "createdBy" character varying(300) NOT NULL, "lastChangedDateTime" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP, "lastChangedBy" character varying(300) NOT NULL, CONSTRAINT "PK_c6d46db005d623e691b2fbcba23" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "room"`);
        await queryRunner.query(`DROP TABLE "booking_info"`);
    }

}
