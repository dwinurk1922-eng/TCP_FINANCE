const express = require('express');
const router = express.Router();
const db = require('../models/db');
const exportExcel = require('../exports/excelExport');
const exportPDF = require('../exports/pdfExport');

router.get('/excel', async (req, res) => {
  const [rows] = await db.execute(`
    SELECT DATE_FORMAT(tanggal, '%Y-%m') AS bulan,
           SUM(CASE WHEN tipe='pemasukan' THEN jumlah ELSE 0 END) AS pemasukan,
           SUM(CASE WHEN tipe='pengeluaran' THEN jumlah ELSE 0 END) AS pengeluaran,
           SUM(CASE WHEN tipe='pemasukan' THEN jumlah ELSE 0 END) -
           SUM(CASE WHEN tipe='pengeluaran' THEN jumlah ELSE 0 END) AS saldo
    FROM Transaksi
    GROUP BY DATE_FORMAT(tanggal, '%Y-%m')
    ORDER BY bulan;
  `);
  const filePath = await exportExcel(rows);
  res.download(filePath);
});

router.get('/pdf', async (req, res) => {
  const [rows] = await db.execute(`
    SELECT DATE_FORMAT(tanggal, '%Y-%m') AS bulan,
           SUM(CASE WHEN tipe='pemasukan' THEN jumlah ELSE 0 END) AS pemasukan,
           SUM(CASE WHEN tipe='pengeluaran' THEN jumlah ELSE 0 END) AS pengeluaran,
           SUM(CASE WHEN tipe='pemasukan' THEN jumlah ELSE 0 END) -
           SUM(CASE WHEN tipe='pengeluaran' THEN jumlah ELSE 0 END) AS saldo
    FROM Transaksi
    GROUP BY DATE_FORMAT(tanggal, '%Y-%m')
    ORDER BY bulan;
  `);
  const filePath = exportPDF(rows);
  res.download(filePath);
});

module.exports = router;
