import IReport from "../../Interfaces/IReport";
import ReportRegistryService from "../../services/reportRegistryService";

export default class saleReport implements IReport{
    name:string = "saleReport"
    title: string = "Relatório de vendas";
    templateName:string = "./saleReport.hbs"
    data: object = require("./saleReport.data.json");
    constructor() {
     ReportRegistryService.registerReport(this);
    }
}