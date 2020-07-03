import { DogMysqlRepositoryInterface, dogMysqlDataType } from "./DogMysqlRepositoryInterface";

export class DogMysqlRepository implements DogMysqlRepositoryInterface {
    create(DogData: dogMysqlDataType): dogMysqlDataType{
        throw new Error("Method not implemented.");
    }
    update(DogData: dogMysqlDataType): dogMysqlDataType {
        throw new Error("Method not implemented.");
    }
    delete(DogData: dogMysqlDataType): boolean {
        throw new Error("Method not implemented.");
    }
    get(DogData: dogMysqlDataType): dogMysqlDataType {
        throw new Error("Method not implemented.");
    }
    
}