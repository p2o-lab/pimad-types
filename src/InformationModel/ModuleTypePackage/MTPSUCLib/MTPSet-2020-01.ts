/** MTPFreeze 01.2020 */
import {DataAssembly} from '../MTPDataObjectSUCLib/DataAssembly-2020-01';
import {ServerAssembly} from '../MTPCommunicationSUCLib/ServerAssembly-2020-01';

/* MTPSet */
export interface MTPSet {
    CommunicationSet: CommunicationSet; //TODO: check if MTP set definition is correct
};

export interface CommunicationSet {
    InstanceList: InstanceList;
    SourceList: SourceList;
};

export interface InstanceList {
    DataAssembly: DataAssembly[];
};

export interface SourceList {
    ServerAssembly: ServerAssembly[];
};

/* LinkedObject */
export interface LinkedObject {
    RefID: string; //TODO: check that
};
