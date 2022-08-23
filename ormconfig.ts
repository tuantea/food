// import * as dotenv from 'dotenv';
// dotenv.config();
// module.exports = {
//   type: process.env.TYPE_DATABASE,
//   host: process.env.MYSQL_HOST,
//   port: parseInt(process.env.MYSQL_PORT),
//   username: process.env.MYSQL_USER_ROOT,
//   password: process.env.MYSQL_ROOT_PASSWORD,
//   database: process.env.MYSQL_DATABASE,
//   synchronize: false,
// };
import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions';

const ormconfig: MysqlConnectionOptions = {
  type: 'mysql',
  database: 'db',
  entities: ['dist/src/**/*.entity.js'],
  synchronize: true,
};
export default ormconfig;
