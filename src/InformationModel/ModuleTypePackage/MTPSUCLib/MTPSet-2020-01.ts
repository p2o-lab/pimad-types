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

/**
 * MTPSUCLib/CommunicationSet
 */
type CommunicationSet = MTPSet & Base & {
    RefBaseSystemUnitPath: string;
};
/**
 * MTPSUCLib/CommunicationSet/InstanceList
 */
export type InstanceList = CommunicationSet & {
    InternalElement: DataItemInstanceList[];
};
/**
 * MTPSUCLib/CommunicationSet/SourceList
 */
export type SourceList = CommunicationSet & {
    InternalElement: DataItemSourceList[];
};

/* LinkedObject */
export type LinkedObject = {
    RefID: string;
};
