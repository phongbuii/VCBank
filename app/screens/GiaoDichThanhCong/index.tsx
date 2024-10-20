import React from "react"
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, Image } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"

const GiaoDichThanhCong = () => {
  const insets = useSafeAreaInsets()

  return (
    <SafeAreaView style={[styles.container, { paddingTop: insets.top }]}>
      <View style={styles.header}>
        <Text style={styles.logo}>VCB Digibank</Text>
        <TouchableOpacity style={styles.profileButton}>
          <View style={styles.profileIcon} />
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <View style={styles.successIcon}>
          <Text style={styles.checkmark}>✓</Text>
        </View>
        <Text style={styles.successText}>Giao dịch thành công!</Text>
        <Text style={styles.amount}>123,456 VND</Text>
        <Text style={styles.date}>09:30, Thứ tư 30/08/2023</Text>

        <View style={styles.detailsCard}>
          <DetailRow label="Tài khoản nhận" value="123 45678 25353" />
          <DetailRow label="Tên người nhận" value="Nguyen Chu Thuy Trang" />
          <DetailRow label="Ngân hàng nhận" value="Vietcombank" />
          <Text style={styles.subBankName}>Ngân hàng TMCP Ngoại thương Việt Nam</Text>
          <DetailRow label="Nội dung" value="Nguyen Van An Chuyen Tien" />
          <DetailRow label="Phí chuyển tiền" value="Miễn phí" />
          <DetailRow label="Hình thức chuyển" value="Chuyển tiền trong Vietcombank" />
          <DetailRow label="Mã giao dịch" value="1234567890" />
        </View>

        <View style={styles.actionButtons}>
          <ActionButton icon="share" label="Chia sẻ" />
          <ActionButton icon="save" label="Lưu ảnh" />
          <ActionButton icon="split" label="Chia hoá đơn" />
        </View>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Phiên bản trải nghiệm VCB Digibank</Text>
      </View>
    </SafeAreaView>
  )
}

const DetailRow = ({ label, value }) => (
  <View style={styles.detailRow}>
    <Text style={styles.detailLabel}>{label}</Text>
    <Text style={styles.detailValue}>{value}</Text>
  </View>
)

const ActionButton = ({ icon, label }) => (
  <TouchableOpacity style={styles.actionButton}>
    <View style={styles.actionIcon} />
    <Text style={styles.actionLabel}>{label}</Text>
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f8f0",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
  },
  logo: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#006f3c",
  },
  profileButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#006f3c",
    justifyContent: "center",
    alignItems: "center",
  },
  profileIcon: {
    width: 24,
    height: 24,
    backgroundColor: "white",
    borderRadius: 12,
  },
  content: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 16,
  },
  successIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#4caf50",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
  },
  checkmark: {
    color: "white",
    fontSize: 30,
  },
  successText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#006f3c",
    marginBottom: 8,
  },
  amount: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#006f3c",
    marginBottom: 8,
  },
  date: {
    fontSize: 14,
    color: "#666",
    marginBottom: 24,
  },
  detailsCard: {
    backgroundColor: "white",
    borderRadius: 8,
    padding: 16,
    width: "100%",
    marginBottom: 24,
  },
  detailRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  detailLabel: {
    color: "#666",
  },
  detailValue: {
    fontWeight: "bold",
  },
  subBankName: {
    color: "#666",
    fontSize: 12,
    marginTop: -8,
    marginBottom: 12,
    textAlign: "right",
  },
  actionButtons: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
  actionButton: {
    alignItems: "center",
  },
  actionIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#e0e0e0",
    marginBottom: 8,
  },
  actionLabel: {
    color: "#006f3c",
  },
  footer: {
    padding: 16,
    alignItems: "center",
  },
  footerText: {
    color: "#666",
    fontSize: 12,
  },
})

export default GiaoDichThanhCong
