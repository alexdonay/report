import { reportRegistry } from "./reportRegistry";

export class ReportService {
  generateAndPrintReport(reportName: string) {
    const report = reportRegistry[reportName];
    
    if (report) {
        report.generateReport();
       
        
    } else {
        console.log(`Relatório '${reportName}' não encontrado.`);
    }
  }
}