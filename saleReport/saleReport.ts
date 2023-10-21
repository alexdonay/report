import IReport from "../IReport";

export default class saleReport implements IReport{
    title: string = "Relatório de vendas";
    templateName:string = "./saleReport.hbs"
    data: object = require("./saleReport.data.json");
    generateReport() {
        console.log('Gerando relatório de vendas...');
      }
}