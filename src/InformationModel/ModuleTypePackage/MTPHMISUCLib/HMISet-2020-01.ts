/** MTPFreeze 01.2020 */
import {LinkedObject, Access, DataItem, InformationFlowConnector, MassFlowConnector} from '../../..';

export type HMISet = {
    Picture: Picture;
};

//TODO:Check Datatypes
export type Picture = {
    Width: DataItem<Access.ReadAccess, number>;
    Height: DataItem<Access.ReadAccess, number>;
    HierarchyLevel: DataItem<Access.ReadAccess, string>;
    TopologyObject: TopologyObject[];
};

export type TopologyObject = XYCoordinates & {
    PortObject: Array<LogicalPort | MeasurementPoint | Nozzle>;
};

export type Junction = TopologyObject & {};

export type Termination = {
    RefID: DataItem<Access.ReadAccess, string>;
};
export type Source = Termination;
export type Sink = Termination;

//TODO:Check Datatypes
export type VisualObject = LinkedObject & Dimension & XYCoordinates & {
    ZIndex: DataItem<Access.ReadAccess, number>;
    Rotation: DataItem<Access.ReadAccess, number>;
    eClassVersion: DataItem<Access.ReadAccess, string>;
    eClassClassificationClass: DataItem<Access.ReadAccess, string>;
    eClassIRDI: DataItem<Access.ReadAccess, string>;
    PortObject: Array<LogicalPort | MeasurementPoint | Nozzle>;
};
type Dimension = {
    Width: DataItem<Access.ReadAccess, number>;
    Height: DataItem<Access.ReadAccess, number>;
};
type XYCoordinates = {
    X: DataItem<Access.ReadAccess, number>;
    Y: DataItem<Access.ReadAccess, number>;
};

export type Connection = {
    Edgepath: DataItem<Access.ReadAccess, string>; //StringChain of path separated by ; e.g. 233,-1; 12,-1;
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
    Directed: DataItem<Access.ReadAccess, boolean>;
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
