declare module 'AML'{
    type Base = {
        Name: string;
        ID: string;
    }

    type BaseAML = Base & {
        Version: string;
    }

    export type InstanceHierarchy = BaseAML & {
        InternalElement: (ModuleTypePackage | Picture | Service)[];
    }

    export type ModuleTypePackage = BaseAML & {
        InternalElement: object;
    }

    export type Picture = BaseAML & {
        InternalElement: object;
    }

    export type Service = BaseAML & {
        InternalElement: object[];
    }

    // TODO: Generics + ExternalInterface == undefined?
    export type DataItemSourceList = Base & {
        RefBaseSystemUnitPath: string;
        Attribute: Attribute;
        ExternalInterface: DataItemInstanceList;
    }

    export type DataItemInstanceList = Base & {
        RefBaseSystemUnitPath: string;
        Attribute: Attribute[];
    }

    export type Attribute = {
        Name: string;
        AttributeDataType: string;
        Value: string;
    }

}
