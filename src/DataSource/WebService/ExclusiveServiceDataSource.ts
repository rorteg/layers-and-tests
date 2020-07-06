import { WebServiceDataSourceInterface } from "./WebServiceDataSourceInterface";
import HttpClient, { HttpClientInterface } from "@madeiramadeirabr/http-client";

export class ExclusiveServiceDataSource implements WebServiceDataSourceInterface {
    private client: HttpClientInterface;

    constructor() {
        this.client = new HttpClient()
            .setBaseUrl("")
            .setHeaders({

            })
            .setServiceName("ExclusiveServiceDataSource");
    }

    getSource(): HttpClientInterface {
        return this.client;
    }

}