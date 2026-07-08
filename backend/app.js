const express = require('express');
const app = express();
const laporanRoutes = require('./routes/laporan');

app.use('/laporan', laporanRoutes);
app.listen(3000, () => console.log('Server berjalan di port 3000'));
