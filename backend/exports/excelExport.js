const ExcelJS = require('exceljs');
async function exportExcel(rows) {
  const workbook = new ExcelJS.Workbook();
  const sheet = workbook.addWorksheet('Laporan Bulanan');
  sheet.columns = [
    { header: 'Bulan', key: 'bulan', width: 15 },
    { header: 'Pemasukan', key: 'pemasukan', width: 20 },
    { header: 'Pengeluaran', key: 'pengeluaran', width: 20 },
    { header: 'Saldo', key: 'saldo', width: 20 }
  ];
  rows.forEach(r => sheet.addRow(r));
  const filePath = 'laporan_bulanan.xlsx';
  await workbook.xlsx.writeFile(filePath);
  return filePath;
}
module.exports = exportExcel;
