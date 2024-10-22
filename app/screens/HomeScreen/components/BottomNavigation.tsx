import {StyleSheet, Text, View,Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Svg, {G, Path, Circle, Defs, ClipPath, } from 'react-native-svg';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { HEIGHT, WIDTH } from '../../../../app/config/functions';
import LinearGradient from 'react-native-linear-gradient';
import { images } from '../assets';

const SvgComponent = () => {
  const height = 70;
  const width = Math.round(height * (620 / 351));

  return (
    <View style={styles.svgContainer}>
      <Svg width={width} height={height} viewBox="0 0 620 351">
        <G fill="#fff" clipPath="url(#a)">
          <Path
            fillRule="evenodd"
            d="m116.207 51 29.052.068c24.33 23.846 54.97 38.091 88.271 38.162 33.282.07 63.931-14.029 88.298-37.748l30.172.071-.207 250.461-23.156-.054c-25.775-25.292-58.705-40.503-94.596-40.591-35.902-.088-68.864 14.969-94.682 40.147L116 301.461 116.207 51Z"
            clipRule="evenodd"
          />
          <Circle cx={445} cy={175} r={175} />
          <Path d="M0 1h21c96.65 0 175 78.35 175 175S117.65 351 21 351H0V1Z" />
        </G>
        <Defs>
          <ClipPath id="a">
            <Path fill="#fff" d="M0 0h620v351H0z" />
          </ClipPath>
        </Defs>
      </Svg>
      <View style={styles.svgIcons}>
        <TouchableOpacity style={[styles.iconContainer,{marginLeft:-5}]}>
          {/* <MaterialCommunityIcons name="robot" size={36} color="#666666" /> */}
          <Image source={images.image_27} style ={{height:HEIGHT(42),width:HEIGHT(42)}} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default function TabBottom({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <View style={styles.leftContent}>
          <TouchableOpacity style={styles.iconContainer}>
            {/* <MaterialIcons name="home" size={26} color="#666666" /> */}
            <Image source={images.image_13} style ={{height:HEIGHT(26),width:WIDTH(26)}}  />
            <Text style={styles.iconText}>Trang chủ</Text>
          </TouchableOpacity>
         <TouchableOpacity onPress={()=>navigation.navigate("QRScannerScreen")} >
          <LinearGradient
      style={styles.container}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      colors={['rgb(138,178,66)', 'rgb(117,156,62)',"rgb(117,156,62)", "rgb(117,156,62)",'rgb(117,156,62)',"rgb(121,161,66)", 'rgb(117,156,62)']}
            style={[
              styles.iconContainer,
              {
                backgroundColor: '#209e60',
                borderRadius: 70,
                height: HEIGHT(55),
                width: HEIGHT(55)
              },
            ]}>
            
            <MaterialCommunityIcons name="qrcode-scan" size={26} color="#fff" />
            </LinearGradient>
            </TouchableOpacity>
          <TouchableOpacity style={styles.iconContainer}>
            <Ionicons name="settings-outline" size={26} color="#101010" />
            <Text style={[styles.iconText,{color:"#101010"}]}>Cài đặt</Text>
          </TouchableOpacity>
        </View>
      </View>
      <SvgComponent />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 393, // Decreased from 443
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
  },
  leftContainer: {
    width: 260, // Decreased from 300
    height: 70, // Decreased from 80
    backgroundColor: '#fff',
    borderTopLeftRadius: 90, // Decreased from 100
    borderBottomLeftRadius: 90, // Decreased from 100
    justifyContent: 'center',
  },
  leftContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 14, // Decreased from 16
    paddingLeft: 35, // Decreased from 40
    width: 260, // Decreased from 300
  },
  svgContainer: {
    position: 'relative',
    marginLeft: -2,
  },
  svgIcons: {
    position: 'absolute',
    top: 0,
    left: 72, // Adjusted from 82
    right: 0,
    bottom: 0,
    flexDirection: 'row',
    zIndex: 100,
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconText: {
    fontSize: 11,
    color: '#666666',
    marginTop: 4,
  },
});