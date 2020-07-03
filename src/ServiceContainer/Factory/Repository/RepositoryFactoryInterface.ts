import { DogRepositoryInterface } from "../../Repository/Dog/DogRepositoryInterface";

export interface RepositoryFactoryInterface {
    create(): DogRepositoryInterface
}
