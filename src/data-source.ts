import { DataSource } from "typeorm";

const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "user",
  password: "password",
  database: "flixxo",
  synchronize: false,
  logging: false,
  migrationsRun: true,
  entities: [`dist/db/entities/**/*.js`],
  migrations: [`dist/db/migrations/**/*.js`],
  subscribers: [],
});

export default AppDataSource;