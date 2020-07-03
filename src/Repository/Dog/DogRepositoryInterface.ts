import { DogEntityInterface } from "../../Entity/DogEntityInterface";
import { 
    CreateDogPayloadInterface,
    UpdateDogPayloadInterface,
    DeleteDogPayloadInterface,
    GetDogPayloadInterface
} from "../../Http/Payload/Dog";

export interface DogRepositoryInterface {
    create(payload: CreateDogPayloadInterface): Promise<DogEntityInterface>;
    update(payload: UpdateDogPayloadInterface): Promise<DogEntityInterface>;
    delete(payload: DeleteDogPayloadInterface): Promise<boolean>;
    get(payload: GetDogPayloadInterface): Promise<DogEntityInterface>;
}
