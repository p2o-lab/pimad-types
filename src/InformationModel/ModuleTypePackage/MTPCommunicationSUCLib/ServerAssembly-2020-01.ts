/** MTPFreeze 01.2020 */
import {DataItem} from '../../..';

/* ServerAssembly */
export type ServerAssembly = {
    DataItem: DataItem<number | string | boolean>[];
};

export type OPCUAServer = ServerAssembly & {
    endpointUrl: string;
}
