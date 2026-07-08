import React from 'react';
import { View, Text, Button } from 'react-native';

export default function DashboardScreen({ navigation }) {
  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Dashboard Keuangan</Text>
      <Text>Total Pemasukan: Rp 125,000,000</Text>
      <Text>Total Pengeluaran: Rp 95,000,000</Text>
      <Text>Saldo Saat Ini: Rp 30,000,000</Text>
      <Button title="Tambah Transaksi" onPress={() => navigation.navigate('Transaksi')} />
      <Button title="Lihat Laporan" onPress={() => navigation.navigate('Laporan')} />
    </View>
  );
}
