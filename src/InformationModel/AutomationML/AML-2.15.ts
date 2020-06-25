type BaseAML = {
    Name: String;
    ID: String;
    Version: String;
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

