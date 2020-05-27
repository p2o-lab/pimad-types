/** MTPFreeze 01.2020 */
import DiagnosticElement = ModuleTypePackage.DiagnosticElement;
import LockView4 = ModuleTypePackage.LockView4;

namespace ModuleTypePackage {
    /* DataAssembly */
    export interface DataAssembly {
        TagName: String;
        TagDescription: String;
    }
    /* DiagnosticElement */
    export type DiagnosticElement = DataAssembly & WQC & {
        Logic: object;
        Out: object;
        OutQC: object;
    }
    export type LockView4 = DiagnosticElement & {
        ln1: object;
        ln1En: object;
        ln1Inv: object;
        ln1QC: object;
        ln1Txt: object;
        ln2: object;
        ln2En: object;
        ln2Inv: object;
        ln2QC: object;
        ln2Txt: object;
        ln3: object;
        ln3En: object;
        ln3Inv: object;
        ln3QC: object;
        ln3Txt: object;
        ln4: object;
        ln4En: object;
        ln4Inv: object;
        ln4QC: object;
        ln4Txt: object;
    }
    /* ??? */
    type WQC = {
        WQC: object;
    }
}
