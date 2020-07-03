import { DogRepositoryInterface } from "../../../src/Repository/Dog/DogRepositoryInterface";
import { DogEntityInterface } from "../../../src/Entity/DogEntityInterface";
import { DogEntity } from "../../../src/Entity/DogEntity";
import { 
    CreateDogPayloadInterface, 
    UpdateDogPayloadInterface, 
    DeleteDogPayloadInterface, 
    GetDogPayloadInterface 
} from "../../../src/Http/Payload/Dog";

export class DogRepositoryStub implements DogRepositoryInterface {
    async create(payload: CreateDogPayloadInterface): Promise<DogEntityInterface> {
        const dog = new DogEntity();
        dog.setId("testId");
        dog.setName(payload.dogPayloadName);

        return dog;
    }
    update(payload: UpdateDogPayloadInterface): Promise<DogEntityInterface> {
        throw new Error("Method not implemented.");
    }
    delete(payload: DeleteDogPayloadInterface): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    get(payload: GetDogPayloadInterface): Promise<DogEntityInterface> {
        throw new Error("Method not implemented.");
    }

}
