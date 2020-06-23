process.env.APPLICATION_ENV = 'test';

import * as supertest from "supertest";
import * as chai from "chai";
import {App} from "@madeiramadeirabr/service-codebase-core";
import * as routes from '../../src/Http/Route';
import Config from "../../src/Config/Config";
import {container} from "../Utils/Container/Container";

container.load();

const app = new App()
    .setRouteConfig({routes, prefix: Config.routePrefix})
    .start();
const request = supertest(app);
const expect = chai.expect;

export {app, request, expect, Config};