/** MTPFreeze 01.2020 */
import {DataAssembly} from '../MTPDataObjectSUCLib/DataAssembly-2020-01';
import {ServerAssembly} from '../MTPCommunicationSUCLib/ServerAssembly-2020-01';
import {ServiceSet} from '../MTPServiceSUCLib/ServiceSet-2020-01';
import {TextSet} from '../MTPTextSUCLib/TextSet-2020-01';
import {HMISet} from '../MTPHMISUCLib/HMISet-2020-01';

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
