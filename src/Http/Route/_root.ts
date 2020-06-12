import {HttpMethod} from "@madeiramadeirabr/service-codebase-core";
import * as express from 'express';
import { HealthController } from "../Controller/HealthController";

export const _root = [
    {
        method: HttpMethod.GET,
        path: '/health/alive',
        public: true,
        handler: (
            request: express.Request,
            response: express.Response
        ) =>
            new HealthController().alive(request, response)
    }
];
