import reportGeneratorService from "./reportGeneratorService";
import { reportRegistry } from "./reportRegistry";

export class ReportService {
  generateAndPrintReport(reportName: string) {
    const report = reportRegistry[reportName];
    
    if (report) {
        const generator = new reportGeneratorService
        generator.generateReport(report)
        
       
        
    } else {
        console.log(`Relatório '${reportName}' não encontrado.`);
    }
  }
}