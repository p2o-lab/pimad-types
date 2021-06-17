/** MTPFreeze 01.2020 */
import {LinkedObject, Access, DataItem, InformationFlowConnector, MassFlowConnector} from '../../..';

export type HMISet = {
    Picture: Picture;
};

export type Picture = Dimension & {
    HierarchyLevel: string;
    TopologyObject: TopologyObject[];
    VisualObject: VisualObject[];
    Connection: Connection[]
};

export type TopologyObject = XYCoordinates & {
    PortObject: Array<LogicalPort | MeasurementPoint | Nozzle>;
};

export type Junction = TopologyObject & {};

export type Termination = {
    RefID: string
};

export type Source = Termination;
export type Sink = Termination;

export type VisualObject = LinkedObject & Dimension & XYCoordinates & {
    ZIndex: number;
    Rotation: number;
    eClassVersion: string
    eClassClassificationClass: string
    eClassIRDI: string
    PortObject: Array<LogicalPort | MeasurementPoint | Nozzle>;
};

type Dimension = {
    Width: number;
    Height: number;
};

type XYCoordinates = {
    X: number;
    Y: number;
};

export type Connection = {
    Edgepath: string; //StringChain of path separated by ; e.g. 233,-1; 12,-1;
};

export type FunctionLine = Connection & {
    Start: LogicalPort;
    End: LogicalPort;
};

export type MeasurementLine = Connection & {
    Start: MeasurementPoint;
    End: MeasurementPoint;
};

export type Pipe = Connection & {
    Directed: boolean;
    Nozzle1: Nozzle;
    Nozzle2: Nozzle;
};

export type PortObject = XYCoordinates;

export type LogicalPort = PortObject & {
    InformationFlowConnector: InformationFlowConnector;
};

export type MeasurementPoint = PortObject & {
    InformationFlowConnector: InformationFlowConnector;
};

export type Nozzle = PortObject & {
    MassFlowConnector: MassFlowConnector;
};
