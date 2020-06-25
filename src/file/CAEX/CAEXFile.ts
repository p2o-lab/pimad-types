import {InstanceHierarchy} from '../../InformationModel/AutomationML/AML-2.15';

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