import IReport from "./IReport";

export default class reportGeneratorService{
    generateReport(report:IReport){
        console.log("gerando relatorio ", report.title);
        
    }
}