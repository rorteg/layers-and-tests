import {CallServiceInterface} from "../../../../../../../src/Service/CallServices/CallServiceInterface";
import {CallServiceExternalFunctionInterface}
    from "../../../../../../../src/Service/CallServices/AWS/CallServiceExternalFunctionInterface";
import {injectable} from "inversify";
import {CallServiceAbstract} from "../../../../../../../src/Service/CallServices/CallServiceAbstract";
import {FakeFunctionManager} from "../../../../../FakeFunctions/FakeFunctionManager";

@injectable()
export class CallServiceLambdaService extends CallServiceAbstract
    implements CallServiceExternalFunctionInterface, CallServiceInterface {

    async invoke(
        payload: any,
        params: any
    ): Promise<any> {
        return FakeFunctionManager.execFunction(payload, params);
    }

}
