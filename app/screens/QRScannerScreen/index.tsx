import { HEIGHT } from '../../../app/config/functions';
import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image,
  StatusBar,
  Dimensions,
  Animated,
  Easing,
} from 'react-native';
import { RNCamera } from 'react-native-camera';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';

const { width } = Dimensions.get('window');
const SCREEN_WIDTH = width;

const QRScannerScreen = ({ navigation }) => {
  const [torchOn, setTorchOn] = useState(false);
 const barPosition = new Animated.Value(0);
  const onBarCodeRead = (event) => {
    // Handle QR code scan result
    console.log('QR Code detected:', event.data);
  };
 useEffect(() => {
    // Create sequence animation: up then down
    const sequence = Animated.sequence([
      // Move up
      Animated.timing(barPosition, {
        toValue: 1,
        duration: 1000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
      // Move down
      Animated.timing(barPosition, {
        toValue: 0,
        duration: 1000,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ]);

    // Create loop animation
    Animated.loop(sequence).start();
 }, []);
   const translateY = barPosition.interpolate({
    inputRange: [0, 1],
    outputRange: [250, 0] // 150 is square height - bar height
  });
  const renderHeader = () => (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Icon name="arrow-back" size={24} color="#fff" />
      </TouchableOpacity>
      <Text style={[styles.headerTitle,{color:"#fff"}]}>Quét mã QR</Text>
      <View style={styles.headerRight}>
        <TouchableOpacity 
          style={styles.iconButton}
          onPress={() => setTorchOn(!torchOn)}
        >
          <Icon name={torchOn ? "flash-on" : "flash-on"} size={24} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <Icon name="settings" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );

  const renderQRFrame = () => (
    <View style={styles.qrContainer}>
      <Text style={styles.qrTitle}>VCBDigibank</Text>
      <Text style={styles.qrSubtitle}>
        Quét mã QR để thanh toán, chuyển tiền và{'\n'}rút tiền mặt tại hệ thống ATM
      </Text>
      <View style={styles.cameraContainer}>
               <Animated.View 
          style={[
            styles.shadowBar,
            {
              transform: [{ translateY }],
              opacity: 0.8, // Opacity for shadow effect,
              height: HEIGHT(10),
              zIndex: 1000,
              width: "70%",
            }
          ]} 
          />
                     <Animated.View 
          style={[
            styles.shadowBar,
            {
              transform: [{ translateY }],
              opacity: 0.3, // Opacity for shadow effect
              backgroundColor: "#a9faa5",
              zIndex:1000
            }
          ]} 
        />
        <RNCamera
          style={[styles.camera,{width:"70%",alignSelf:"center",borderRadius:50,height:320}]}
          type={RNCamera.Constants.Type.back}
          flashMode={
            torchOn
              ? RNCamera.Constants.FlashMode.torch
              : RNCamera.Constants.FlashMode.off
          }
          androidCameraPermissionOptions={{
            title: 'Permission to use camera',
            message: 'We need your permission to use your camera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
          onBarCodeRead={onBarCodeRead}
        >
        
          {/* <View style={styles.scanFrame}>
            <View style={styles.cornerTL} />
            <View style={styles.cornerTR} />
            <View style={styles.cornerBL} />
            <View style={styles.cornerBR} />
          </View> */}
        </RNCamera>
      </View>
    </View>
  );

  const renderPaymentMethods = () => (
    <View style={styles.paymentMethods}>
      <View style={styles.paymentLogos}>
        <Image 
          source={require('./assets/8.png')} 
          style={{height:HEIGHT(80)}} 
          resizeMode="contain"
        />
       
      </View>
    </View>
  );

  const renderBottomButtons = () => (
    <View style={styles.bottomButtons}>
       <LinearGradient
     style={[styles.discountButton]}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      colors={['#d8ebeb', '#dfebeb', '#fff']}>
      <TouchableOpacity style={ {flexDirection:"row",alignItems:"center"}} >
        <Image source={require("./assets/5.png")} />
         <Text style={styles.buttonText}>  Mã giảm giá</Text>
        </TouchableOpacity>
      </LinearGradient>
           <LinearGradient
     style={styles.receiveButton}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      colors={['#d8ebeb', '#dfebeb', '#fff']}>
        <TouchableOpacity style={ {flexDirection:"row",alignItems:"center"}} >
        <Icon name="qr-code" size={20} color="#4CAF50" />
        <Text style={styles.buttonText}>  QR nhận tiền</Text>
        </TouchableOpacity>
        </LinearGradient>
    </View>
  );

  const renderNavigationBar = () => (
    <View style={styles.navigationBar}>
      <TouchableOpacity style={styles.navItem}>
   <Image source={require("./assets/1.png")} />
        <Text style={styles.navText}>Chọn ảnh{'\n'}mã QR</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem}>
       <Image source={require("./assets/2.png")} />
        <Text style={styles.navText}>Lịch sử{'\n'}giao dịch</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem}>
        <Image source={require("./assets/3.png")} />
        <Text style={styles.navText}>Điểm{'\n'}thanh toán</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      {renderHeader()}
      {renderQRFrame()}
      {renderPaymentMethods()}
      {renderBottomButtons()}
      {renderNavigationBar()}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.7)",
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,

  },
  backButton: {
    padding: 8,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
  headerRight: {
    flexDirection: 'row',
  },
  iconButton: {
    padding: 8,
    marginLeft: 8,
  },
  qrContainer: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 20,
  },
  qrTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    color:"#fff"
  },
  qrSubtitle: {
    textAlign: 'center',
    color: '#fff',
    marginBottom: 20,
  },
  cameraContainer: {
    width: SCREEN_WIDTH,
    height: SCREEN_WIDTH,
    overflow: 'hidden',
  },
  camera: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  scanFrame: {
    width: SCREEN_WIDTH * 0.7,
    height: SCREEN_WIDTH * 0.7,
    borderWidth: 2,
    borderColor: '#4CAF50',
    backgroundColor: 'transparent',
    position: 'relative',
    margin:20
  },
  cornerTL: {
    position: 'absolute',
    top: -2,
    left: -2,
    width: 20,
    height: 20,
    borderTopWidth: 4,
    borderLeftWidth: 4,
    borderColor: '#4CAF50',
  },
  cornerTR: {
    position: 'absolute',
    top: -2,
    right: -2,
    width: 20,
    height: 20,
    borderTopWidth: 4,
    borderRightWidth: 4,
    borderColor: '#4CAF50',
  },
  cornerBL: {
    position: 'absolute',
    bottom: -2,
    left: -2,
    width: 20,
    height: 20,
    borderBottomWidth: 4,
    borderLeftWidth: 4,
    borderColor: '#4CAF50',
  },
  cornerBR: {
    position: 'absolute',
    bottom: -2,
    right: -2,
    width: 20,
    height: 20,
    borderBottomWidth: 4,
    borderRightWidth: 4,
    borderColor: '#4CAF50',
  },
  paymentMethods: {
    padding: 16,
  },
  paymentLogos: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 16,
  },
  paymentLogo: {
    width: 50,
    height: 30,
  },
  bottomButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 16,
  },
  discountButton: {
    backgroundColor: '#E8F5E9',
    padding: 12,
    borderRadius: 20,
    width: '45%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  receiveButton: {
    backgroundColor: '#E8F5E9',
    padding: 12,
    borderRadius: 20,
    width: '45%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  buttonText: {
    color: '#4CAF50',
    fontWeight: '500',
  },
  navigationBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 16,
    borderTopWidth: 1,
    backgroundColor:"rgba(128,128,128,0.9)"
  },
  navItem: {
    alignItems: 'center',
  },
  navText: {
    fontSize: 12,
    textAlign: 'center',
    color: '#fff',
    marginTop: 4,
  },
  versionText: {
    textAlign: 'center',
    color: '#666',
    padding: 8,
    backgroundColor: '#E8F5E9',
  },
    bar: {
    width: '100%',
    height:10,
    backgroundColor: 'rgb(117,156,62)',
  },
      shadowBar: {
    width:"70%",
    height: 20,
    backgroundColor: 'rgb(117,156,62)',
    position: 'absolute',
    transform: [{ translateY: 5 }], // Offset shadow slightly
        borderRadius: 4,
    alignSelf:"center"
  },
});

export default QRScannerScreen;