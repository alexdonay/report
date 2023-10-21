import saleReport from "./reports/saleReport/saleReport";
import saleReport3 from "./reports/saleReport3/saleReport2";
import ReportService from "./services/reportService";

const sale = new saleReport()
const sale3 = new saleReport3()
const reportService = new ReportService()

reportService.generateReport(sale3)
