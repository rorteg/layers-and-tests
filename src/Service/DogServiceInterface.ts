import { DogEntityInterface } from "../Entity/DogEntityInterface";
import { 
    CreateDogPayloadInterface, 
    UpdateDogPayloadInterface, 
    GetDogPayloadInterface, 
    DeleteDogPayloadInterface
} from "../Http/Payload/Dog";

export interface DogServiceInterface {
    create(payload: CreateDogPayloadInterface): Promise<DogEntityInterface>;
    update(payload: UpdateDogPayloadInterface): Promise<DogEntityInterface>;
    get(payload: GetDogPayloadInterface): Promise<DogEntityInterface>;
    delete(payload: DeleteDogPayloadInterface): Promise<boolean>;
}