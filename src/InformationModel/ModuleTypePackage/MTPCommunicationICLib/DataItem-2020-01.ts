/** MTPFreeze 01.2020 */

export type DataItem<A,T> = {
    defaultValue: T;
    access: A; // Blatt 1 - Seite 22
}
// TODO: How to use extends with generic?
export type OPCUAItem = DataItem<Access, any> & {
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
};
