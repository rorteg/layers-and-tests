/* istanbul ignore file */
import {ConfigManager} from "@madeiramadeirabr/service-codebase-core";
import * as Env from "./Env";
import {ApplicationEnvInterface} from "./Env/ApplicationEnvInterface";

ConfigManager.mergeConfig(Env[process.env.APPLICATION_ENV || "development"]);

export default ConfigManager.getConfig<ApplicationEnvInterface>() as ApplicationEnvInterface;
