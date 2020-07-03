export type dogWebServiceDataType = {
    dogIdForWebService: string
}

export interface DogWebServiceRepositoryInterface {
    create(dogDataForWebService: dogWebServiceDataType): dogWebServiceDataType;
    update(dogDataForWebService: dogWebServiceDataType): dogWebServiceDataType;
    delete(dogDataForWebService: dogWebServiceDataType): boolean;
    get(dogDataForWebService: dogWebServiceDataType): dogWebServiceDataType;
}
