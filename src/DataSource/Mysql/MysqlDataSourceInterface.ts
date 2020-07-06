import { DataSourceInterface } from "../DataSourceInterface";
import { Pool } from "mysql2";

export interface MysqlDataSourceInterface extends DataSourceInterface {
    getSource(): Pool;
}
