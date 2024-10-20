import React, { useState } from "react"
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextStyle,
  ViewStyle,
} from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import R from "@app/assets/index"
import OTPPopup from "./components/OTPPopupProps"
import BankSelectionModal from "./components/ModalListBank"
interface DetailRowProps {
  label: string
  value: string
  valueStyle?: TextStyle
}

const DetailRow: React.FC<DetailRowProps> = ({ label, value, valueStyle }) => (
  <View style={styles.detailRow}>
    <Text style={styles.detailLabel}>{label}</Text>
    <Text style={[styles.detailValue, valueStyle]}>{value}</Text>
  </View>
)

const ChiTietChuyenTien = () => {
  const insets = useSafeAreaInsets()
  const [openOTP, setOpenOTP] = useState(false)
  const [modalVisible, setModalVisible] = useState(false)
  const [selectedBank, setSelectedBank] = useState(null)
  return (
    <SafeAreaView style={[styles.container, { paddingTop: insets.top }]}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Text style={styles.backButtonText}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Chuyển tiền trong nước</Text>
        <TouchableOpacity style={styles.menuButton}>
          <Text style={styles.menuButtonText}>☰</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <View style={styles.infoBox}>
          <Image
            source={{ uri: "https://cdn-icons-png.flaticon.com/512/1176/1176733.png" }}
            style={styles.infoIcon}
          />
          <Text style={styles.infoText}>
            Quý khách vui lòng kiểm tra và xác nhận thông tin giao dịch
          </Text>
        </View>

        <View style={styles.transferDetails}>
          <DetailRow label="Hình thức chuyển" value="Chuyển tiền trong Vietcombank" />
          <DetailRow label="Tài khoản nguồn" value="121 21212 55666" />
          <DetailRow label="Tài khoản nhận" value="123 45678 25353" />
          <DetailRow
            label="Tên người nhận"
            value="Nguyen Chu Thuy Trang"
            valueStyle={styles.redText}
          />
          <DetailRow
            label="Ngân hàng nhận"
            value="Vietcombank"
            // onPress={() => setModalVisible(true)}
          />
          <Text style={styles.subBankName}>Ngân hàng TMCP Ngoại thương Việt Nam</Text>
          <DetailRow label="Nội dung" value="Nguyen Van An Chuyen Tien" />
          <DetailRow label="Phí chuyển tiền" value="Miễn phí" />
          <DetailRow label="Số tiền" value="123,456 VND" valueStyle={styles.redText} />
          <Text style={styles.amountInWords}>
            (Một trăm hai mươi ba nghìn bốn trăm năm mươi sáu đồng (chẵn))
          </Text>
        </View>

        <View style={styles.verificationMethod}>
          <Text style={styles.verificationLabel}>Phương thức xác thực</Text>
          <TouchableOpacity style={styles.smsOtpButton}>
            <Text style={styles.smsOtpText}>SMS OTP</Text>
            <Text style={styles.dropdownIcon}>▼</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={() => setOpenOTP(true)} style={styles.confirmButton}>
          <Text style={styles.confirmButtonText}>Xác nhận</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Phiên bản trải nghiệm VCB Digibank</Text>
      </View>
      <OTPPopup
        onClose={() => {
          setOpenOTP(false)
        }}
        onConfirm={() => {}}
        phoneNumber={"1"}
        isVisible={openOTP}
      />
      <BankSelectionModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onSelectBank={(bank) => {
          setSelectedBank(bank)
          setModalVisible(false)
        }}
      />
    </SafeAreaView>
  )
}

interface Styles {
  container: ViewStyle
  header: ViewStyle
  backButton: ViewStyle
  backButtonText: TextStyle
  headerTitle: TextStyle
  menuButton: ViewStyle
  menuButtonText: TextStyle
  content: ViewStyle
  infoBox: ViewStyle
  infoIcon: ViewStyle
  infoText: TextStyle
  transferDetails: ViewStyle
  detailRow: ViewStyle
  detailLabel: TextStyle
  detailValue: TextStyle
  redText: TextStyle
  subBankName: TextStyle
  amountInWords: TextStyle
  verificationMethod: ViewStyle
  verificationLabel: TextStyle
  smsOtpButton: ViewStyle
  smsOtpText: TextStyle
  dropdownIcon: TextStyle
  confirmButton: ViewStyle
  confirmButtonText: TextStyle
  footer: ViewStyle
  footerText: TextStyle
}

const styles = StyleSheet.create<Styles>({
  container: {
    flex: 1,
    backgroundColor: "#f0f8f0",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },
  backButton: {
    padding: 8,
  },
  backButtonText: {
    fontSize: 24,
    color: "#006f3c",
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#006f3c",
  },
  menuButton: {
    padding: 8,
  },
  menuButtonText: {
    fontSize: 24,
    color: "#006f3c",
  },
  content: {
    flex: 1,
    padding: 16,
  },
  infoBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#e8f5e9",
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
  },
  infoIcon: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  infoText: {
    flex: 1,
    color: "#2e7d32",
    fontSize: 14,
  },
  transferDetails: {
    backgroundColor: "white",
    borderRadius: 8,
    padding: 16,
    marginBottom: 24,
  },
  detailRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  detailLabel: {
    color: "#666",
    flex: 1,
  },
  detailValue: {
    fontWeight: "bold",
    flex: 1,
    textAlign: "right",
  },
  redText: {
    color: "red",
  },
  subBankName: {
    color: "#666",
    fontSize: 12,
    marginTop: -8,
    marginBottom: 12,
    textAlign: "right",
  },
  amountInWords: {
    color: "red",
    fontSize: 12,
    marginTop: -8,
    textAlign: "right",
  },
  verificationMethod: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
  },
  verificationLabel: {
    color: "#666",
  },
  smsOtpButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#e0e0e0",
    borderRadius: 16,
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  smsOtpText: {
    color: "#006f3c",
    marginRight: 8,
  },
  dropdownIcon: {
    color: "#006f3c",
  },
  confirmButton: {
    backgroundColor: "#4caf50",
    borderRadius: 8,
    padding: 16,
    alignItems: "center",
  },
  confirmButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  footer: {
    padding: 16,
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "#e0e0e0",
  },
  footerText: {
    color: "#666",
    fontSize: 12,
  },
})

export default ChiTietChuyenTien
