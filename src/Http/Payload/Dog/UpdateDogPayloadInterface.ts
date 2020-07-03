import { CreateDogPayloadInterface } from "./CreateDogPayloadInterface";

export interface UpdateDogPayloadInterface extends CreateDogPayloadInterface {
    dogPayloadId: string
}
