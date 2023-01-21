import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateValueFildToDecimal1674316515409 implements MigrationInterface {
    name = 'UpdateValueFildToDecimal1674316515409'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`TokenQuote\` DROP COLUMN \`value\``);
        await queryRunner.query(`ALTER TABLE \`TokenQuote\` ADD \`value\` decimal(10,2) NOT NULL DEFAULT '0.00'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`TokenQuote\` DROP COLUMN \`value\``);
        await queryRunner.query(`ALTER TABLE \`TokenQuote\` ADD \`value\` int NOT NULL`);
    }

}
