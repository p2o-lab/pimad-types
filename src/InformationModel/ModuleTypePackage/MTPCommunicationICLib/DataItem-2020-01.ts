/** MTPFreeze 01.2020 */

// TODO: How to use the power of generics?
export interface DataItem {
    Access: Access; // Blatt 1 - Seite 22
}

export interface OPCUAItem extends DataItem {
    Identifier: String;
    Namespace: String;
}

enum Access {
    Read,
    ReadWrite
}
