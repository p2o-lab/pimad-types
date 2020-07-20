/** MTPFreeze 01.2020 */
import {DataAssembly, ServerAssembly, ServiceSet, TextSet, HMISet} from '../../..';
import {Base, DataItemInstanceList, DataItemSourceList} from 'AML';

export type ModuleTypePackage = {
    CommunicationSet: Array <InstanceList | SourceList>;
    ServiceSet: ServiceSet;
    TextSet: TextSet;
    HMISet: HMISet;
};

/* MTPSet */
export type MTPSet = {};

/* CommunicationSet */
type CommunicationSet = MTPSet & Base & {
    RefBaseSystemUnitClass: string;
};

export type InstanceList = CommunicationSet & {
    InternalElement: DataItemInstanceList[];
};

export type SourceList = {
    InternalElement: DataItemSourceList;
};

/* LinkedObject */
export type LinkedObject = {
    RefID: string;
};
