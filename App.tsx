import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import navigationService from './app/navigator/navigationService';
import ChiTietChuyenTien from './app/screens/ChiTietChuyenTien';
import HomeScreen from './app/screens/HomeScreen';
import ChuyenTienTrongNuoc from './app/screens/ChuyenTienTrongNuoc';
import GiaoDichThanhCong from './app/screens/GiaoDichThanhCong';
import ThongTinThongBao from './app/screens/ThongTinThongBao';
import QRScannerScreen from './app/screens/QRScannerScreen';
// import QRScannerScreen from './app/screens/QRScannerScreen';
const Stack = createStackNavigator();
const config = {
  animation: 'timing',
  config: {
    duration: 300,
    stiffness: 1000,
    damping: 300,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};
const options = {
  headerShown: false,
  header: false,
  gestureDirection: 'horizontal',
  transitionSpec: {
    open: config,
    close: config,
  },
};

const AppRouter = () => {
  return (
    <NavigationContainer
      ref={navigatorRef => {
        navigationService.setTopLevelNavigator(navigatorRef);
      }}>
      <Stack.Navigator
        initialRouteName="HomeScreen"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen
          name="ChuyenTienTrongNuoc"
          component={ChuyenTienTrongNuoc}
        />

        <Stack.Screen name="ChiTietChuyenTien" component={ChiTietChuyenTien} />
        <Stack.Screen name="ThongTinThongBao" component={ThongTinThongBao} />
        <Stack.Screen name="QRScannerScreen" component={QRScannerScreen} />
        <Stack.Screen name="GiaoDichThanhCong" component={GiaoDichThanhCong} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppRouter;
