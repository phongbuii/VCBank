import React, { useState } from "react"
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Switch,
  StatusBar,
} from "react-native"
import { ArrowLeft, ChevronDown, FileText, Info } from "lucide-react-native"
import { HEIGHT, WIDTH } from "@app/config/functions"

const TransactionInfo = () => (
  <View style={styles.section}>
    <View style={styles.sectionHeader}>
      <Text style={styles.sectionTitle}>Thông tin giao dịch</Text>
      <TouchableOpacity style={{ flexDirection: "row", gap: HEIGHT(8), alignItems: "center" }}>
        <Info color="#2c7a3f" size={16} />
        <Text style={styles.transferTemplateText}>Hạn mức</Text>
      </TouchableOpacity>
    </View>
    <View style={styles.input}>
      <View style={{ gap: 6, flex: 1 }}>
        <Text style={styles.title}>Số tiền</Text>
        <TextInput
          placeholder="Nhập số tiền..."
          style={styles.inputTextPrice}
          keyboardType={"number-pad"}
        />
      </View>

      <View style={{ height: "90%", width: 1, backgroundColor: "#e0e0e0" }} />
      <Text style={styles.textUnit}>VND</Text>
    </View>
    <View style={styles.input}>
      <View style={{ gap: 6 }}>
        <Text style={styles.title}>Nội dung</Text>
        <TextInput placeholder="Nội dung chuyển tiền" style={styles.inputText} />
      </View>
    </View>
  </View>
)

const styles = StyleSheet.create({
  section: {
    marginHorizontal: WIDTH(16),
    gap: HEIGHT(16),
    marginTop: HEIGHT(16),
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#006840",
  },
  transferTemplateText: {
    color: "#2c7a3f",
    fontSize: 14,
  },
  input: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#e0e0e0",
    backgroundColor: "white",
    borderRadius: 12,
    paddingHorizontal: WIDTH(12),
    paddingVertical: HEIGHT(8),
  },
  switchContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    gap: 4,
    alignItems: "center",
  },
  textName: {
    fontSize: 14,
    color: "black",
  },
  title: {
    fontSize: 13,
    color: "gray",
  },
  textSave: {
    fontSize: 14,
    color: "black",
  },
  inputText: {
    height: 16,
    alignItems: "center",
    justifyContent: "center",
    fontSize: 14,
    color: "black",
    paddingVertical: 0,
    paddingLeft: 0,
  },
  inputTextPrice: {
    height: 16,
    alignItems: "center",
    justifyContent: "center",
    fontSize: 14,
    color: "black",
    paddingVertical: 0,
    paddingLeft: 0,
    fontWeight: "700",
  },
  textUnit: {
    width: 80,
    textAlign: "center",
    fontSize: 16,
    color: "black",
    fontWeight: "300",
  },
})

export default TransactionInfo
