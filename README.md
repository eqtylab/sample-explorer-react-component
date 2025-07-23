# Custom Config
```
type NodeConfig = {
    displayType: string; <- This is the text displayed in the node
    color: string; <- color of the node icon, and sidebar
    sidebarHeaderTextColor: string; <- Font color of the sidebar header
    shape: NodeShape; <- rounded or squared node shape
    icon: string; <- Icon to diplay in node. See options below
    component: NodeUIComponent; <- Simple computation node, or detailed custom node
    size: NodeSize; <- size in px of the node
};

type NodeShape = "round" | "square";

type NodeUIComponent = "CustomNode" | "ComputationNode";

type NodeSize = {
    width: number; // in px
    height: number; // in px
}; // default is { width: 200, height: 50 }
```


icon - one of:
- AttributionIcon
- BenchmarkIcon
- BenchmarkResultIcon
- CertificateIcon
- ComputationIcon
- CodeIcon
- DatabaseIcon
- DataIcon
- DatasetIcon
- DeltaLakeIcon
- DocumentIcon
- MediaIcon
- ModelIcon
- TeamIcon
- TokenIcon
