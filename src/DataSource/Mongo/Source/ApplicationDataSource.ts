import { MongoDataSourceInterface } from "./MongoDataSourceInterface";
import { MongoClient } from "mongodb";
import { ConfigManager } from "@madeiramadeirabr/service-codebase-core";

export class ApplicationDataSource implements MongoDataSourceInterface {
    static connection: Promise<MongoClient>;

    async getSource(): Promise<MongoClient> {
        return ApplicationDataSource.connection;
    }
    
}