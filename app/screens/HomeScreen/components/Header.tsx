// components/Header.js
import React from "react"
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from "react-native"
import { Bell, Settings, LogOut } from "lucide-react-native"
import { getWidth, HEIGHT, WIDTH } from "../../../../app/config/functions"
import { images } from "../assets"

const Header = () => {
  return (
       <ImageBackground resizeMode="stretch" source={images.image_11} style ={{height:HEIGHT(200),width:getWidth()}} >
      <Text style={styles.logo}></Text>
      <View style={styles.iconContainer}>
        <View style={styles.iconWrapper}>
          <TouchableOpacity style ={{height:HEIGHT(32),width:WIDTH(32),opacity:0.3,backgroundColor:"rgba(255, 255, 255, 0.09)",borderRadius:20}} />
        </View>
                  <TouchableOpacity style ={{height:HEIGHT(30),width:WIDTH(30),opacity:0.3,backgroundColor:"rgba(255, 255, 255, 0.1)",borderRadius:20,marginTop:-HEIGHT(15),marginRight:WIDTH(10)}} />

                 <TouchableOpacity style ={{height:HEIGHT(30),width:WIDTH(30),opacity:0.3,backgroundColor:"rgba(255, 255, 255, 0.1)",borderRadius:20,marginTop:-HEIGHT(10)}} />

        </View>
        </ImageBackground>
  )
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#2c7a3f",
    padding: 16,
  },


  icon: {
    marginLeft: 16,
  },
  notificationBadge: {
    position: "absolute",
    top: -5,
    right: 55,
    backgroundColor: "red",
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  badgeText: {
    color: "white",
    fontSize: 12,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // padding: 16,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  logo: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: "flex-end",
    paddingRight: WIDTH(20),
    // paddingTop:-HEIGHT(20)
  },
  iconWrapper: {
    marginRight: 16,
    position: 'relative',
    marginTop:- HEIGHT(10)
  },
 
  badge: {
    position: 'absolute',
    top: -5,
    right: -5,
    backgroundColor: 'red',
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },

})

export default Header
