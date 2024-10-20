// components/Header.js
import React from "react"
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import { ArrowLeft, Settings } from "lucide-react-native"

const Header = ({ title }) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity>
        <ArrowLeft color="#000" size={24} />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity>
        <Settings color="#2c7a3f" size={24} />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    backgroundColor: "white",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
})

export default Header
