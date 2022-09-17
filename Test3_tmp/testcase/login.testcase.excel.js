const ExcelJS = require('exceljs')
// https://github.com/exceljs/exceljs#readme

let TC1username
let TC1password
let TC2username
let TC2password

const workbook = new ExcelJS.Workbook();
workbook.xlsx.readFile('./tc.xlsx').then(() => {
  const sheet = workbook.getWorksheet("login")
  TC1username = sheet.getRow(2).getCell(1).toString()
  TC1password = sheet.getRow(2).getCell(2).toString()

  TC2username = sheet.getRow(3).getCell(1).toString()
  TC2password = sheet.getRow(3).getCell(2).toString()
});

export { TC1username, TC1password, TC2username, TC2password }

// module.exports = {
//   TC1: {
//     usename: TC1username,
//     password: TC1password
//   },
//   TC2: {
//     usename: TC2username,
//     password: TC2password
//   }
// }