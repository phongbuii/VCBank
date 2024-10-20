// components/NotificationItem.js
import React from "react"
import { View, Text, StyleSheet } from "react-native"
import { CheckCheck } from "lucide-react-native"

const NotificationItem = () => {
  return (
    <View style={styles.notificationContainer}>
      <View style={styles.notificationHeader}>
        <Text style={styles.date}>15/10/2024 • 17:10</Text>
        <CheckCheck color="#2c7a3f" size={20} />
      </View>
      <Text style={styles.title}>THÔNG BÁO ĐIỂM VCB REWARDS SẮP HẾT HẠN</Text>
      <Text style={styles.greeting}>Kính gửi Quý khách DO THI HIEN,</Text>
      <Text style={styles.content}>
        Vietcombank trân trọng thông báo: tính đến ngày 15/10/2024, Quý khách có 1,000 điểm VCB
        Rewards sẽ hết hạn sử dụng vào ngày 31/10/2024.
      </Text>
      <Text style={styles.content}>
        Hãy giao dịch nhiều hơn để tích lũy đủ tối thiểu 20,000 điểm VCB Rewards và đổi thành nhiều
        quà tặng hấp dẫn tại tính năng VCB Rewards trên VCB Digibank qua các cách sau:
      </Text>
      <View style={styles.bulletPoints}>
        <Text style={styles.bulletPoint}>
          • Giao dịch Thanh toán hóa đơn hoặc Mua sắm trên VCB Digibank
        </Text>
        <Text style={styles.bulletPoint}>• Giao dịch Chi tiêu thẻ</Text>
        <Text style={styles.bulletPoint}>• Tham gia Chương trình khảo sát của Vietcombank</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  notificationContainer: {
    backgroundColor: "white",
    margin: 16,
    padding: 16,
    borderRadius: 8,
  },
  notificationHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  date: {
    color: "#999",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },
  greeting: {
    marginBottom: 8,
  },
  content: {
    marginBottom: 8,
  },
  bulletPoints: {
    marginLeft: 8,
  },
  bulletPoint: {
    marginBottom: 4,
  },
})

export default NotificationItem
