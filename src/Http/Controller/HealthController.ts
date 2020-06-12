import * as express from 'express';
import {HttpStatusType} from "@madeiramadeirabr/service-codebase-core";

export class HealthController {

    async alive(request: express.Request, response: express.Response) {
        response.status(HttpStatusType.OK).json({
            applicationEnv: process.env.APPLICATION_ENV,
            query: request.query,
            body: request.body,
            alive: true
        });
    }
}
