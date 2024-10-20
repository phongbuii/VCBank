// NotificationScreen.js
import React from "react"
import { SafeAreaView, View, Text, StyleSheet, ScrollView } from "react-native"
import Header from "./components/Header"
import TabBar from "./components/TabBar"
import SearchBar from "./components/SearchBar"
import InternetConnectionAlert from "./components/InternetConnectionAlert"
import NotificationItem from "./components/NotificationItem"

const ThongTinThongBao = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Thông tin Vietcombank" />
      <ScrollView>
        <TabBar />
        <SearchBar />
        <InternetConnectionAlert />
        <NotificationItem />
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
  },
})

export default ThongTinThongBao
