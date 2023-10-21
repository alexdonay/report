import IReport from "../IReport";

export default class saleReport2 implements IReport{
    title: string = "Relatório de vendas 2";
    templateName:string = "./saleReport.hbs"
    data: object = require("./saleReport.data.json");
    generateReport() {
        console.log('Gerando relatório de vendas2...');
      }
}