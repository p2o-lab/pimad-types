/** MTPFreeze 01.2020 */
import {DataItem} from '../../..';

/* ServerAssembly */
export type ServerAssembly = {
    DataItem: DataItem<any,any>[];
};

export type OPCUAServer = ServerAssembly & {
    endpointUrl: string;
}
