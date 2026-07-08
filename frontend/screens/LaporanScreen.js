import React from 'react';
import { View, Button, Text } from 'react-native';

export default function LaporanScreen() {
  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 20 }}>Laporan Keuangan</Text>
      <Button title="Unduh Excel" onPress={() => alert('Mengunduh laporan Excel...')} />
      <Button title="Unduh PDF" onPress={() => alert('Mengunduh laporan PDF...')} />
    </View>
  );
}
