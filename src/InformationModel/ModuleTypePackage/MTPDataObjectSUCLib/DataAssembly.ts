/** MTPFreeze 01.2020 */

namespace ModuleTypePackage {
    /* DataAssembly */
    export interface DataAssembly {
        TagName: String;
        TagDescription: String;
    }
    /* ActiveElement */
    export type ActiveElement = DataAssembly & OSLevel & WQC;
    type ActiveElementDrvAndVlv = ActiveElement & SafePos & {
        Interlock: object;
        IntlEn: object;
        PermEn: object;
        Permit: object;
        Protect: object;
        ProtEn: object;
        ResetAut: object;
        ResetOp: object;
    };
    export type BinVlv = ActiveElementDrvAndVlv & Close & Open & SafePosEn & State & {
        Ctrl: object;
    };
    export type MonBinVlv = BinVlv & Mon;
    export type AnaVlv = ActiveElementDrvAndVlv & Close & Open & Pos & SafePosAct & SrcChannelAndIntAndMan & State & {
        CloseAct: object;
        OpenAct: object;
    };
    export type MonAnaVlv = AnaVlv & Mon & {
        MonPosErr: object;
        MonPosTi: object;
        PosReachedFbk: object;
        PosTolerance: object;
    }
    export type PIDCtrl = ActiveElement & MV & PV & SP & SrcChannelAndIntAndMan & State & {
        P: object;
        Td: object;
        Ti: object;
    };
    /* DiagnosticElement */
    export type DiagnosticElement = DataAssembly & WQC & {
        Logic: object;
        Out: object;
        OutQC: object;
    };
    export type LockView4 = DiagnosticElement & {
        In1: object;
        In1En: object;
        In1Inv: object;
        In1QC: object;
        In1Txt: object;
        In2: object;
        In2En: object;
        In2Inv: object;
        In2QC: object;
        In2Txt: object;
        In3: object;
        In3En: object;
        In3Inv: object;
        In3QC: object;
        In3Txt: object;
        In4: object;
        In4En: object;
        In4Inv: object;
        In4QC: object;
        In4Txt: object;
    };
    export type LockView8 = LockView4 & {
        In5: object;
        In5En: object;
        In5Inv: object;
        In5QC: object;
        In5Txt: object;
        In6: object;
        In6En: object;
        In6Inv: object;
        In6QC: object;
        In6Txt: object;
        In7: object;
        In7En: object;
        In7Inv: object;
        In7QC: object;
        In7Txt: object;
        In8: object;
        In8En: object;
        In8Inv: object;
        In8QC: object;
        In8Txt: object;
    };
    export type LockView16 = LockView8 & {
        In9: object;
        In9En: object;
        In9Inv: object;
        In9QC: object;
        In9Txt: object;
        In10: object;
        In10En: object;
        In10Inv: object;
        In10QC: object;
        In10Txt: object;
        In11: object;
        In11En: object;
        In11Inv: object;
        In11QC: object;
        In11Txt: object;
        In12: object;
        In12En: object;
        In12Inv: object;
        In12QC: object;
        In12Txt: object;
        In13: object;
        In13En: object;
        In13Inv: object;
        In13QC: object;
        In13Txt: object;
        In14: object;
        In14En: object;
        In14Inv: object;
        In14QC: object;
        In14Txt: object;
        In15: object;
        In15En: object;
        In15Inv: object;
        In15QC: object;
        In15Txt: object;
        In16: object;
        In16En: object;
        In16Inv: object;
        In16QC: object;
        In16Txt: object;
    };
    /* ServiceControl */
    export type ServiceControl = DataAssembly & OSLevel & SrcChannel & SrcExt & SrcInt & State & WQC & {
        CommandEn: object;
        CommandExt: object;
        CommandInt: object;
        CommandOp: object;
        InteractAnswerID: object;
        InteractQuestionID: object;
        PostTextId: object;
        ProcedureCur: object;
        ProcedureExt: object;
        ProcedureInt: object;
        ProcedureOp: object;
        ProcedureReq: object;
        StateCur: object;
    };
    /* ??? */
    type Close = {
      CloseAut: object;
      CloseFbk: object;
      CloseFbkCalc: object;
      CloseOp: object;
    };
    type Mon = {
        MonEn: object;
        MonSafePos: object;
        MonDynErr: object;
        MonDynTi: object;
        MonStatErr: object;
        MonStatTi: object;
    };
    type MV = {
        MV: object;
        MVMan: object;
        MVMax: object;
        MVMin: object;
        MVSclMax: object;
        MVSclMin: object;
        MVUnit: object;
    };
    type Open = {
        OpenAut: object;
        OpenFbk: object;
        OpenFbkCalc: object;
        OpenOp: object;
    }
    type OSLevel = {
        OSLevel: object;
    };
    type Pos = {
        Pos: object;
        PosFbk: object;
        PosFbkCalc: object;
        PosInt: object;
        PosMan: object;
        PosMax: object;
        PosMin: object;
        PosRbk: object;
        PosSclMax: object;
        PosSclMin: object;
        PosUnit: object;
    }
    type PV = {
        PV: object;
        PVSclMax: object;
        PVSclMin: object;
        PVUnit: object;
    };
    type SafePos = {
        SafePos: object;
    };
    type SafePosEn = SafePos & {
        SafePosEn: object;
    };
    type SafePosAct = SafePosEn & {
        SafePosAct: object;
    };
    type SP = SPScl & SPInt & SPMan & {
        SP: object;
        SPUnit: object;
    }
    type SPScl = {
        SPSclMax: object;
        SPSclMin: object;
    }
    type SPInt = {
        SPInt: object;
        SPIntMax: object;
        SPIntMin: object;
    }
    type SPMan = {
        SPMan: object;
        SPManMax: object;
        SPManMin: object;
    }
    type SrcChannel = {
        SrcChannel: object;
    };
    type SrcExt = {
        SrcExtAct: object;
        SrcExtAut: object;
        SrcExtOp: object;
    };
    type SrcInt = {
        SrcIntAct: object;
        SrcIntAut: object;
        SrcIntOp: object;
    };
    type SrcMan = {
        SrcManAct: object;
        SrcManAut: object;
        SrcManOp: object;
    }
    type SrcChannelAndIntAndMan = SrcChannel & SrcInt & SrcMan;
    type State = StateAut & StateOff & StateOp & {
        StateChannel: object;
    };
    type StateAut = {
        StateAutAct: object;
        StateAutAut: object;
        StateAutOp: object
    };
    type StateOff = {
        StateOffAct: object;
        StateOffAut: object;
        StateOffOp: object;
    };
    type StateOp = {
        StateOpAct: object;
        StateOpAut: object;
        StateOpOp: object;
    };
    type WQC = {
        WQC: object;
    };
}
