import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';

export default function TransaksiScreen() {
  const [form, setForm] = useState({ tanggal: '', tipe: '', kategori: '', deskripsi: '', jumlah: '' });

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 20 }}>Tambah Transaksi</Text>
      <TextInput placeholder="Tanggal (YYYY-MM-DD)" onChangeText={v => setForm({ ...form, tanggal: v })} />
      <TextInput placeholder="Tipe (pemasukan/pengeluaran)" onChangeText={v => setForm({ ...form, tipe: v })} />
      <TextInput placeholder="Kategori" onChangeText={v => setForm({ ...form, kategori: v })} />
      <TextInput placeholder="Deskripsi" onChangeText={v => setForm({ ...form, deskripsi: v })} />
      <TextInput placeholder="Jumlah" onChangeText={v => setForm({ ...form, jumlah: v })} />
      <Button title="Simpan" onPress={() => alert('Transaksi tersimpan!')} />
    </View>
  );
}
