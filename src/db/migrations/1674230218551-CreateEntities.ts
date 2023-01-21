import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateEntities1674230218551 implements MigrationInterface {
    name = 'CreateEntities1674230218551'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`Token\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(100) NOT NULL, \`code\` varchar(10) NOT NULL, \`createdAt\` timestamp NOT NULL, \`updatedAt\` timestamp NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`TokenQuote\` (\`id\` int NOT NULL AUTO_INCREMENT, \`value\` int NOT NULL, \`createdAt\` timestamp NOT NULL, \`updatedAt\` timestamp NOT NULL, \`tokenId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`)
        await queryRunner.query(`ALTER TABLE \`TokenQuote\` ADD CONSTRAINT \`FK_5047d025ded268f11ceeaa421aa\` FOREIGN KEY (\`tokenId\`) REFERENCES \`Token\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`TokenQuote\` DROP FOREIGN KEY \`FK_5047d025ded268f11ceeaa421aa\``);
        await queryRunner.query(`DROP TABLE \`Token\``);
        await queryRunner.query(`DROP TABLE \`TokenQuote\``);
    }

}
