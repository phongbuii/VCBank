// components/SearchBar.js
import React from "react"
import { View, TextInput, StyleSheet } from "react-native"
import { Search } from "lucide-react-native"

const SearchBar = () => {
  return (
    <View style={styles.searchContainer}>
      <Search color="#999" size={20} />
      <TextInput
        style={styles.searchInput}
        placeholder="Tìm kiếm thông báo"
        placeholderTextColor="#999"
      />
    </View>
  )
}

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    margin: 16,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 8,
    paddingLeft: 8,
  },
})

export default SearchBar
