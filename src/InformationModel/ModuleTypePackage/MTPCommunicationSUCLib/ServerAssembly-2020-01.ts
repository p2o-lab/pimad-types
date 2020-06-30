/** MTPFreeze 01.2020 */
import {DataItem} from '../MTPCommunicationICLib/DataItem-2020-01';

/* ServerAssembly */
export type ServerAssembly = {
    DataItem: DataItem<any,any>[];
};

export type OPCUAServer = ServerAssembly & {
    endpointUrl: string;
}
