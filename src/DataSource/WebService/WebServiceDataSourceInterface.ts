import { DataSourceInterface } from "../DataSourceInterface";
import { HttpClientInterface } from "@madeiramadeirabr/http-client";

export interface WebServiceDataSourceInterface extends DataSourceInterface {
    getSource(): HttpClientInterface;
}
