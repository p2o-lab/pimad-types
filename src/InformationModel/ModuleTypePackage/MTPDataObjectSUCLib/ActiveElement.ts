namespace ModuleTypePackage {
    export interface ActiveElement extends DataAssembly {
        WQC: OPCUAItem;
        OSLevel: OPCUAItem;
    }
    export interface AnalogValve extends ActiveElement {
        // TODO: Generics!!
        //OperationMode
        //SourceMode
        /*
        SafePos: DataItem<ReadAccess,BoolDataType>
        SafePosEn: DataItem<ReadAccess,BoolDataType>
        SafePosAct: DataItem<ReadAccess,BoolDataType>
        OpenAut: DataItem<ReadAccess,BoolDataType>
        CloseAut: DataItem<ReadAccess,BoolDataType>
        OpenOp: DataItem<ReadWriteAccess,BoolDataType>
        CloseOp: DataItem<ReadWriteAccess,BoolDataType>
        OpenAct: DataItem<ReadAccess,BoolDataType>
        CloseAct: DataItem<ReadAccess,BoolDataType>
        //Pos* : ScaleSettings<RealDataType>
        PosUnit: Unit
        //Pos* : ValueLimitations<RealDataType>
        PosInt: DataItem<ReadAccess,RealDataType>
        PosMan: DataItem<ReadWriteAccess,RealDataType>
        PosRbk: Readback<RealDataType>
        Pos: DataItem<ReadAccess,RealDataType>
        OpenFbkCalc: DataItem<ReadAccess,BoolDataType>
        //OpenFbk: Feedback<BoolDataType>
        CloseFbkCalc: DataItem<ReadAccess,BoolDataType>
        //CloseFbk: Feedback<BoolDataType>
        PosFbkCalc: DataItem<ReadAccess,BoolDataType>
        //PosFbk: Feedback<RealDataType>
        //Interlock: ???
        //Reset: ???
        */
    }
}