import IReport from "./IReport";

import saleReport from "./saleReport/saleReport";
import saleReport2 from "./saleReport2/saleReport2";

export const reportRegistry: Record<string, IReport> = {
    sales: new saleReport(),
    sales2: new saleReport2
}