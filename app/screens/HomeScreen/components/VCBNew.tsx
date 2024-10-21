import { WIDTH } from '../../../../app/config/functions';
import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const VCBNew = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerText}>Cập nhật: 8:00 - 19/08/2023</Text>
          <Icon name="refresh" size={24} color="#4CAF50" />
        </View>

        {/* New Features Section */}
        <Text style={styles.sectionTitle}>Mới nhất trên VCB Digibank</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.newFeaturesScroll}>
          <TouchableOpacity style={[styles.newFeatureItem,{flexDirection:"row",justifyContent:"center"}]}>
                      <Icon name="chart-pie" size={24} color="#4CAF50" />
                      <View>
                          <View style ={{padding:4,borderRadius:38,backgroundColor:"red",alignItems:"center",justifyContent:"center",width:WIDTH(30),height:WIDTH(20)}} >
                          <Text style ={{color:"#fff"}} >Mới</Text>
                              
                          </View>
            <Text>Quản lý chi tiêu</Text>
                      </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.newFeatureItem}>
            <Icon name="home-account" size={24} color="#4CAF50" />
            <Text>VCB Family</Text>
          </TouchableOpacity>
        </ScrollView>

        {/* Promotion Banner */}
        <View style={styles.promotionBanner}>
          <Image
            source={{uri: 'https://example.com/promotion-image.jpg'}}
            style={styles.promotionImage}
          />
          <View style={styles.promotionContent}>
            <Text style={styles.promotionTitle}>Miễn phí thường niên 1 năm cho gói Family</Text>
            <TouchableOpacity style={styles.promotionButton}>
              <Text style={styles.promotionButtonText}>Khám phá ngay</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Quick Actions */}
        <Text style={styles.sectionTitle}>Mua sắm liền tay</Text>
        <View style={styles.quickActions}>
          <TouchableOpacity style={styles.quickActionItem}>
            <Icon name="ticket" size={24} color="#4CAF50" />
            <Text>Đặt vé xe</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.quickActionItem}>
            <Icon name="flower" size={24} color="#4CAF50" />
            <Text>Đặt hoa</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.quickActionItem}>
            <Icon name="train" size={24} color="#4CAF50" />
            <Text>Đặt vé tàu</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.quickActionItem}>
            <Icon name="movie" size={24} color="#4CAF50" />
            <Text>Đặt vé xem phim</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Trial Version Banner */}
 
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  headerText: {
    fontSize: 14,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    padding: 16,
  },
  newFeaturesScroll: {
    paddingLeft: 16,
  },
  newFeatureItem: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 8,
    marginRight: 16,
    alignItems: 'center',
  },
  promotionBanner: {
    margin: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    overflow: 'hidden',
  },
  promotionImage: {
    width: '100%',
    height: 150,
  },
  promotionContent: {
    padding: 16,
  },
  promotionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  promotionButton: {
    backgroundColor: '#4CAF50',
    padding: 8,
    borderRadius: 4,
    alignSelf: 'flex-start',
  },
  promotionButtonText: {
    color: '#FFFFFF',
  },
  quickActions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    padding: 16,
  },
  quickActionItem: {
    alignItems: 'center',
    width: '25%',
    marginBottom: 16,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 16,
    backgroundColor: '#FFFFFF',
  },
  bottomNavItem: {
    alignItems: 'center',
  },
  trialBanner: {
    backgroundColor: '#FF9800',
    padding: 8,
    alignItems: 'center',
  },
  trialText: {
    color: '#FFFFFF',
  },
});

export default VCBNew;