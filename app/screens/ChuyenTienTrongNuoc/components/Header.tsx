import React from "react"
import { View, Text, TouchableOpacity, StyleSheet, StatusBar } from "react-native"
import { ArrowLeft, Home } from "lucide-react-native"
import { WIDTH } from "@app/config/functions"
import { goBack } from "@app/navigators/navigationUtilities"

const Header = () => (
  <View>
    <StatusBar backgroundColor={"transparent"} translucent barStyle={"dark-content"} />
    <View style={{ height: 40 }} />
    <View style={styles.header}>
      <View style={{ flexDirection: "row", alignItems: "center", gap: 12, flex: 1 }}>
        <TouchableOpacity
          onPress={() => {
            goBack()
          }}
        >
          <ArrowLeft color="#000" size={24} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Chuyển tiền trong nước</Text>
      </View>
      <TouchableOpacity style={styles.headerRight}>
        <Home color="#006840" size={24} />
      </TouchableOpacity>
    </View>
  </View>
)

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: WIDTH(16),
    height: 44,
  },
  headerRight: {},
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
  },
})

export default Header
