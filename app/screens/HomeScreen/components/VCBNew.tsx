import {getWidth, HEIGHT, WIDTH} from '../../../../app/config/functions';
import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {images} from '../assets';

const VCBNew = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* Header */}
        <View
          style={{
            flexDirection: 'row',
            alignSelf: 'flex-end',
          }}>
          <Text style={styles.headerText}>Cập nhật: 8:00 - 19/08/2023</Text>
          <TouchableOpacity>
            <Image
              source={images.image_17}
              style={{
                height: HEIGHT(22),
                width: WIDTH(22),
                marginRight: WIDTH(12),
                marginLeft: WIDTH(6),
              }}
            />
          </TouchableOpacity>
        </View>

        {/* New Features Section */}
        <Text style={styles.sectionTitle}>Mới nhất trên VCB Digibank</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.newFeaturesScroll}>
          <TouchableOpacity style={[]}>
            <Image
              resizeMode="cover"
              source={images.image_18}
              style={{height: HEIGHT(60), width: WIDTH(200)}}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              resizeMode="cover"
              source={images.image_19}
              style={{height: HEIGHT(60), width: WIDTH(140)}}
            />
          </TouchableOpacity>
        </ScrollView>

        {/* Promotion Banner */}
        <TouchableOpacity style={styles.promotionBanner}>
          <Image source={images.image_20} style={styles.promotionImage} />
        </TouchableOpacity>

        {/* Quick Actions */}
        <TouchableOpacity style={{zIndex: 2}}>
          <Image
            resizeMode="stretch"
            source={images.image_21}
            style={{height: HEIGHT(60), width: WIDTH(260), alignSelf: 'center'}}
          />
        </TouchableOpacity>

        <View style={styles.quickActions}>
          <TouchableOpacity style={styles.quickActionItem}>
            <Image
              source={images.image_22}
              style={{height: WIDTH(30), width: WIDTH(30)}}
            />
            <Text>Đặt vé xe</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.quickActionItem}>
            <Image
              source={images.image_23}
              style={{height: WIDTH(30), width: WIDTH(38)}}
            />
            <Text>Đặt hoa</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.quickActionItem}>
            <Image
              source={images.image_24}
              style={{height: WIDTH(30), width: WIDTH(30)}}
            />
            <Text>Đặt vé tàu</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.quickActionItem}>
            <Image
              resizeMode="cover"
              source={images.image_25}
              style={{height: WIDTH(28), width: WIDTH(28)}}
            />
            <Text style={{textAlign: 'center'}}>Đặt vé xem phim</Text>
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
    paddingTop: -HEIGHT(20),
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
    width: getWidth(),
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: -HEIGHT(7),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
    zIndex: 1,
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
