import IReport from "../Interfaces/IReport";

export default class reportRegistryService {
  public static registry: Record<string, IReport> = {};

  static registerReport(report: IReport) {
    this.registry[report.name] = report;
  }

  static getReports() {
    return this.registry;
  }
}
