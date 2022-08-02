/** MTPFreeze 01.2020 */

export type DataItem<T> = {
    defaultValue: T;
    access: Access; // Blatt 1 - Seite 22
    value: T;
}

export type OPCUAItem<T> = DataItem<T> & {
    nodeId: string;
    namespaceUrl: string;
    nodeIdType: NodeIdTypeEnum;
}

export enum Access {
    NoAccess = 0,
    ReadAccess = 1,
    WriteAccess = 2,
    ReadWriteAccess = 3
}

export enum NodeIdTypeEnum {
    STRING = 's',
    NUMERIC = 'n',
    GUID = 'g',
    OPAQUE = 'o'
}
