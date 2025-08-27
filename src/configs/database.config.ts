import { TypeOrmModuleOptions } from '@nestjs/typeorm';

const databaseConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'rodrigo',
  password: '12345678',
  database: 'meudb',
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  synchronize: true,
};
export default databaseConfig;
