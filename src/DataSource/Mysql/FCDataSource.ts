import { MysqlDataSourceInterface } from "./MysqlDataSourceInterface";
import { Pool, createPool } from "mysql2";

export class FCDataSource implements MysqlDataSourceInterface {
    private pool: Pool;

    constructor() {
        this.pool = createPool({
            host: "",
            user: "",
            password: "",
            database: ""
        });
    }

    getSource(): Pool {
        return this.pool;
    }

}