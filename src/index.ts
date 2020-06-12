/* istanbul ignore file */
import "reflect-metadata";
if (process.env.APPLICATION_ENV === 'production') {
    require('newrelic');
}
import {App} from "@madeiramadeirabr/service-codebase-core";
import Config from "./Config/Config";
import * as routes from './Http/Route';

const app = new App()
    .setRouteConfig({routes: routes, prefix: 'skeleton'});
    // .setMiddleware(Object.values(middleware));

app.start().listen(Config.server.port, () => {
    console.log(`Server running on port ${Config.server.port}`);
});
