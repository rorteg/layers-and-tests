import * as express from 'express';
import { HttpStatusType } from "@madeiramadeirabr/service-codebase-core";
import getDecorators from "inversify-inject-decorators";
import { container } from "../../ServiceContainer/Container";
import { DogServiceInterface } from '../../Service/DogServiceInterface';
const { lazyInject } = getDecorators(container);

export class DogController {

    @lazyInject("DogServiceInterface")
    private dogService: DogServiceInterface;

    async create(request: express.Request, response: express.Response) {
        const dog = await this.dogService.create(request.body);
        response.status(HttpStatusType.CREATED).json(dog);
    }
}
