import IReport from "../../Interfaces/IReport";
import reportRegistry from "../../services/reportRegistryService";


export default class saleReport2 implements IReport{
    name:string = "saleReport3"
    title: string = "Relatório de vendas 3";
    templateName:string = "./saleReport.hbs"
    data: object = require("./saleReport.data.json");
    constructor() {
      reportRegistry.registerReport(this);
    }
}