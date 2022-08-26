// import * as dotenv from 'dotenv';
// dotenv.config();
// const ormconfig = {
//   type: process.env.TYPE_DATABASE,
//   host: process.env.MYSQL_HOST,
//   port: parseInt(process.env.MYSQL_PORT),
//   username: process.env.MYSQL_USER_ROOT,
//   password: process.env.MYSQL_ROOT_PASSWORD,
//   database: process.env.MYSQL_DATABASE,
//   synchronize: false,
//   cli: {
//     migrationsDir: 'src/migration',
//   },
// };
import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions';

const ormconfig: MysqlConnectionOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3308,
  username: 'root',
  password: 'password',
  database: 'foodprojectdb',
  entities: ['dist/src/**/*.entity.js'],
  synchronize: false,
  migrations: ['src/database/migrations/*.ts'],
  cli: {
    migrationsDir: 'src/database/migrations',
    entitiesDir: 'src/modules/**',
  },
};
export default ormconfig;
