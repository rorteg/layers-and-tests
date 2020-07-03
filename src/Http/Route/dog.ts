import {HttpMethod} from "@madeiramadeirabr/service-codebase-core";
import * as express from 'express';
import { DogController } from "../Controller/DogController";

export const dog = [
    {
        method: HttpMethod.POST,
        path: '/',
        public: true,
        handler: (
            request: express.Request,
            response: express.Response
        ) =>
            new DogController().create(request, response)
    }
];
