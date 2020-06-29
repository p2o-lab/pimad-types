type BaseAML = {
    Name: string;
    ID: string;
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

