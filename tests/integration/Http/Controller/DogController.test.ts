import { request, expect, config, container } from "@madeiramadeirabr/service-dev-tools";
import { injectable, decorate } from "inversify";
import { DogRepositoryStub } from "../../Stub/DogRepositoryStub";

describe("Dog Controller", () => {
    before(() => {
        container.snapshot();
        
        decorate(injectable(), DogRepositoryStub);
        container.rebind("DogRepositoryInterface").to(DogRepositoryStub);
    });

    after(() => {
        container.restore();
    });

    it("A json must be returned containing the 'dog' entity created.", 
    async () => {
        const response = await request.post(
            `/${config.routePrefix}/public/dog/`
        )
        .type('json')
        .send({
            "dogPayloadName": "Vira"
        })
        .expect(201);

        expect(response.body.data).to.eql({"id": "testId", "name": "Vira"});
    })
});
