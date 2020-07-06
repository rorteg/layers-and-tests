import { DogServiceInterface } from "./DogServiceInterface";

import { injectable, inject } from "inversify";
import { DogRepositoryInterface } from "../Repository/Dog/DogRepositoryInterface";
import { CreateDogPayloadInterface } from "../Http/Payload/Dog/CreateDogPayloadInterface";
import { DogEntityInterface } from "../Entity/DogEntityInterface";
import { UpdateDogPayloadInterface, GetDogPayloadInterface, DeleteDogPayloadInterface } from "../Http/Payload/Dog";

@injectable()
export class DogService implements DogServiceInterface {
    private dogRepository: DogRepositoryInterface;

    constructor(@inject("DogRepositoryInterface") dogRepository: DogRepositoryInterface) {
        this.dogRepository = dogRepository;
    }

    async create(payload: CreateDogPayloadInterface): Promise<DogEntityInterface> {
        const dog: DogEntityInterface = await this.dogRepository.create(payload);

        return dog;
    }

    async update(payload: UpdateDogPayloadInterface): Promise<DogEntityInterface> {
        throw new Error();
        // return await this.repository.update(payload);
    }

    async get(payload: GetDogPayloadInterface): Promise<DogEntityInterface> {
        throw new Error();
        //return await this.repository.get(payload);
    }

    async delete(payload: DeleteDogPayloadInterface): Promise<boolean> {
        throw new Error();
        //return await this.repository.delete(payload);
    }
}
