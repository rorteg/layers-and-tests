import {request, Config, expect} from "../../helpers";

describe("Health Check Controller", () => {
    it("A json must be returned containing the 'alive' property as true.", 
    async () => {
        const response = await request.get(
            `/${Config.routePrefix}/public/health/alive`
        )
        .type('json')
        .send();

        expect(response.body.data.alive).to.equal(true);
    })
});
