import { DogRepositoryInterface } from "../../../../Repository/Dog/DogRepositoryInterface";
import { DogEntityInterface } from "../../../../Entity/DogEntityInterface";
import { DogMongoRepositoryInterface } from "../../../../Repository/Dog/Mongo/DogMongoRepositoryInterface";
import { 
    CreateDogPayloadInterface,
    UpdateDogPayloadInterface,
    DeleteDogPayloadInterface,
    GetDogPayloadInterface
} from "../../../../Http/Payload/Dog";
import { DogEntity } from "../../../../Entity/DogEntity";

export class DogMongoRepositoryAdapter implements DogRepositoryInterface {
    private dogMongoRepository: DogMongoRepositoryInterface;
    
    constructor(dogMongoRepository: DogMongoRepositoryInterface) {
        this.dogMongoRepository = dogMongoRepository;
    }

    async create(payload: CreateDogPayloadInterface): Promise<DogEntityInterface> {
        const result = await this.dogMongoRepository.create({
            dogNameForMongo: payload.dogPayloadName
        });

        const dog = new DogEntity();
        dog
            .setId(result.dogIdForMongo)
            .setName(result.dogNameForMongo);

        return dog; 
    }

    async update(payload: UpdateDogPayloadInterface): Promise<DogEntityInterface> {
        const result = await this.dogMongoRepository.update({
            dogNameForMongo: payload.dogPayloadName,
            dogIdForMongo: payload.dogPayloadId
        });

        const dog = new DogEntity();
        dog
            .setId(result.dogIdForMongo)
            .setName(result.dogNameForMongo);

        return dog;
    }

    async delete(payload: DeleteDogPayloadInterface): Promise<boolean> {
        return await this.dogMongoRepository.delete({
            dogIdForMongo: payload.dogPayloadId
        });
    }

    async get(payload: GetDogPayloadInterface): Promise<DogEntityInterface> {
        const result = await this.dogMongoRepository.get({
            dogIdForMongo: payload.dogPayloadId
        });

        const dog = new DogEntity();
        dog.setName(result.dogNameForMongo);

        return dog;
    }

}