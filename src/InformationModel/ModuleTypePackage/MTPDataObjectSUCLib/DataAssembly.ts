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

    }
    /* ??? */
    type WQC = {
        WQC: object;
    }
}
