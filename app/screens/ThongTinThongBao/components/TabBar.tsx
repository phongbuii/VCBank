// components/TabBar.js
import React from "react"
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native"

const tabs = ["Biến động", "Thông báo", "Ưu đãi", "Chia sẻ"]

const TabBar = () => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.tabContainer}>
      {tabs.map((tab, index) => (
        <TouchableOpacity key={index} style={[styles.tab, tab === "Thông báo" && styles.activeTab]}>
          <Text style={[styles.tabText, tab === "Thông báo" && styles.activeTabText]}>{tab}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  tabContainer: {
    backgroundColor: "white",
    paddingVertical: 8,
  },
  tab: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginHorizontal: 4,
  },
  activeTab: {
    backgroundColor: "#2c7a3f",
    borderRadius: 16,
  },
  tabText: {
    color: "#000",
  },
  activeTabText: {
    color: "white",
  },
})

export default TabBar
