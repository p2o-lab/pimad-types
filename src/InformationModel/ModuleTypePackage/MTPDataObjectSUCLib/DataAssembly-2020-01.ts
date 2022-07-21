/** MTPFreeze 01.2020 */
import {DataItem} from '../../..';

/* DataAssembly */
export type DataAssembly = {
    TagName: DataItem<string>;
    TagDescription: DataItem<string>;
};

/* ActiveElement */
//#region ActiveElement

export type ActiveElement = DataAssembly & OSLevel & WQC;

type ActiveElementVlvDrvCommon = ActiveElement & OperationMode & SafePos & Interlock & Reset;

export type AnaVlv = ActiveElementVlvDrvCommon & SourceMode & SafePosEn & SafePosAct & Open & Close & Pos & {
    OpenAct: DataItem<boolean>;
    CloseAct: DataItem<boolean>;
};
export type MonAnaVlv = AnaVlv & FeedbackMonitoring & {
    PosReachedFbk: DataItem<boolean>;
    PosTolerance: DataItem<number>;
    MonPosTi: DataItem<number>;
    MonPosErr: DataItem<boolean>;
};

export type BinVlv = ActiveElementVlvDrvCommon & SafePosEn & Open & Close & {
    Ctrl: DataItem<boolean>;
};
export type MonBinVlv = BinVlv & FeedbackMonitoring;

export type BinDrv = ActiveElementVlvDrvCommon & Fwd & Rev & Stop & Trip;
export type MonBinDrv = BinDrv & FeedbackMonitoring;

export type AnaDrv = ActiveElementVlvDrvCommon & SourceMode & Fwd & Rev & Stop & Trip & Rpm  ;
export type MonAnaDrv = AnaDrv & FeedbackMonitoring & RpmErr & RpmLimitMonitoring;

export type PIDCtrl = ActiveElement & ServiceSourceMode & OperationMode & MV & PV & SP & {
    P: DataItem<number>;
    Td: DataItem<number>;
    Ti: DataItem<number>;
};
type SafePos = {
    SafePos: DataItem<boolean>;
};
type SafePosEn = {
    SafePosEn: DataItem<boolean>;
};
type SafePosAct = {
    SafePosAct: DataItem<boolean>;
};
type Open = {
    OpenAut: DataItem<boolean>;
    OpenFbk: DataItem<boolean>;
    OpenFbkCalc: DataItem<boolean>;
    OpenOp: DataItem<boolean>;
}
type Close = {
    CloseAut: DataItem<boolean>;
    CloseFbk: DataItem<boolean>;
    CloseFbkCalc: DataItem<boolean>;
    CloseOp: DataItem<boolean>;
};
type Fwd = {
    FwdAut: DataItem<boolean>;
    FwdCtrl: DataItem<boolean>;
    FwdEn: DataItem<boolean>;
    FwdFbk: DataItem<boolean>;
    FwdFbkCalc: DataItem<boolean>;
    FwdOp: DataItem<boolean>;
};
type Rev = {
    RevAut: DataItem<boolean>;
    RevCtrl: DataItem<boolean>;
    RevEn: DataItem<boolean>;
    RevFbk: DataItem<boolean>;
    RevFbkCalc: DataItem<boolean>;
    RevOp: DataItem<boolean>;
};
type Pos = {
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
type Rpm = {
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
type RpmErr = {
    RpmErr: DataItem<number>;
};
type Stop = {
    StopAut: DataItem<boolean>;
    StopOp: DataItem<boolean>;
};
type Trip = {
    Trip: DataItem<boolean>;
};
type MV = MVScaleSettings & MVUnit & MVValueLimitation & {
    MV: DataItem<number>;
    MVMan: DataItem<number>;
};
//#region MVSubtypes
type MVScaleSettings = {
    MVSclMax: DataItem<number>;
    MVSclMin: DataItem<number>;
};
type MVValueLimitation = {
    MVMax: DataItem<number>;
    MVMin: DataItem<number>;
};
type MVUnit = {
    MVUnit: DataItem<number>;
};
//#endregion
type PV = PVScaleSettings & PVUnit & {
    PV: DataItem<number>;
};
//#region PVSubtypes
type PVScaleSettings = {
    PVSclMax: DataItem<number>;
    PVSclMin: DataItem<number>;
};
type PVUnit = {
    PVUnit: DataItem<number>;
};
//#endregion
type SP = SPScaleSettings & SPUnit & SPInt & SPMan & {
    SP: DataItem<number>;
};
//#region SPSubtypes
type SPUnit = {
    SPUnit: DataItem<number>;
};
type SPScaleSettings = {
    SPSclMax: DataItem<number>;
    SPSclMin: DataItem<number>;
};
type SPInt = SPIntValueLimitation & {
    SPInt: DataItem<number>;
};
type SPIntValueLimitation = {
    SPIntMax: DataItem<number>;
    SPIntMin: DataItem<number>;
};
type SPMan = SPManValueLimitation & {
    SPMan: DataItem<number>;
};
type SPManValueLimitation = {
    SPManMax: DataItem<number>;
    SPManMin: DataItem<number>;
};
//#endregion
//#endregion

//Done
/* DiagnosticElement */
//#region DiagnosticElement
export type DiagnosticElement = DataAssembly & WQC;
export type LockView4 = DiagnosticElement & {
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
export type LockView8 = LockView4 & {
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
export type LockView16 = LockView8 & {
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
export type HealthStateView = DiagnosticElement;
//#endregion

/* IndicatorElement */
//#region IndicatorElement
export type IndicatorElement = DataAssembly & WQC;

export type BinView = IndicatorElement & V<number> & VState;
export type BinMon = BinView & OSLevel & VFlut;
type VFlut = {
    VFlutEn: DataItem<boolean>;
    VFlutTi: DataItem<number>;
    VFlutCnt: DataItem<number>;
    VFlutAct: DataItem<boolean>;
};

export type DIntView = IndicatorElement & V<number> & VScaleSetting<number> & VUnit;
export type DintMon = DIntView & OSLevel & VLimitMonitoring<number>;

export type AnaView = IndicatorElement & V<number> & VScaleSetting<number> & VUnit;
export type AnaMon = AnaView & OSLevel & VLimitMonitoring<number>;

export type StringView = IndicatorElement & {
    Text: DataItem<string>;
};
//#endregion

/* InputElement */
//#region InputElement
export type InputElement = DataAssembly & WQC;
export type BinProcessValueIn = InputElement & VExt<boolean> & VState;
export type DIntProcessValueIn = InputElement & VExt<number> & VScaleSetting<number>;
export type AnaProcessValueIn = InputElement & VExt<number> & VScaleSetting<number>;
//#endregion

/* OperationElement */
//#region OperationElement
export type OperationElement = DataAssembly & OSLevel;

export type BinMan = OperationElement & VOut<boolean> & VState & VMan<boolean> & VRbk<boolean> & VFbk<boolean>;
export type BinManInt = BinMan & SourceMode & VInt<boolean>;

export type DIntMan = OperationElement & VOut<number> & VScaleSetting<number> & VUnit & VMan<number> & VValueLimitation<number> & VRbk<number> & VFbk<number>;
export type DIntManInt = DIntMan & SourceMode & VInt<number>;

export type AnaMan = OperationElement & VOut<number> & VScaleSetting<number> & VUnit & VMan<number> & VValueLimitation<number> & VRbk<number> & VFbk<number>;
export type AnaManInt = AnaMan & SourceMode & VInt<number>;

type ServiceOperationMode = OperationMode; //Confused why an extra name is introduced in VDI 2658-4
type ServiceCommon<T> = OperationElement & ServiceSourceMode & ServiceOperationMode & Sync & WQC & VExt<T> & VOp<T> & VInt<T> & VReq<T> & VOut<T> & VFbk<T>;

export type AnaServParam = ServiceCommon<number> & VScaleSetting<number> & VUnit & VValueLimitation<number>;
export type BinServParam = ServiceCommon<boolean> & VState;
export type DIntServParam = ServiceCommon<number> & VScaleSetting<number> & VUnit & VValueLimitation<number>;
export type StringServParam = ServiceCommon<string>;

/* ServiceControl */
export type ServiceControl = DataAssembly & WQC & OSLevel & OperationMode & ServiceSourceMode & {
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
type Interlock = {
    PermEn: DataItem<boolean>;
    Permit: DataItem<boolean>;
    IntlEn: DataItem<boolean>;
    Interlock: DataItem<boolean>;
    ProtEn: DataItem<boolean>;
    Protect: DataItem<boolean>;
}
type FeedbackMonitoring = {
    MonEn: DataItem<boolean>;
    MonSafePos: DataItem<boolean>;
    MonStatErr: DataItem<boolean>;
    MonDynErr: DataItem<boolean>;
    MonStatTi: DataItem<number>;
    MonDynTi: DataItem<number>;
};
type OSLevel = {
    OSLevel: DataItem<number>;
};
type WQC = {
    WQC: DataItem<number>;
};
type Reset = {
    ResetOp: DataItem<boolean>;
    ResetAut: DataItem<boolean>;
}

type Sync={
    Sync: DataItem<boolean>;
};

//#region SourceModeSubtypes
type SrcChannel = {
    SrcChannel: DataItem<boolean>;
};
type SrcExt = {
    SrcExtAct: DataItem<boolean>;
    SrcExtAut: DataItem<boolean>;
    SrcExtOp: DataItem<boolean>;
};
type SrcInt = {
    SrcIntAct: DataItem<boolean>;
    SrcIntAut: DataItem<boolean>;
    SrcIntOp: DataItem<boolean>;
};
type SrcMan = {
    SrcManAct: DataItem<boolean>;
    SrcManAut: DataItem<boolean>;
    SrcManOp: DataItem<boolean>;
};
//#endregion
type SourceMode = SrcChannel & SrcInt & SrcMan; //type SrcChannelAndIntAndMan = SrcChannel & SrcInt & SrcMan;
type ServiceSourceMode = SrcChannel & SrcInt & SrcExt; //type SrcChannelAndExtAndInt = SrcChannel & SrcExt & SrcInt;

//#region StateSubtypes
type StateChannel = {
    StateChannel: DataItem<boolean>;
};
type StateAut = {
    StateAutAct: DataItem<boolean>;
    StateAutAut: DataItem<boolean>;
    StateAutOp: DataItem<boolean>;
};
type StateOff = {
    StateOffAct: DataItem<boolean>;
    StateOffAut: DataItem<boolean>;
    StateOffOp: DataItem<boolean>;
};
type StateOp = {
    StateOpAct: DataItem<boolean>;
    StateOpAut: DataItem<boolean>;
    StateOpOp: DataItem<boolean>;
};
//#endregion
type OperationMode = StateChannel & StateAut & StateOff & StateOp;

type V<T> = {
    V: DataItem<T>;
};
type VMan<T> = {
    VMan: DataItem<T>;
};
type VExt<T> = {
    VExt: DataItem<T>;
};
type VOp<T> = {
    VOp: DataItem<T>;
};
type VInt<T> = {
    VInt: DataItem<T>;
};
type VReq<T> = {
    VReq: DataItem<T>;
};
type VOut<T> = {
    VOut: DataItem<T>;
};
type VFbk<T> = {
    VFbk: DataItem<T>;
};
type VRbk<T> = {
    VRbk: DataItem<T>;
};
type VState = {
    VState0: DataItem<string>;
    VState1: DataItem<string>;
};
type VUnit = {
    VUnit: DataItem<number>;
};
type VScaleSetting<T> ={
    VSclMin: DataItem<T>;
    VSclMax: DataItem<T>;
};
type VValueLimitation<T>={
    VMin: DataItem<T>;
    VMax: DataItem<T>;
};

//#region VLimitMonitoringSubtypes
type VAH<T> = {
    VAHEn: DataItem<boolean>;
    VAHLim: DataItem<T>;
    VAHAct: DataItem<boolean>;
};
type VWH<T> = {
    VWHEn: DataItem<boolean>;
    VWHLim: DataItem<T>;
    VWHAct: DataItem<boolean>;
};
type VTH<T> = {
    VTHEn: DataItem<boolean>;
    VTHLim: DataItem<T>;
    VTHAct: DataItem<boolean>;
};
type VTL<T> = {
    VTLEn: DataItem<boolean>;
    VTLLim: DataItem<T>;
    VTLAct: DataItem<boolean>;
};
type VWL<T> = {
    VWLEn: DataItem<boolean>;
    VWLLim: DataItem<T>;
    VWLAct: DataItem<boolean>;
};
type VAL<T> = {
    VALEn: DataItem<boolean>;
    VALLim: DataItem<T>;
    VALAct: DataItem<boolean>;
};
//#endregion
type VLimitMonitoring<T>= VAH<T> & VWH<T> & VTH<T> & VTL<T> & VWL<T> & VAL<T>;
//#region RpmLimitMonitoringSubtypes
type RpmAH = {
    RpmAHEn: DataItem<boolean>;
    RpmAHLim: DataItem<number>;
    RpmAHAct: DataItem<boolean>;
};
type RpmAL = {
    RpmALEn: DataItem<boolean>;
    RpmALLim: DataItem<number>;
    RpmALAct: DataItem<boolean>;
};
//#endregion
type RpmLimitMonitoring= RpmAH & RpmAL;
