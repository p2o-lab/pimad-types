/** MTPFreeze 01.2020 */
import {DataItem} from '../../..';

/* DataAssembly */
export type DataAssemblyDataItems = {
    TagName: DataItem<string>;
    TagDescription: DataItem<string>;
};

/* ActiveElement */
//#region ActiveElement

export type ActiveElementDataItems = DataAssemblyDataItems & OSLevelDataItems & WQCDataItems;

export type ActiveElementVlvDrvCommonDataItems = ActiveElementDataItems & OperationModeDataItems & SafePosDataItems & SafePosActDataItems & InterlockDataItems & ResetDataItems;

export type AnaVlvDataItems = ActiveElementVlvDrvCommonDataItems & SourceModeDataItems & SafePosEnDataItems & OpenDataItems & CloseDataItems & PosDataItems & {
    OpenAct: DataItem<boolean>;
    CloseAct: DataItem<boolean>;
};
export type MonAnaVlvDataItems = AnaVlvDataItems & FeedbackMonitoringDataItems & {
    PosReachedFbk: DataItem<boolean>;
    PosTolerance: DataItem<number>;
    MonPosTi: DataItem<number>;
    MonPosErr: DataItem<boolean>;
};

export type BinVlvDataItems = ActiveElementVlvDrvCommonDataItems & SafePosEnDataItems & OpenDataItems & CloseDataItems & {
    Ctrl: DataItem<boolean>;
};
export type MonBinVlvDataItems = BinVlvDataItems & FeedbackMonitoringDataItems;

export type BinDrvDataItems = ActiveElementVlvDrvCommonDataItems & FwdDataItems & RevDataItems & StopDataItems & TripDataItems;
export type MonBinDrvDataItems = BinDrvDataItems & FeedbackMonitoringDataItems;

export type AnaDrvDataItems = ActiveElementVlvDrvCommonDataItems & SourceModeDataItems & FwdDataItems & RevDataItems & StopDataItems & TripDataItems & RpmDataItems;
export type MonAnaDrvDataItems = AnaDrvDataItems & FeedbackMonitoringDataItems & RpmErrDataItems & RpmLimitMonitoringDataItems;

export type PIDCtrlDataItems = ActiveElementDataItems & ServiceSourceModeDataItems & OperationModeDataItems & MVDataItems & PVDataItems & SPDataItems & {
    P: DataItem<number>;
    Td: DataItem<number>;
    Ti: DataItem<number>;
};
export type SafePosDataItems = {
    SafePos: DataItem<boolean>;
};
export type SafePosEnDataItems = {
    SafePosEn: DataItem<boolean>;
};
export type SafePosActDataItems = {
    SafePosAct: DataItem<boolean>;
};
export type OpenDataItems = {
    OpenAut: DataItem<boolean>;
    OpenFbk: DataItem<boolean>;
    OpenFbkCalc: DataItem<boolean>;
    OpenOp: DataItem<boolean>;
}
export type CloseDataItems = {
    CloseAut: DataItem<boolean>;
    CloseFbk: DataItem<boolean>;
    CloseFbkCalc: DataItem<boolean>;
    CloseOp: DataItem<boolean>;
};
export type FwdDataItems = {
    FwdAut: DataItem<boolean>;
    FwdCtrl: DataItem<boolean>;
    FwdEn: DataItem<boolean>;
    FwdFbk: DataItem<boolean>;
    FwdFbkCalc: DataItem<boolean>;
    FwdOp: DataItem<boolean>;
};
export type RevDataItems = {
    RevAut: DataItem<boolean>;
    RevCtrl: DataItem<boolean>;
    RevEn: DataItem<boolean>;
    RevFbk: DataItem<boolean>;
    RevFbkCalc: DataItem<boolean>;
    RevOp: DataItem<boolean>;
};
export type PosDataItems = {
    Pos: DataItem<number>;
    PosFbk: DataItem<number>;
    PosFbkCalc: DataItem<boolean>;
    PosRbk: DataItem<number>;
    PosInt: DataItem<number>;
    PosMan: DataItem<number>;
    PosUnit: DataItem<number>;
    PosSclMin: DataItem<number>;
    PosSclMax:  DataItem<number>;
    PosMin: DataItem<number>;
    PosMax: DataItem<number>;
}
export type RpmDataItems = {
    Rpm: DataItem<number>;
    RpmFbk: DataItem<number>;
    RpmFbkCalc: DataItem<boolean>;
    RpmInt: DataItem<number>;
    RpmMan: DataItem<number>;
    RpmMax: DataItem<number>;
    RpmMin: DataItem<number>;
    RpmRbk: DataItem<number>;
    RpmSclMax: DataItem<number>;
    RpmSclMin: DataItem<number>;
    RpmUnit: DataItem<number>;
};
export type RpmErrDataItems = {
    RpmErr: DataItem<number>;
};
export type StopDataItems = {
    StopAut: DataItem<boolean>;
    StopOp: DataItem<boolean>;
};
export type TripDataItems = {
    Trip: DataItem<boolean>;
};
export type MVDataItems = MVScaleSettingsDataItems & MVUnitDataItems & MVValueLimitationDataItems & {
    MV: DataItem<number>;
    MVMan: DataItem<number>;
};
//#region MVSubtypes
export type MVScaleSettingsDataItems = {
    MVSclMax: DataItem<number>;
    MVSclMin: DataItem<number>;
};
export type MVValueLimitationDataItems = {
    MVMax: DataItem<number>;
    MVMin: DataItem<number>;
};
export type MVUnitDataItems = {
    MVUnit: DataItem<number>;
};
//#endregion
export type PVDataItems = PVScaleSettingsDataItems & PVUnitDataItems & {
    PV: DataItem<number>;
};
//#region PVSubtypes
export type PVScaleSettingsDataItems = {
    PVSclMax: DataItem<number>;
    PVSclMin: DataItem<number>;
};
export type PVUnitDataItems = {
    PVUnit: DataItem<number>;
};
//#endregion
export type SPDataItems = SPScaleSettingsDataItems & SPUnitDataItems & SPIntDataItems & SPManDataItems & {
    SP: DataItem<number>;
};
//#region SPSubtypes
export type SPUnitDataItems = {
    SPUnit: DataItem<number>;
};
export type SPScaleSettingsDataItems = {
    SPSclMax: DataItem<number>;
    SPSclMin: DataItem<number>;
};
export type SPIntDataItems = SPIntValueLimitationDataItems & {
    SPInt: DataItem<number>;
};
export type SPIntValueLimitationDataItems = {
    SPIntMax: DataItem<number>;
    SPIntMin: DataItem<number>;
};
export type SPManDataItems = SPManValueLimitationDataItems & {
    SPMan: DataItem<number>;
};
export type SPManValueLimitationDataItems = {
    SPManMax: DataItem<number>;
    SPManMin: DataItem<number>;
};
//#endregion
//#endregion

//Done
/* DiagnosticElement */
//#region DiagnosticElement
export type DiagnosticElementDataItems = DataAssemblyDataItems & WQCDataItems;
export type LockView4DataItems = DiagnosticElementDataItems & {
    Logic: DataItem<boolean>;
    In1: DataItem<boolean>;
    In1En: DataItem<boolean>;
    In1Inv: DataItem<boolean>;
    In1QC: DataItem<number>;
    In1Txt: DataItem<string>;
    In2: DataItem<boolean>;
    In2En: DataItem<boolean>;
    In2Inv: DataItem<boolean>;
    In2QC: DataItem<number>;
    In2Txt: DataItem<string>;
    In3: DataItem<boolean>;
    In3En: DataItem<boolean>;
    In3Inv: DataItem<boolean>;
    In3QC: DataItem<number>;
    In3Txt: DataItem<string>;
    In4: DataItem<boolean>;
    In4En: DataItem<boolean>;
    In4Inv: DataItem<boolean>;
    In4QC: DataItem<number>;
    In4Txt: DataItem<string>;
    Out: DataItem<boolean>;
    OutQC: DataItem<number>;
};
export type LockView8DataItems = LockView4DataItems & {
    In5: DataItem<boolean>;
    In5En: DataItem<boolean>;
    In5Inv: DataItem<boolean>;
    In5QC: DataItem<number>;
    In5Txt: DataItem<string>;
    In6: DataItem<boolean>;
    In6En: DataItem<boolean>;
    In6Inv: DataItem<boolean>;
    In6QC: DataItem<number>;
    In6Txt: DataItem<string>;
    In7: DataItem<boolean>;
    In7En: DataItem<boolean>;
    In7Inv: DataItem<boolean>;
    In7QC: DataItem<number>;
    In7Txt: DataItem<string>;
    In8: DataItem<boolean>;
    In8En: DataItem<boolean>;
    In8Inv: DataItem<boolean>;
    In8QC: DataItem<number>;
    In8Txt: DataItem<string>;
};
export type LockView16DataItems = LockView8DataItems & {
    In9: DataItem<boolean>;
    In9En: DataItem<boolean>;
    In9Inv: DataItem<boolean>;
    In9QC: DataItem<number>;
    In9Txt: DataItem<string>;
    In10: DataItem<boolean>;
    In10En: DataItem<boolean>;
    In10Inv: DataItem<boolean>;
    In10QC: DataItem<number>;
    In10Txt: DataItem<string>;
    In11: DataItem<boolean>;
    In11En: DataItem<boolean>;
    In11Inv: DataItem<boolean>;
    In11QC: DataItem<number>;
    In11Txt: DataItem<string>;
    In12: DataItem<boolean>;
    In12En: DataItem<boolean>;
    In12Inv: DataItem<boolean>;
    In12QC: DataItem<number>;
    In12Txt: DataItem<string>;
    In13: DataItem<boolean>;
    In13En: DataItem<boolean>;
    In13Inv: DataItem<boolean>;
    In13QC: DataItem<number>;
    In13Txt: DataItem<string>;
    In14: DataItem<boolean>;
    In14En: DataItem<boolean>;
    In14Inv: DataItem<boolean>;
    In14QC: DataItem<number>;
    In14Txt: DataItem<string>;
    In15: DataItem<boolean>;
    In15En: DataItem<boolean>;
    In15Inv: DataItem<boolean>;
    In15QC: DataItem<number>;
    In15Txt: DataItem<string>;
    In16: DataItem<boolean>;
    In16En: DataItem<boolean>;
    In16Inv: DataItem<boolean>;
    In16QC: DataItem<number>;
    In16Txt: DataItem<string>;
};
export type HealthStateViewDataItems = DiagnosticElementDataItems;
//#endregion

/* IndicatorElement */
//#region IndicatorElement
export type IndicatorElementDataItems = DataAssemblyDataItems & WQCDataItems;

export type BinViewDataItems = IndicatorElementDataItems & VDataItemsDataItems<number> & VStateDataItems;
export type BinMonDataItems = BinViewDataItems & OSLevelDataItems & VFlutDataItems;
export type VFlutDataItems = {
    VFlutEn: DataItem<boolean>;
    VFlutTi: DataItem<number>;
    VFlutCnt: DataItem<number>;
    VFlutAct: DataItem<boolean>;
};

export type DIntViewDataItems = IndicatorElementDataItems & VDataItemsDataItems<number> & VScaleSettingDataItems<number> & VUnitDataItems;
export type DintMonDataItems = DIntViewDataItems & OSLevelDataItems & VLimitMonitoringDataItems<number>;

export type AnaViewDataItems = IndicatorElementDataItems & VDataItemsDataItems<number> & VScaleSettingDataItems<number> & VUnitDataItems;
export type AnaMonDataItems = AnaViewDataItems & OSLevelDataItems & VLimitMonitoringDataItems<number>;

export type StringViewDataItems = IndicatorElementDataItems & {
    Text: DataItem<string>;
};
//#endregion

/* InputElement */
//#region InputElement
export type InputElementDataItems = DataAssemblyDataItems & WQCDataItems;
export type BinProcessValueInDataItems = InputElementDataItems & VExtDataItems<boolean> & VStateDataItems;
export type DIntProcessValueInDataItems = InputElementDataItems & VExtDataItems<number> & VScaleSettingDataItems<number> & VUnitDataItems;
export type AnaProcessValueInDataItems = InputElementDataItems & VExtDataItems<number> & VScaleSettingDataItems<number> & VUnitDataItems;
//#endregion

/* OperationElement */
//#region OperationElement
export type OperationElementDataItems = DataAssemblyDataItems & OSLevelDataItems;

export type BinManDataItems = OperationElementDataItems & VOutDataItems<boolean> & VStateDataItems & VManDataItems<boolean> & VRbkDataItems<boolean> & VFbkDataItems<boolean>;
export type BinManIntDataItems = BinManDataItems & SourceModeDataItems & VIntDataItems<boolean> & WQCDataItems;

export type DIntManDataItems = OperationElementDataItems & VOutDataItems<number> & VScaleSettingDataItems<number> & VUnitDataItems & VManDataItems<number> & VValueLimitationDataItems<number> & VRbkDataItems<number> & VFbkDataItems<number>;
export type DIntManIntDataItems = DIntManDataItems & SourceModeDataItems & VIntDataItems<number> & WQCDataItems;

export type AnaManDataItems = OperationElementDataItems & VOutDataItems<number> & VScaleSettingDataItems<number> & VUnitDataItems & VManDataItems<number> & VValueLimitationDataItems<number> & VRbkDataItems<number> & VFbkDataItems<number>;
export type AnaManIntDataItems = AnaManDataItems & SourceModeDataItems & VIntDataItems<number> & WQCDataItems;

export type ServiceOperationModeDataItems = OperationModeDataItems; //Confused why an extra name is introduced in VDI 2658-4
export type ServiceCommonDataItems<T> = OperationElementDataItems & ServiceSourceModeDataItems & ServiceOperationModeDataItems & SyncDataItems & WQCDataItems & VExtDataItems<T> & VOpDataItems<T> & VIntDataItems<T> & VReqDataItems<T> & VOutDataItems<T> & VFbkDataItems<T>;

export type AnaServParamDataItems = ServiceCommonDataItems<number> & VScaleSettingDataItems<number> & VUnitDataItems & VValueLimitationDataItems<number>;
export type BinServParamDataItems = ServiceCommonDataItems<boolean> & VStateDataItems;
export type DIntServParamDataItems = ServiceCommonDataItems<number> & VScaleSettingDataItems<number> & VUnitDataItems & VValueLimitationDataItems<number>;
export type StringServParamDataItems = ServiceCommonDataItems<string>;

/* ServiceControl */
export type ServiceControlDataItems = DataAssemblyDataItems & WQCDataItems & OSLevelDataItems & OperationModeDataItems & ServiceSourceModeDataItems & {
    CommandOp: DataItem<number>;
    CommandInt: DataItem<number>;
    CommandExt: DataItem<number>;
    CommandEn: DataItem<number>;
    ProcedureOp: DataItem<number>;
    ProcedureInt: DataItem<number>;
    ProcedureExt: DataItem<number>;
    ProcedureCur: DataItem<number>;
    ProcedureReq: DataItem<number>;
    StateCur: DataItem<number>;
    InteractQuestionID: DataItem<number>;
    InteractAnswerID: DataItem<number>;
    PostTextId: DataItem<number>;
};

//BasicDataTypes
export type InterlockDataItems = {
    PermEn: DataItem<boolean>;
    Permit: DataItem<boolean>;
    IntlEn: DataItem<boolean>;
    Interlock: DataItem<boolean>;
    ProtEn: DataItem<boolean>;
    Protect: DataItem<boolean>;
}
export type FeedbackMonitoringDataItems = {
    MonEn: DataItem<boolean>;
    MonSafePos: DataItem<boolean>;
    MonStatErr: DataItem<boolean>;
    MonDynErr: DataItem<boolean>;
    MonStatTi: DataItem<number>;
    MonDynTi: DataItem<number>;
};
export type OSLevelDataItems = {
    OSLevel: DataItem<number>;
};
export type WQCDataItems = {
    WQC: DataItem<number>;
};
export type ResetDataItems = {
    ResetOp: DataItem<boolean>;
    ResetAut: DataItem<boolean>;
}

export type SyncDataItems ={
    Sync: DataItem<boolean>;
};

//#region SourceModeSubtypes
export type SrcChannelDataItems = {
    SrcChannel: DataItem<boolean>;
};
export type SrcExtDataItems = {
    SrcExtAct: DataItem<boolean>;
    SrcExtAut: DataItem<boolean>;
    SrcExtOp: DataItem<boolean>;
};
export type SrcIntDataItems = {
    SrcIntAct: DataItem<boolean>;
    SrcIntAut: DataItem<boolean>;
    SrcIntOp: DataItem<boolean>;
};
export type SrcManDataItems = {
    SrcManAct: DataItem<boolean>;
    SrcManAut: DataItem<boolean>;
    SrcManOp: DataItem<boolean>;
};
//#endregion
export type SourceModeDataItems = SrcChannelDataItems & SrcIntDataItems & SrcManDataItems; //type SrcChannelAndIntAndMan = SrcChannel & SrcInt & SrcMan;
export type ServiceSourceModeDataItems = SrcChannelDataItems & SrcIntDataItems & SrcExtDataItems; //type SrcChannelAndExtAndInt = SrcChannel & SrcExt & SrcInt;

//#region StateSubtypes
export type StateChannelDataItems = {
    StateChannel: DataItem<boolean>;
};
export type StateAutDataItems = {
    StateAutAct: DataItem<boolean>;
    StateAutAut: DataItem<boolean>;
    StateAutOp: DataItem<boolean>;
};
export type StateOffDataItems = {
    StateOffAct: DataItem<boolean>;
    StateOffAut: DataItem<boolean>;
    StateOffOp: DataItem<boolean>;
};
export type StateOpDataItems = {
    StateOpAct: DataItem<boolean>;
    StateOpAut: DataItem<boolean>;
    StateOpOp: DataItem<boolean>;
};
//#endregion
export type OperationModeDataItems = StateChannelDataItems & StateAutDataItems & StateOffDataItems & StateOpDataItems;

export type VDataItemsDataItems<T> = {
    V: DataItem<T>;
};
export type VManDataItems<T> = {
    VMan: DataItem<T>;
};
export type VExtDataItems<T> = {
    VExt: DataItem<T>;
};
export type VOpDataItems<T> = {
    VOp: DataItem<T>;
};
export type VIntDataItems<T> = {
    VInt: DataItem<T>;
};
export type VReqDataItems<T> = {
    VReq: DataItem<T>;
};
export type VOutDataItems<T> = {
    VOut: DataItem<T>;
};
export type VFbkDataItems<T> = {
    VFbk: DataItem<T>;
};
export type VRbkDataItems<T> = {
    VRbk: DataItem<T>;
};
export type VStateDataItems = {
    VState0: DataItem<string>;
    VState1: DataItem<string>;
};
export type VUnitDataItems = {
    VUnit: DataItem<number>;
};
export type VScaleSettingDataItems<T> ={
    VSclMin: DataItem<T>;
    VSclMax: DataItem<T>;
};
export type VValueLimitationDataItems<T>={
    VMin: DataItem<T>;
    VMax: DataItem<T>;
};

//#region VLimitMonitoringSubtypes
export type VAHDataItems<T> = {
    VAHEn: DataItem<boolean>;
    VAHLim: DataItem<T>;
    VAHAct: DataItem<boolean>;
};
export type VWHDataItems<T> = {
    VWHEn: DataItem<boolean>;
    VWHLim: DataItem<T>;
    VWHAct: DataItem<boolean>;
};
export type VTHDataItems<T> = {
    VTHEn: DataItem<boolean>;
    VTHLim: DataItem<T>;
    VTHAct: DataItem<boolean>;
};
export type VTLDataItems<T> = {
    VTLEn: DataItem<boolean>;
    VTLLim: DataItem<T>;
    VTLAct: DataItem<boolean>;
};
export type VWLDataItems<T> = {
    VWLEn: DataItem<boolean>;
    VWLLim: DataItem<T>;
    VWLAct: DataItem<boolean>;
};
export type VALDataItems<T> = {
    VALEn: DataItem<boolean>;
    VALLim: DataItem<T>;
    VALAct: DataItem<boolean>;
};
//#endregion
export type VLimitMonitoringDataItems<T>= VAHDataItems<T> & VWHDataItems<T> & VTHDataItems<T> & VTLDataItems<T> & VWLDataItems<T> & VALDataItems<T>;
//#region RpmLimitMonitoringSubtypes
export type RpmAHDataItems = {
    RpmAHEn: DataItem<boolean>;
    RpmAHLim: DataItem<number>;
    RpmAHAct: DataItem<boolean>;
};
export type RpmALDataItems = {
    RpmALEn: DataItem<boolean>;
    RpmALLim: DataItem<number>;
    RpmALAct: DataItem<boolean>;
};
//#endregion
export type RpmLimitMonitoringDataItems = RpmAHDataItems & RpmALDataItems;
