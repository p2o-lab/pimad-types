/** MTPFreeze 01.2020 */

export interface DataItem<A,T> {
    defaultValue: T;
    access: A; // Blatt 1 - Seite 22
}
// TODO: How to use extends with generic?
export interface OPCUAItem extends DataItem<Access, any> {
    nodeId: string;
    namespaceUrl: string;
    nodeIdType: NodeIdTypeEnum;
}

export enum Access {
    ReadAccess,
    ReadWriteAccess,
    MTP
}
export enum NodeIdTypeEnum {
    STRING = 's',
    NUMERIC = 'n',
    GUID = 'g',
    OPAQUE = 'o'
};
