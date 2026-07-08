import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DashboardScreen from './screens/DashboardScreen';
import TransaksiScreen from './screens/TransaksiScreen';
import LaporanScreen from './screens/LaporanScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Dashboard" component={DashboardScreen} />
        <Tab.Screen name="Transaksi" component={TransaksiScreen} />
        <Tab.Screen name="Laporan" component={LaporanScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
