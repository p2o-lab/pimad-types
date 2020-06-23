/** MTPFreeze 01.2020 */

export interface DataItem<A,T> {
    defaultValue: T;
    access: A; // Blatt 1 - Seite 22
}
// TODO: How to use extends with generic?
export interface OPCUAItem extends DataItem<Access, any> {
    Identifier: string;
    Namespace: string;
}

export enum Access {
    ReadAccess,
    ReadWriteAccess,
    MTP
}
