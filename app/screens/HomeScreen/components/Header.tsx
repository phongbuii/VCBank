// components/Header.js
import React from "react"
import { View, Text, StyleSheet } from "react-native"
import { Bell, Settings, LogOut } from "lucide-react-native"

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.logo}>VCBDigibank</Text>
      <View style={styles.iconContainer}>
        <Bell color="white" size={24} />
        <View style={styles.notificationBadge}>
          <Text style={styles.badgeText}>2</Text>
        </View>
        <Settings color="white" size={24} style={styles.icon} />
        <LogOut color="white" size={24} style={styles.icon} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#2c7a3f",
    padding: 16,
  },
  logo: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    marginLeft: 16,
  },
  notificationBadge: {
    position: "absolute",
    top: -5,
    right: 55,
    backgroundColor: "red",
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  badgeText: {
    color: "white",
    fontSize: 12,
  },
})

export default Header
