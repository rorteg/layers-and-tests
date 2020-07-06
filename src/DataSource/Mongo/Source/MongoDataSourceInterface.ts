import { DataSourceInterface } from "../../DataSourceInterface";
import { MongoClient } from "mongodb";

export interface MongoDataSourceInterface extends DataSourceInterface {
    getSource(): Promise<MongoClient>;
}