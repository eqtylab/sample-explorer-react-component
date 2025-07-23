import { buildNodeConfig, ExplorerConfig, NodeConfig } from '@eqtylab/explorer';

import appConfigRaw from "./config.json";
const appConfig = appConfigRaw as JsonConfig;

export type JsonConfig = {
    nodeOverrides?: { [key: string]: Partial<NodeConfig> };
};

export function loadConfig(): ExplorerConfig {
    const nodesConfig = buildNodeConfig(appConfig.nodeOverrides);

    return {
        ...nodesConfig,
    };
}

