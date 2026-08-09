
import * as xlsx from "xlsx";

export class ExcelFileReader{

    static readExcel(filePath:string, sheetName:string):any{

    //Read data from excel.
      const workbook=xlsx.readFile(filePath);
    
    //select sheet Name
     const sheet=workbook.Sheets[sheetName];

    //convert into the json
     const data=xlsx.utils.sheet_to_json(sheet);

     return data;


    }
}