import React, { useState } from "react"
import {
  Modal,
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from "react-native"
import { X, Search } from "lucide-react-native"

const bankData = [
  { id: "1", name: "Vietcombank", fullName: "Ngân hàng TMCP Ngoại Thương Việt Nam" },
  { id: "2", name: "BIDV", fullName: "Ngân hàng Đầu tư và phát triển Việt Nam" },
  { id: "3", name: "VIETINBANK", fullName: "Ngân hàng Công Thương Việt Nam" },
  { id: "4", name: "AGRIBANK", fullName: "Ngân hàng Nông nghiệp và phát triển nông thôn Việt Nam" },
  { id: "5", name: "ABBANK", fullName: "Ngân hàng An Bình" },
  { id: "6", name: "ACB", fullName: "Ngân hàng Á Châu" },
  { id: "7", name: "ANZ", fullName: "Ngân hàng TNHH Một Thành Viên ANZ Việt Nam" },
  { id: "8", name: "BAC A BANK", fullName: "Ngân hàng Bắc Á" },
  { id: "9", name: "BANGKOK BANK", fullName: "Ngân hàng Bangkok" },
]

const BankItem = ({ item, onSelect }) => (
  <TouchableOpacity style={styles.bankItem} onPress={() => onSelect(item)}>
    <View style={styles.bankLogo}>
      {/* Replace with actual bank logo */}
      <View style={styles.placeholderLogo} />
    </View>
    <View style={styles.bankInfo}>
      <Text style={styles.bankName}>{item.name}</Text>
      <Text style={styles.bankFullName}>{item.fullName}</Text>
    </View>
  </TouchableOpacity>
)

const BankSelectionModal = ({ visible, onClose, onSelectBank }) => {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredBanks = bankData.filter(
    (bank) =>
      bank.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      bank.fullName.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <Modal visible={visible} animationType="slide">
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Chọn ngân hàng</Text>
          <TouchableOpacity onPress={onClose}>
            <X color="#000" size={24} />
          </TouchableOpacity>
        </View>
        <View style={styles.searchContainer}>
          <Search color="#999" size={20} style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Nhập tên ngân hàng"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>
        <FlatList
          data={filteredBanks}
          renderItem={({ item }) => <BankItem item={item} onSelect={onSelectBank} />}
          keyExtractor={(item) => item.id}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
        />
      </SafeAreaView>
    </Modal>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    margin: 16,
    padding: 8,
    backgroundColor: "#f0f0f0",
    borderRadius: 8,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
  },
  bankItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
  },
  bankLogo: {
    marginRight: 16,
  },
  placeholderLogo: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#e0e0e0",
  },
  bankInfo: {
    flex: 1,
  },
  bankName: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },
  bankFullName: {
    fontSize: 14,
    color: "#666",
  },
  separator: {
    height: 1,
    backgroundColor: "#e0e0e0",
  },
})

export default BankSelectionModal
