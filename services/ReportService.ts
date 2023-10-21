import IReport from "../Interfaces/IReport";
import reportGeneratorService from "./reportGeneratorService";
import reportRegistryService from "./reportRegistryService";

export default class ReportService {
    reports:Record<string, IReport>
    
    gerador = new reportGeneratorService()
    constructor(){
        this.reports = reportRegistryService.getReports()
    }
    generateReport(report:IReport):void{
        const reportName = report.name
        if(this.reports[reportName]){
          this.gerador.generateReport(report)
        }else{
            console.log("relatorio não encontrado")
        }
    }
}
