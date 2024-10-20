import React, { useState, useEffect, useRef } from "react"
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native"
import { useCameraDevices, Camera, CameraPermissionRequestResult } from "react-native-vision-camera"
import {
  ArrowLeft,
  Zap,
  Settings,
  Percent,
  QrCode,
  CreditCard,
  Image as ImageIcon,
  Clock,
  MapPin,
} from "lucide-react-native"

const QRScannerScreen = () => {
  const [hasPermission, setHasPermission] = useState(false)
  // const devices = useCameraDevices()
  // const device = devices
  useEffect(() => {
    ;(async () => {
      const status: CameraPermissionRequestResult = await Camera.requestCameraPermission()
      setHasPermission(status == "granted")
    })()
  }, [])

  if (!hasPermission) {
    return <Text>No access to camera</Text>
  }

  // if (!device) {
  //   return <Text>No camera device found</Text>
  // }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <ArrowLeft color="white" size={24} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Quét mã QR</Text>
        <View style={styles.headerRight}>
          <TouchableOpacity style={styles.headerIcon}>
            <Zap color="white" size={24} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.headerIcon}>
            <Settings color="white" size={24} />
          </TouchableOpacity>
        </View>
      </View>

      <Text style={styles.appTitle}>VCBDigibank</Text>
      <Text style={styles.description}>
        Quét mã QR để thanh toán, chuyển tiền và rút tiền mặt tại hệ thống ATM
      </Text>

      <View style={styles.cameraContainer}>
        <Camera
          style={styles.camera}
          device={device}
          isActive={true}

          // frameProcessor={frameProcessor}
          // frameProcessorFps={5}
        />
        <View style={styles.overlay}>
          <View style={styles.scanArea} />
        </View>
      </View>

      <View style={styles.logoContainer}>
        <Text style={styles.logoText}>VietQR</Text>
        <Text style={styles.logoText}>VNPAY</Text>
        <Text style={styles.logoText}>napas 247</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Mã giảm giá</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.whiteButton]}>
          <Text style={[styles.buttonText, styles.darkText]}>QR nhận tiền</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <CreditCard color="white" size={24} />
          <Text style={styles.navText}>ApplePay</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <ImageIcon color="white" size={24} />
          <Text style={styles.navText}>Chọn ảnh mã QR</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Clock color="white" size={24} />
          <Text style={styles.navText}>Lịch sử giao dịch</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <MapPin color="white" size={24} />
          <Text style={styles.navText}>Điểm thanh toán</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
  },
  headerTitle: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  headerRight: {
    flexDirection: "row",
  },
  headerIcon: {
    marginLeft: 16,
  },
  appTitle: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 16,
  },
  description: {
    color: "white",
    textAlign: "center",
    marginHorizontal: 32,
    marginTop: 8,
  },
  cameraContainer: {
    flex: 1,
    marginTop: 32,
    overflow: "hidden",
  },
  camera: {
    flex: 1,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
  },
  scanArea: {
    width: 250,
    height: 250,
    borderWidth: 2,
    borderColor: "white",
    borderRadius: 16,
  },

  logo: {
    width: 60,
    height: 30,
    marginHorizontal: 8,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 16,
  },

  whiteButton: {
    backgroundColor: "white",
  },

  darkText: {
    color: "#000",
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 16,
    borderTopWidth: 1,
    borderTopColor: "#333",
  },
  navItem: {
    alignItems: "center",
  },
  navIcon: {
    width: 24,
    height: 24,
    marginBottom: 4,
  },
  navText: {
    color: "white",
    fontSize: 12,
  },
  logoContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginVertical: 16,
  },
  logoText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#4CAF50",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 24,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    marginLeft: 8,
  },
})

export default QRScannerScreen
