// components/BottomNavigation.js
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Package, QrCode, Settings} from 'lucide-react-native';

const BottomNavigation = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.navItem}>
        <Package color="#2c7a3f" size={24} />
        <Text style={styles.navText}>Sản phẩm</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem}>
        <View style={styles.qrContainer}>
          <QrCode color="white" size={24} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem}>
        <Settings color="#2c7a3f" size={24} />
        <Text style={styles.navText}>Cài đặt</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingVertical: 8,
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  },
  navItem: {
    alignItems: 'center',
  },
  navText: {
    fontSize: 12,
    marginTop: 4,
    color: '#2c7a3f',
  },
  qrContainer: {
    backgroundColor: '#2c7a3f',
    borderRadius: 20,
    padding: 8,
  },
});

export default BottomNavigation;
