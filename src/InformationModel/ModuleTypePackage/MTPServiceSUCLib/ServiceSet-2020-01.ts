/** MTPFreeze 01.2020 */
import {LinkedObject, DataItem} from '../../..';

/* ServiceSet */
export type ServiceSet = {
    Service: Service[];
    ServiceRelation: ServiceRelation[];
};

export type ServiceRelation = {
    SourceServiceID: string; //TODO: unclear datatype
    SourceProcedureID: string; //TODO: unclear datatype
    SourceValue: string; //TODO: unclear datatype
    TargetProcedureID: string; //TODO: unclear datatype
    TargetValue: string; //TODO: unclear datatype
};

export type ServiceEnable = ServiceRelation;
export type ServiceDisable = ServiceRelation;
export type ServiceSynchronisation = ServiceRelation;
export type ServiceForce = ServiceRelation;

export type Service = LinkedObject & {
    ConfigurationParameter: ConfigurationParameter[];
    ServiceProcedure: ServiceProcedure[];
};

export type ServiceProcedure = LinkedObject & {
    IsSelfCompleting: DataItem<boolean>;
    ProcedureId: DataItem<number>;
    IsDefault: DataItem<boolean>;
};

export type ServiceParameter = LinkedObject & {};

export type ConfigurationParameter = ServiceParameter & {};
export type ProcedureParameter = ServiceParameter & {};
export type ProcessValueIn = ServiceParameter & {};
export type ReportValue = ServiceParameter & {};
export type ProcessValueOut = ServiceParameter & {};
