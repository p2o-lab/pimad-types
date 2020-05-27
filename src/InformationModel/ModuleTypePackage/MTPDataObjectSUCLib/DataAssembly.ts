/** MTPFreeze 01.2020 */

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
    type LockView4 = DiagnosticElement & {
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
    type LockView8 = LockView4 & {
        ln5: object;
        ln5En: object;
        ln5Inv: object;
        ln5QC: object;
        ln5Txt: object;
        ln6: object;
        ln6En: object;
        ln6Inv: object;
        ln6QC: object;
        ln6Txt: object;
        ln7: object;
        ln7En: object;
        ln7Inv: object;
        ln7QC: object;
        ln7Txt: object;
        ln8: object;
        ln8En: object;
        ln8Inv: object;
        ln8QC: object;
        ln8Txt: object;
    }
    /* ??? */
    type WQC = {
        WQC: object;
    }
}
