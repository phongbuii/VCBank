// App.js
import React from 'react';
import {SafeAreaView, StyleSheet, ScrollView, View, Image} from 'react-native';
import Header from './components/Header';
import AccountCard from './components/AccountCard';
import FavoriteFeatures from './components/FavoriteFeatures';
import ChatWithDigibot from './components/ChatWithDigibot';
import BottomNavigation from './components/BottomNavigation';
import {HEIGHT, WIDTH} from '../../../app/config/functions';
import VCBRewardsCard from './components/VCBRewardsCard';
import PromoCard from './components/PromoCard';
import FinanceManagementCard from './components/FinanceManagementCard';
import {images} from './assets';
import VCBNew from './components/VCBNew';
// import Header from "./components/Header"
// import AccountCard from "./components/AccountCard"
// import FavoriteFeatures from "./components/FavoriteFeatures"
// import BottomNavigation from "./components/BottomNavigation"
// import ChatWithDigibot from "./components/ChatWithDigibot"

const App = () => {
  return (
    <View style={styles.container}>
      <ScrollView style={{}}>
        <View style={{zIndex: 1}}>
          <Header />
        </View>
        <View style={{marginTop: -HEIGHT(15), zIndex: 1000}}>
          <AccountCard />
        </View>
        <View style={{height: HEIGHT(24)}} />
        <FavoriteFeatures />
        <View style={{height: HEIGHT(24)}} />
        <View
          style={{
            flexDirection: 'row',
            flex: 1,
            paddingHorizontal: WIDTH(16),
            gap: WIDTH(16),
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <VCBRewardsCard onPress={() => {}} points={100} />
          <PromoCard onPress={() => {}} />
        </View>
        <View style={{height: HEIGHT(24)}} />
        <FinanceManagementCard onExplorePress={() => {}} />
        <View style={{height: HEIGHT(24)}} />
        <VCBNew />
      </ScrollView>
      <ChatWithDigibot />
      <BottomNavigation />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    paddingBottom: 60,
  },
});

export default App;
