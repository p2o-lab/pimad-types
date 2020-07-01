/** MTPFreeze 01.2020 */
import {DataAssembly, ServerAssembly, ServiceSet, TextSet, HMISet} from '../../..';

export type ModuleTypePackage = {
    CommunicationSet: CommunicationSet;
    ServiceSet: ServiceSet;
    TextSet: TextSet;
    HMISet: HMISet;
};

/* MTPSet */
export type MTPSet = {};

/* CommunicationSet */
export type CommunicationSet = MTPSet &{
    InstanceList: InstanceList;
    SourceList: SourceList;
};

export type InstanceList = {
    DataAssembly: DataAssembly[];
};

export type SourceList = {
    ServerAssembly: ServerAssembly[];
};

/* LinkedObject */
export type LinkedObject = {
    RefID: string;
};
