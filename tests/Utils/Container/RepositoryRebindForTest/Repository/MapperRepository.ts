import {MapperRepositoryInterface} from "../../../../../src/Repository/MapperRepositoryInterface";
import {MapperInterface} from "../../../../../src/Entity/Mapper/MapperInterface";
import {Stub} from "../../../Stub";
import {injectable} from "inversify";

export const TEST_FUNCTIONALITY = "MappingFunctionality";
const TEST_NAME: string = "CREATED_ORDER";
const TEST_FILE: string = TEST_FUNCTIONALITY + '/' + TEST_NAME + '.json';

@injectable()
export class MapperRepository implements MapperRepositoryInterface {
    async getMapperById(id: string): Promise<any> {
        return await Stub.getProviderFile(TEST_FILE);
    }

    async getMappersByTrigger(key: string, value: string): Promise<any> {
        const mapper = await Stub.getProviderFile(TEST_FILE);
        return [mapper];
    }

    register(mapper: MapperInterface): Promise<any> {
        return undefined;
    }

    deleteAll(): Promise<boolean> {
        return undefined;
    }

}
