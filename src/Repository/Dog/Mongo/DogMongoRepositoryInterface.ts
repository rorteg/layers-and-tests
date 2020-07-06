export type dogMongoDataInterface = {
    dogIdForMongo?: string,
    dogNameForMongo?: string
}

export interface DogMongoRepositoryInterface {
    create(dogDataForMongo: dogMongoDataInterface): Promise<dogMongoDataInterface>;
    update(dogDataForMongo: dogMongoDataInterface): Promise<dogMongoDataInterface>;
    delete(dogDataForMongo: dogMongoDataInterface): Promise<boolean>;
    get(dogDataForMongo: dogMongoDataInterface): Promise<dogMongoDataInterface>;
}
