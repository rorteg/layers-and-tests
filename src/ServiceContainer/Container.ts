import {serviceContainer as container} from "@madeiramadeirabr/service-codebase-core";
import * as dependencyProviders from "./Provider";

container.load(...Object.values(dependencyProviders));

export {container};
