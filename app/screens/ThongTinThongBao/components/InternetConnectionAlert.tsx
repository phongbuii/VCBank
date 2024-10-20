// components/InternetConnectionAlert.js
import React from "react"
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import { Info, X } from "lucide-react-native"

const InternetConnectionAlert = () => {
  return (
    <View style={styles.alertContainer}>
      <View style={styles.alertContent}>
        <Info color="#2c7a3f" size={20} />
        <Text style={styles.alertText}>
          Quý khách vui lòng duy trì tình trạng kết nối Internet để có thể nhận được các thông báo
          mới nhất từ Vietcombank
        </Text>
      </View>
      <TouchableOpacity>
        <X color="#999" size={20} />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  alertContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#e6f3e6",
    margin: 16,
    padding: 12,
    borderRadius: 8,
  },
  alertContent: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  alertText: {
    flex: 1,
    marginLeft: 8,
    fontSize: 12,
    color: "#2c7a3f",
  },
})

export default InternetConnectionAlert
