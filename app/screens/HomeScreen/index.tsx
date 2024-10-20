// App.js
import React from 'react';
import {SafeAreaView, StyleSheet, ScrollView, View} from 'react-native';
import Header from './components/Header';
import AccountCard from './components/AccountCard';
import FavoriteFeatures from './components/FavoriteFeatures';
import ChatWithDigibot from './components/ChatWithDigibot';
import BottomNavigation from './components/BottomNavigation';
import {HEIGHT, WIDTH} from '../../../app/config/functions';
import VCBRewardsCard from './components/VCBRewardsCard';
import PromoCard from './components/PromoCard';
import FinanceManagementCard from './components/FinanceManagementCard';
// import Header from "./components/Header"
// import AccountCard from "./components/AccountCard"
// import FavoriteFeatures from "./components/FavoriteFeatures"
// import BottomNavigation from "./components/BottomNavigation"
// import ChatWithDigibot from "./components/ChatWithDigibot"

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <ScrollView>
        <View style={{height: HEIGHT(24)}} />
        <AccountCard />
        <View style={{height: HEIGHT(24)}} />
        <FavoriteFeatures />
        <View style={{height: HEIGHT(24)}} />
        <View
          style={{
            flexDirection: 'row',
            flex: 1,
            paddingHorizontal: WIDTH(16),
            gap: WIDTH(16),
          }}>
          <VCBRewardsCard onPress={() => {}} points={100} />

          <PromoCard onPress={() => {}} />
        </View>
        <View style={{height: HEIGHT(24)}} />
        <FinanceManagementCard onExplorePress={() => {}} />
        <View style={{height: HEIGHT(24)}} />
      </ScrollView>
      <ChatWithDigibot />
      <BottomNavigation />
    </SafeAreaView>
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
