/** MTPFreeze 01.2020 */
import {LinkedObject, DataItem, Access} from '../../..';

/* DataAssembly */
export type DataAssembly = LinkedObject & {
    TagName: DataItem<Access.ReadAccess, string>;
    TagDescription: DataItem<Access.ReadAccess, string>;
};

/* ActiveElement */
//#region ActiveElement

export type ActiveElement = DataAssembly & OSLevel & WQC;

type ActiveElementVlvDrvCommon = ActiveElement & OperationMode & SafePos & Interlock & Reset;

export type AnaVlv = ActiveElementVlvDrvCommon & SourceMode & SafePosEn & SafePosAct & Open & Close & Pos & {
    OpenAct: DataItem<Access.ReadAccess, boolean>;
    CloseAct: DataItem<Access.ReadAccess, boolean>;
};
export type MonAnaVlv = AnaVlv & FeedbackMonitoring & {
    PosReachedFbk: DataItem<Access.ReadAccess, boolean>;
    PosTolerance: DataItem<Access.ReadAccess, number>;
    MonPosTi: DataItem<Access.ReadAccess, number>;
    MonPosErr: DataItem<Access.ReadAccess, boolean>;
};

export type BinVlv = ActiveElementVlvDrvCommon & SafePosEn & Open & Close & {
    Ctrl: DataItem<Access.ReadAccess, boolean>;
};
export type MonBinVlv = BinVlv & FeedbackMonitoring;

export type BinDrv = ActiveElementVlvDrvCommon & Fwd & Rev & Stop & Trip;
export type MonBinDrv = BinDrv & FeedbackMonitoring;

export type AnaDrv = ActiveElementVlvDrvCommon & SourceMode & Fwd & Rev & Stop & Trip & Rpm  ;
export type MonAnaDrv = AnaDrv & FeedbackMonitoring & RpmErr & RpmLimitMonitoring;

export type PIDCtrl = ActiveElement & ServiceSourceMode & OperationMode & MV & PV & SP & {
    P: DataItem<Access.ReadAccess, number>;
    Td: DataItem<Access.ReadAccess, number>;
    Ti: DataItem<Access.ReadAccess, number>;
};
type SafePos = {
    SafePos: object;
};
type SafePosEn = {
    SafePosEn: object;
};
type SafePosAct = {
    SafePosAct: object;
};
type Open = {
    OpenAut: DataItem<Access.ReadAccess, boolean>;
    OpenFbk: DataItem<Access.ReadAccess, boolean>;
    OpenFbkCalc: DataItem<Access.ReadAccess, boolean>;
    OpenOp: DataItem<Access.ReadWriteAccess, boolean>;
}
type Close = {
    CloseAut: DataItem<Access.ReadAccess, boolean>;
    CloseFbk: DataItem<Access.ReadAccess, boolean>;
    CloseFbkCalc: DataItem<Access.ReadAccess, boolean>;
    CloseOp: DataItem<Access.ReadWriteAccess, boolean>;
};
type Fwd = {
    FwdAut: DataItem<Access.ReadAccess, boolean>;
    FwdCtrl: DataItem<Access.ReadAccess, boolean>;
    FwdEn: DataItem<Access.ReadAccess, boolean>;
    FwdFbk: DataItem<Access.ReadAccess, boolean>;
    FwdFbkCalc: DataItem<Access.ReadAccess, boolean>;
    FwdOp: DataItem<Access.ReadWriteAccess, boolean>;
};
type Rev = {
    RevAut: DataItem<Access.ReadAccess, boolean>;
    RevCtrl: DataItem<Access.ReadAccess, boolean>;
    RevEn: DataItem<Access.ReadAccess, boolean>;
    RevFbk: DataItem<Access.ReadAccess, boolean>;
    RevFbkCalc: DataItem<Access.ReadAccess, boolean>;
    RevOp: DataItem<Access.ReadWriteAccess, boolean>;
};
type Pos = {
    Pos: DataItem<Access.ReadAccess, number>;
    PosFbk: DataItem<Access.ReadAccess, number>;
    PosFbkCalc: DataItem<Access.ReadAccess, boolean>;
    PosRbk: DataItem<Access.ReadAccess, number>;
    PosInt: DataItem<Access.ReadAccess, number>;
    PosMan: DataItem<Access.ReadWriteAccess, number>;
    PosUnit: DataItem<Access.ReadAccess, number>;
    PosSclMin: DataItem<Access.ReadAccess, number>;
    PosSclMax:  DataItem<Access.ReadAccess, number>;
    PosMin: DataItem<Access.ReadAccess, number>;
    PosMax: DataItem<Access.ReadAccess, number>;
}
type Rpm = {
    Rpm: object;
    RpmFbk: object;
    RpmFbkCalc: object;
    RpmInt: object;
    RpmMan: object;
    RpmMax: object;
    RpmMin: object;
    RpmRbk: object;
    RpmSclMax: object;
    RpmSclMin: object;
    RpmUnit: object;
};
type RpmErr = {
    RpmErr: object;
};
type Stop = {
    StopAut: DataItem<Access.ReadAccess, boolean>;
    StopOp: DataItem<Access.ReadWriteAccess, boolean>;
};
type Trip = {
    Trip: DataItem<Access.ReadAccess, boolean>;
};
type MV = MVScaleSettings & MVUnit & MVValueLimitation & {
    MV: DataItem<Access.ReadAccess, number>;
    MVMan: DataItem<Access.ReadWriteAccess, number>;
};
//#region MVSubtypes
type MVScaleSettings = {
    MVSclMax: DataItem<Access.ReadAccess, number>;
    MVSclMin: DataItem<Access.ReadAccess, number>;
};
type MVValueLimitation = {
    MVMax: DataItem<Access.ReadAccess, number>;
    MVMin: DataItem<Access.ReadAccess, number>;
};
type MVUnit = {
    MVUnit: DataItem<Access.ReadAccess, number>;
};
//#endregion
type PV = PVScaleSettings & PVUnit & {
    PV: DataItem<Access.ReadAccess, number>;
};
//#region PVSubtypes
type PVScaleSettings = {
    PVSclMax: DataItem<Access.ReadAccess, number>;
    PVSclMin: DataItem<Access.ReadAccess, number>;
};
type PVUnit = {
    PVUnit: DataItem<Access.ReadAccess, number>;
};
//#endregion
type SP = SPScaleSettings & SPUnit & SPInt & SPMan & {
    SP: DataItem<Access.ReadAccess, number>;
};
//#region SPSubtypes
type SPUnit = {
    SPUnit: DataItem<Access.ReadAccess, number>;
};
type SPScaleSettings = {
    SPSclMax: DataItem<Access.ReadAccess, number>;
    SPSclMin: DataItem<Access.ReadAccess, number>;
};
type SPInt = SPIntValueLimitation & {
    SPInt: DataItem<Access.ReadAccess, number>;
};
type SPIntValueLimitation = {
    SPIntMax: DataItem<Access.ReadAccess, number>;
    SPIntMin: DataItem<Access.ReadAccess, number>;
};
type SPMan = SPManValueLimitation & {
    SPMan: DataItem<Access.ReadWriteAccess, number>;
};
type SPManValueLimitation = {
    SPManMax: DataItem<Access.ReadAccess, number>;
    SPManMin: DataItem<Access.ReadAccess, number>;
};
//#endregion
//#endregion

//Done
/* DiagnosticElement */
//#region DiagnosticElement
export type DiagnosticElement = DataAssembly & WQC;
export type LockView4 = DiagnosticElement & {
    Logic: DataItem<Access.ReadAccess, boolean>;
    In1: DataItem<Access.ReadAccess, boolean>;
    In1En: DataItem<Access.ReadAccess, boolean>;
    In1Inv: DataItem<Access.ReadAccess, boolean>;
    In1QC: DataItem<Access.ReadAccess, number>;
    In1Txt: DataItem<Access.ReadAccess, string>;
    In2: DataItem<Access.ReadAccess, boolean>;
    In2En: DataItem<Access.ReadAccess, boolean>;
    In2Inv: DataItem<Access.ReadAccess, boolean>;
    In2QC: DataItem<Access.ReadAccess, number>;
    In2Txt: DataItem<Access.ReadAccess, string>;
    In3: DataItem<Access.ReadAccess, boolean>;
    In3En: DataItem<Access.ReadAccess, boolean>;
    In3Inv: DataItem<Access.ReadAccess, boolean>;
    In3QC: DataItem<Access.ReadAccess, number>;
    In3Txt: DataItem<Access.ReadAccess, string>;
    In4: DataItem<Access.ReadAccess, boolean>;
    In4En: DataItem<Access.ReadAccess, boolean>;
    In4Inv: DataItem<Access.ReadAccess, boolean>;
    In4QC: DataItem<Access.ReadAccess, number>;
    In4Txt: DataItem<Access.ReadAccess, string>;
    Out: DataItem<Access.ReadAccess, boolean>;
    OutQC: DataItem<Access.ReadAccess, number>;
};
export type LockView8 = LockView4 & {
    In5: DataItem<Access.ReadAccess, boolean>;
    In5En: DataItem<Access.ReadAccess, boolean>;
    In5Inv: DataItem<Access.ReadAccess, boolean>;
    In5QC: DataItem<Access.ReadAccess, number>;
    In5Txt: DataItem<Access.ReadAccess, string>;
    In6: DataItem<Access.ReadAccess, boolean>;
    In6En: DataItem<Access.ReadAccess, boolean>;
    In6Inv: DataItem<Access.ReadAccess, boolean>;
    In6QC: DataItem<Access.ReadAccess, number>;
    In6Txt: DataItem<Access.ReadAccess, string>;
    In7: DataItem<Access.ReadAccess, boolean>;
    In7En: DataItem<Access.ReadAccess, boolean>;
    In7Inv: DataItem<Access.ReadAccess, boolean>;
    In7QC: DataItem<Access.ReadAccess, number>;
    In7Txt: DataItem<Access.ReadAccess, string>;
    In8: DataItem<Access.ReadAccess, boolean>;
    In8En: DataItem<Access.ReadAccess, boolean>;
    In8Inv: DataItem<Access.ReadAccess, boolean>;
    In8QC: DataItem<Access.ReadAccess, number>;
    In8Txt: DataItem<Access.ReadAccess, string>;
};
export type LockView16 = LockView8 & {
    In9: DataItem<Access.ReadAccess, boolean>;
    In9En: DataItem<Access.ReadAccess, boolean>;
    In9Inv: DataItem<Access.ReadAccess, boolean>;
    In9QC: DataItem<Access.ReadAccess, number>;
    In9Txt: DataItem<Access.ReadAccess, string>;
    In10: DataItem<Access.ReadAccess, boolean>;
    In10En: DataItem<Access.ReadAccess, boolean>;
    In10Inv: DataItem<Access.ReadAccess, boolean>;
    In10QC: DataItem<Access.ReadAccess, number>;
    In10Txt: DataItem<Access.ReadAccess, string>;
    In11: DataItem<Access.ReadAccess, boolean>;
    In11En: DataItem<Access.ReadAccess, boolean>;
    In11Inv: DataItem<Access.ReadAccess, boolean>;
    In11QC: DataItem<Access.ReadAccess, number>;
    In11Txt: DataItem<Access.ReadAccess, string>;
    In12: DataItem<Access.ReadAccess, boolean>;
    In12En: DataItem<Access.ReadAccess, boolean>;
    In12Inv: DataItem<Access.ReadAccess, boolean>;
    In12QC: DataItem<Access.ReadAccess, number>;
    In12Txt: DataItem<Access.ReadAccess, string>;
    In13: DataItem<Access.ReadAccess, boolean>;
    In13En: DataItem<Access.ReadAccess, boolean>;
    In13Inv: DataItem<Access.ReadAccess, boolean>;
    In13QC: DataItem<Access.ReadAccess, number>;
    In13Txt: DataItem<Access.ReadAccess, string>;
    In14: DataItem<Access.ReadAccess, boolean>;
    In14En: DataItem<Access.ReadAccess, boolean>;
    In14Inv: DataItem<Access.ReadAccess, boolean>;
    In14QC: DataItem<Access.ReadAccess, number>;
    In14Txt: DataItem<Access.ReadAccess, string>;
    In15: DataItem<Access.ReadAccess, boolean>;
    In15En: DataItem<Access.ReadAccess, boolean>;
    In15Inv: DataItem<Access.ReadAccess, boolean>;
    In15QC: DataItem<Access.ReadAccess, number>;
    In15Txt: DataItem<Access.ReadAccess, string>;
    In16: DataItem<Access.ReadAccess, boolean>;
    In16En: DataItem<Access.ReadAccess, boolean>;
    In16Inv: DataItem<Access.ReadAccess, boolean>;
    In16QC: DataItem<Access.ReadAccess, number>;
    In16Txt: DataItem<Access.ReadAccess, string>;
};
export type HealthStateView = DiagnosticElement;
//#endregion

/* IndicatorElement */
//#region IndicatorElement
export type IndicatorElement = DataAssembly & WQC;

export type BinView = IndicatorElement & V<number> & VState;
export type BinMon = BinView & OSLevel & VFlut;
type VFlut = {
    VFlutEn: DataItem<Access.ReadAccess, boolean>;
    VFlutTi: DataItem<Access.ReadWriteAccess, number>;
    VFlutCnt: DataItem<Access.ReadWriteAccess, number>;
    VFlutAct: DataItem<Access.ReadAccess, boolean>;
};

export type DIntView = IndicatorElement & V<number> & VScaleSetting<number> & VUnit;
export type DintMon = DIntView & OSLevel & VLimitMonitoring<number>;

export type AnaView = IndicatorElement & V<number> & VScaleSetting<number> & VUnit;
export type AnaMon = AnaView & OSLevel & VLimitMonitoring<number>;

export type StringView = IndicatorElement & {
    Text: DataItem<Access.ReadAccess, string>;
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
    CommandOp: DataItem<Access.ReadWriteAccess, number>;
    CommandInt: DataItem<Access.ReadAccess, number>;
    CommandExt: DataItem<Access.ReadWriteAccess, number>;
    CommandEn: DataItem<Access.ReadAccess, number>;
    ProcedureOp: DataItem<Access.ReadWriteAccess, number>;
    ProcedureInt: DataItem<Access.ReadAccess, number>;
    ProcedureExt: DataItem<Access.ReadWriteAccess, number>;
    ProcedureCur: DataItem<Access.ReadAccess, number>;
    ProcedureReq: DataItem<Access.ReadAccess, number>;
    StateCur: DataItem<Access.ReadWriteAccess, number>;
    InteractQuestionID: DataItem<Access.ReadAccess, number>;
    InteractAnswerID: DataItem<Access.ReadWriteAccess, number>;
    PostTextId: DataItem<Access.ReadAccess, number>;
};

//BasicDataTypes
type Interlock = {
    PermEn: DataItem<Access.ReadAccess, boolean>;
    Permit: DataItem<Access.ReadAccess, boolean>;
    IntlEn: DataItem<Access.ReadAccess, boolean>;
    Interlock: DataItem<Access.ReadAccess, boolean>;
    ProtEn: DataItem<Access.ReadAccess, boolean>;
    Protect: DataItem<Access.ReadAccess, boolean>;
}
type FeedbackMonitoring = {
    MonEn: DataItem<Access.ReadWriteAccess, boolean>;
    MonSafePos: DataItem<Access.ReadAccess, boolean>;
    MonStatErr: DataItem<Access.ReadAccess, boolean>;
    MonDynErr: DataItem<Access.ReadAccess, boolean>;
    MonStatTi: DataItem<Access.ReadAccess, number>;
    MonDynTi: DataItem<Access.ReadAccess, number>;
};
type OSLevel = {
    OSLevel: DataItem<Access.ReadWriteAccess, number>;
};
type WQC = {
    WQC: DataItem<Access.ReadAccess, number>;
};
type Reset = {
    ResetOp: DataItem<Access.ReadWriteAccess, boolean>;
    ResetAut: DataItem<Access.ReadAccess, boolean>;
}

type Sync={
    Sync: DataItem<Access.ReadWriteAccess, boolean>;
};

//#region SourceModeSubtypes
type SrcChannel = {
    SrcChannel: DataItem<Access.ReadAccess, boolean>;
};
type SrcExt = {
    SrcExtAct: DataItem<Access.ReadAccess, boolean>;
    SrcExtAut: DataItem<Access.ReadAccess, boolean>;
    SrcExtOp: DataItem<Access.ReadWriteAccess, boolean>;
};
type SrcInt = {
    SrcIntAct: DataItem<Access.ReadAccess, boolean>;
    SrcIntAut: DataItem<Access.ReadAccess, boolean>;
    SrcIntOp: DataItem<Access.ReadWriteAccess, boolean>;
};
type SrcMan = {
    SrcManAct: DataItem<Access.ReadAccess, boolean>;
    SrcManAut: DataItem<Access.ReadAccess, boolean>;
    SrcManOp: DataItem<Access.ReadWriteAccess, boolean>;
};
//#endregion
type SourceMode = SrcChannel & SrcInt & SrcMan; //type SrcChannelAndIntAndMan = SrcChannel & SrcInt & SrcMan;
type ServiceSourceMode = SrcChannel & SrcInt & SrcExt; //type SrcChannelAndExtAndInt = SrcChannel & SrcExt & SrcInt;

//#region StateSubtypes
type StateChannel = {
    StateChannel: DataItem<Access.ReadAccess, boolean>;
};
type StateAut = {
    StateAutAct: DataItem<Access.ReadAccess, boolean>;
    StateAutAut: DataItem<Access.ReadAccess, boolean>;
    StateAutOp: DataItem<Access.ReadWriteAccess, boolean>;
};
type StateOff = {
    StateOffAct: DataItem<Access.ReadAccess, boolean>;
    StateOffAut: DataItem<Access.ReadAccess, boolean>;
    StateOffOp: DataItem<Access.ReadWriteAccess, boolean>;
};
type StateOp = {
    StateOpAct: DataItem<Access.ReadAccess, boolean>;
    StateOpAut: DataItem<Access.ReadAccess, boolean>;
    StateOpOp: DataItem<Access.ReadWriteAccess, boolean>;
};
//#endregion
type OperationMode = StateChannel & StateAut & StateOff & StateOp;

type V<T> = {
    V: DataItem<Access.ReadAccess, T>;
};
type VMan<T> = {
    VMan: DataItem<Access.ReadWriteAccess, T>;
};
type VExt<T> = {
    VExt: DataItem<Access.ReadWriteAccess, T>;
};
type VOp<T> = {
    VOp: DataItem<Access.ReadWriteAccess, T>;
};
type VInt<T> = {
    VInt: DataItem<Access.ReadAccess, T>;
};
type VReq<T> = {
    VReq: DataItem<Access.ReadAccess, T>;
};
type VOut<T> = {
    VOut: DataItem<Access.ReadAccess, T>;
};
type VFbk<T> = {
    VFbk: DataItem<Access.ReadAccess, T>;
};
type VRbk<T> = {
    VRbk: DataItem<Access.ReadAccess, T>;
};
type VState = {
    VState0: DataItem<Access.ReadAccess, string>;
    VState1: DataItem<Access.ReadAccess, string>;
};
type VUnit = {
    VUnit: DataItem<Access.ReadAccess, number>;
};
type VScaleSetting<T> ={
    VSclMin: DataItem<Access.ReadAccess, T>;
    VSclMax: DataItem<Access.ReadAccess, T>;
};
type VValueLimitation<T>={
    VMin: DataItem<Access.ReadAccess, T>;
    VMax: DataItem<Access.ReadAccess, T>;
};

//#region VLimitMonitoringSubtypes
type VAH<T> = {
    VAHEn: DataItem<Access.ReadAccess, boolean>;
    VAHLim: DataItem<Access.ReadWriteAccess, T>;
    VAHAct: DataItem<Access.ReadAccess, boolean>;
};
type VWH<T> = {
    VWHEn: DataItem<Access.ReadAccess, boolean>;
    VWHLim: DataItem<Access.ReadWriteAccess, T>;
    VWHAct: DataItem<Access.ReadAccess, boolean>;
};
type VTH<T> = {
    VTHEn: DataItem<Access.ReadAccess, boolean>;
    VTHLim: DataItem<Access.ReadWriteAccess, T>;
    VTHAct: DataItem<Access.ReadAccess, boolean>;
};
type VTL<T> = {
    VTLEn: DataItem<Access.ReadAccess, boolean>;
    VTLLim: DataItem<Access.ReadWriteAccess, T>;
    VTLAct: DataItem<Access.ReadAccess, boolean>;
};
type VWL<T> = {
    VWLEn: DataItem<Access.ReadAccess, boolean>;
    VWLLim: DataItem<Access.ReadWriteAccess, T>;
    VWLAct: DataItem<Access.ReadAccess, boolean>;
};
type VAL<T> = {
    VALEn: DataItem<Access.ReadAccess, boolean>;
    VALLim: DataItem<Access.ReadWriteAccess, T>;
    VALAct: DataItem<Access.ReadAccess, boolean>;
};
//#endregion
type VLimitMonitoring<T>= VAH<T> & VWH<T> & VTH<T> & VTL<T> & VWL<T> & VAL<T>;
//#region RpmLimitMonitoringSubtypes
type RpmAH = {
    RpmAHEn: DataItem<Access.ReadAccess, boolean>;
    RpmAHLim: DataItem<Access.ReadWriteAccess, number>;
    RpmAHAct: DataItem<Access.ReadAccess, boolean>;
};
type RpmAL = {
    RpmALEn: DataItem<Access.ReadAccess, boolean>;
    RpmALLim: DataItem<Access.ReadWriteAccess, number>;
    RpmALAct: DataItem<Access.ReadAccess, boolean>;
};
//#endregion
type RpmLimitMonitoring= RpmAH & RpmAL;
