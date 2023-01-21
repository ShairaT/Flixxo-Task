import AppDataSource from "../data-source";


export class DataSource {
    private connection;

    constructor() {
        this.connection = AppDataSource;
    }

    getRepository(entity: any) {
        return this.connection.getRepository(entity);
    }

    async save(entity: any) {
        return await this.connection.manager.save(entity);
    }
}