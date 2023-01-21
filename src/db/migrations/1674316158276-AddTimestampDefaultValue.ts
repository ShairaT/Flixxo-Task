import { MigrationInterface, QueryRunner } from "typeorm";

export class AddTimestampDefaultValue1674316158276 implements MigrationInterface {
    name = 'AddTimestampDefaultValue1674316158276'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`TokenQuote\` CHANGE \`createdAt\` \`createdAt\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE \`TokenQuote\` CHANGE \`updatedAt\` \`updatedAt\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE \`Token\` CHANGE \`createdAt\` \`createdAt\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE \`Token\` CHANGE \`updatedAt\` \`updatedAt\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`Token\` CHANGE \`updatedAt\` \`updatedAt\` timestamp NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`Token\` CHANGE \`createdAt\` \`createdAt\` timestamp NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`TokenQuote\` CHANGE \`updatedAt\` \`updatedAt\` timestamp NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`TokenQuote\` CHANGE \`createdAt\` \`createdAt\` timestamp NOT NULL`);
    }

}
