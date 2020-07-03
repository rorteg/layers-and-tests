export type dogMysqlDataType = {
    dogIdForMysql: string
}

export interface DogMysqlRepositoryInterface {
    create(dogDataForMysql: dogMysqlDataType): dogMysqlDataType;
    update(dogDataForMysql: dogMysqlDataType): dogMysqlDataType;
    delete(dogDataForMysql: dogMysqlDataType): boolean;
    get(dogDataForMysql: dogMysqlDataType): dogMysqlDataType;
}
