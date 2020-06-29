/** MTPFreeze 01.2020 */
import {DataItem} from '../MTPCommunicationICLib/DataItem-2020-01';

/* ServerAssembly */
export interface ServerAssembly {
    DataItemList: DataItem<any, any>[];
};

export interface OPCUAServer extends ServerAssembly{
    endpointUrl: string;
}
