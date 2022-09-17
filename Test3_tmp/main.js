const ExcelJS = require('exceljs')
// https://github.com/exceljs/exceljs#readme

const workbook = new ExcelJS.Workbook();
workbook.xlsx.readFile('./tc.xlsx').then(() => {
  const sheet = workbook.getWorksheet("login")
  username = sheet.getRow(2).getCell(1).toString()
  password = sheet.getRow(2).getCell(2).toString()
  console.log(username)
  console.log(password)
});

// for (let index = 0; index < 3; index++) {
//   // code
// }

// bla

/**
 * B1: let index = 0
 * B2: index < 3
 * B3: Nếu B2 đúng thì thực hiện code
 * B4: index++ <=> index = index + 1
 * Quay lại B2:
 */

// var, let, const ==> let, const
// data type: string (duyen),
// integer (22), double, float (22.1) ==> number
