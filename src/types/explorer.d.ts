declare module '@eqtylab/explorer' {
  import { ComponentType } from 'react';
  
  export interface ExplorerConfig {
    nodes: Map<string, any>;
    fallbackConfig: any;
  }
  
  export interface LineageExplorerProps {
    manifestJson: any;
    config: ExplorerConfig;
    customIcons?: Record<string, string>;
  }
  
  export const LineageExplorer: ComponentType<LineageExplorerProps>;
  export function buildNodeConfig(nodeOverrides?: { [key: string]: any }): ExplorerConfig;
}