import {App, HttpMethod} from "@madeiramadeirabr/service-codebase-core";
import * as routes from '../../../../src/Http/Route';
import {agent as request} from 'supertest';
import {container} from "../../../Utils/Container/Container";
import {expect} from "chai";

container.load();

describe("Health Check Controller", () => {
    it("A json must be returned containing the 'alive' property as true.", 
    async () => {
        const app = await new App()
        .setRouteConfig({routes: routes, prefix: 'skeleton'})
        .start();

        const response = await request(app).get("/skeleton/public/health/alive")
        .type('json')
        .send();

        expect(response.body.data.alive).to.equal(true);

        await app.close();
    })
});
