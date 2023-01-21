import { MigrationInterface, QueryRunner } from "typeorm";

export class TokenSeeds1674231295725 implements MigrationInterface {
    name = 'TokenSeeds1674231295725'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `INSERT INTO Token (id, name, code, createdAt, updatedAt) VALUES(NULL, 'Bitcoin', 'BTC', NOW(), NOW())`,
        );
        await queryRunner.query(
            `INSERT INTO Token (id, name, code, createdAt, updatedAt) VALUES(NULL, 'Solana', 'SOL', NOW(), NOW())`,
        );
        await queryRunner.query(
            `INSERT INTO Token (id, name, code, createdAt, updatedAt) VALUES(NULL, 'Ethereum', 'ETH', NOW(), NOW())`,
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DELETE * FROM Token`);
    }

}
