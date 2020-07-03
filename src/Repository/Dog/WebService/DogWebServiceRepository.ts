import { DogWebServiceRepositoryInterface, dogWebServiceDataType } from "./DogWebServiceRepositoryInterface";

export class DogWebServiceRepository implements DogWebServiceRepositoryInterface {
    create(DogData: dogWebServiceDataType): dogWebServiceDataType {
        throw new Error("Method not implemented.");
    }
    update(DogData: dogWebServiceDataType): dogWebServiceDataType {
        throw new Error("Method not implemented.");
    }
    delete(DogData: dogWebServiceDataType): boolean {
        throw new Error("Method not implemented.");
    }
    get(DogData: dogWebServiceDataType): dogWebServiceDataType {
        throw new Error("Method not implemented.");
    }
    
}