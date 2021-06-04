// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace AML {
    export type Base = {
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
        InternalElement: ServiceInternalElement[];
    }
    export type ServiceInternalElement = Base & {
        Attribute: Attribute[];
        InternalElement: DataItemInstanceList[];
        RefBaseSystemUnitPath: string;
    }
    // TODO: Generics + ExternalInterface == undefined?
    export type DataItemSourceList = Base & {
        RefBaseSystemUnitPath: string;
        Attribute: Attribute;
        ExternalInterface: DataItemSourceListExternalInterface[];
    }

    export type DataItemSourceListExternalInterface = Base & {
        RefBaseClassPath: string;
        Attribute: Attribute[];
    }

    export type DataItemInstanceList = Base & {
        RefBaseSystemUnitPath: string;
        Attribute: Attribute[];
    }

    export type Attribute = {
        Name: string;
        AttributeDataType: string;
        Value: string;
        DefaultValue: string;
        Description: string;
    }
}
