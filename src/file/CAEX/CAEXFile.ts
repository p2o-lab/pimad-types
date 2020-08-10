// Namespace: AML
import {AML} from '../..';
import InstanceHierarchy = AML.InstanceHierarchy;

export type CAEXFile = {
    FileName: string;
    SchemaVersion: string;
    'xmlns:xsi': string;
    'xsi:noNamespaceSchemaLocation': string;
    AdditionalInformation: object[];
    ExternalReference: object[];
    InstanceHierarchy: InstanceHierarchy[];
    InterfaceClassLib: object[];
    RoleClassLib: object;
    SystemUnitClassLib: object[];
};
