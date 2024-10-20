// components/ChatWithDigibot.js
import React from "react"
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import { MessageCircle } from "lucide-react-native"

const ChatWithDigibot = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.chatButton}>
        <MessageCircle color="white" size={24} />
        <Text style={styles.chatText}>Chat với Digibot!</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 80,
    right: 16,
  },
  chatButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#333",
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  chatText: {
    color: "white",
    marginLeft: 8,
    fontWeight: "bold",
  },
})

export default ChatWithDigibot
