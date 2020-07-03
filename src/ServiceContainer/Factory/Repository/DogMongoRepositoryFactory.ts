import { RepositoryFactoryInterface } from "./RepositoryFactoryInterface";
import { DogRepositoryInterface } from "../../../Repository/Dog/DogRepositoryInterface";
import { ApplicationDataSource } from "../../../DataSource/Mongo/Source/ApplicationDataSource";
import { DogMongoRepository } from "../../../Repository/Dog/Mongo/DogMongoRepository";
import { DogMongoRepositoryAdapter } from "../../../Adapter/Repository/Dog/Mongo/DogMongoRepositoryAdapter";

export class DogMongoRepositoryFactory implements RepositoryFactoryInterface {
    create(): DogRepositoryInterface {
        const dataSource = new ApplicationDataSource();
        const repository = new DogMongoRepository(dataSource);
        return new DogMongoRepositoryAdapter(repository);
    }
}