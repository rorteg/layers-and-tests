import {ContainerModule, interfaces, decorate, injectable} from "inversify";
import {container} from "../../Container";
import { DogServiceInterface } from "../../../Service/DogServiceInterface";
import { DogService } from "../../../Service/DogService";
import { DogRepositoryInterface } from "../../../Repository/Dog/DogRepositoryInterface";
import { DogMongoRepositoryFactory } from "../../Factory/Repository/DogMongoRepositoryFactory";
import { TARGET_NAMES_ENUM } from "./DogTargetNamesEnum";

export const dog = new ContainerModule((
    bind: interfaces.Bind,
    unbind: interfaces.Unbind
) => {
    container.bind<DogRepositoryInterface>("DogRepositoryInterface")
        .toDynamicValue((context) => {
            return new DogMongoRepositoryFactory().create()
        }).whenTargetIsDefault();

    container.bind<DogRepositoryInterface>("DogRepositoryInterface")
        .toDynamicValue((context) => {
            return new DogMongoRepositoryFactory().create()
        }).whenTargetNamed(TARGET_NAMES_ENUM.DOG_MONGO_REPOSITORY);


    container.bind<DogServiceInterface>("DogServiceInterface").to(DogService);
});