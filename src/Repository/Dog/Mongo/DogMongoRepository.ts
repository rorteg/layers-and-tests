import { DogMongoRepositoryInterface, dogMongoDataInterface } from "./DogMongoRepositoryInterface";
import { MongoDataSourceInterface } from "../../../DataSource/Mongo/Source/MongoDataSourceInterface";
import { MongoClient } from "mongodb";

export class DogMongoRepository implements DogMongoRepositoryInterface {
    private dataSource: MongoDataSourceInterface;
    
    constructor(dataSource: MongoDataSourceInterface) {
        this.dataSource = dataSource;
    }

    async create(dogData: dogMongoDataInterface): Promise<dogMongoDataInterface> {
        const source = await this.dataSource.getSource();
        const collection = source.db("").collection("");
        const result = await collection.insert(dogData);
        dogData.dogIdForMongo = result.insertedIds[0];

        return dogData;
    }

    update(dogData: dogMongoDataInterface): Promise<dogMongoDataInterface> {
        throw new Error("Method not implemented.");
    }
    delete(dogData: dogMongoDataInterface): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    get(dogData: dogMongoDataInterface): Promise<dogMongoDataInterface> {
        throw new Error("Method not implemented.");
    }
    
}