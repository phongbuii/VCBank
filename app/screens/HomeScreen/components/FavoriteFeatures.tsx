// components/FavoriteFeatures.js
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, FlatList, Image} from 'react-native';
import {
  Settings2,
  DollarSign,
  Users,
  PiggyBank,
  Settings,
  Smartphone,
  Search,
  MoveRight,
  Navigation,
  NavigationIcon,
  ChevronRight,
} from 'lucide-react-native';
import {getWidth, HEIGHT, WIDTH} from '../../../../app/config/functions';
import { images } from '../assets';
const DATA = [
  {
    label: 'page1',
    data: [
      {
        title: 'Chuyển tiền từ thiện',
        icon: <Image resizeMode="contain" source={images.image_7} style ={{height:WIDTH(26),width:WIDTH(26)}} />,
      },
      {
        title: 'Chuyển tiền trong nước',
       icon: <Image resizeMode="contain" source={images.image_10} style ={{height:WIDTH(26),width:WIDTH(26)}} />,

      },
      {
        title: 'Quản lý nhóm',
              icon: <Image resizeMode="contain" source={images.image_9} style ={{height:WIDTH(22),width:WIDTH(22)}} />,

        isNew: true,
      },
      {
        title: 'Mở tiết kiệm',
        icon: <Image resizeMode="contain" source={images.image_1} style ={{height:WIDTH(26),width:WIDTH(26)}} />,

      },
      {
        title: 'Cài đặt hạn mức chuyển',
          icon: <Image resizeMode="contain" source={images.image_2} style ={{height:WIDTH(24),width:WIDTH(24)}} />,

      },
      {
        title: 'Nạp tiền điện thoại',
                icon: <Image resizeMode="contain" source={images.image_3} style ={{height:WIDTH(22),width:WIDTH(22)}} />,

      },
    ],
  },
];
const FeatureButton = ({icon, label, isNew = false}) => (
  <TouchableOpacity style={styles.featureButton}>
    <View style={styles.iconContainer}>{icon}</View>
    <Text style={styles.featureLabel}>{label}</Text>
    {isNew && (
      <View style={styles.newBadge}>
        <Text style={styles.newBadgeText}>Mới</Text>
      </View>
    )}
  </TouchableOpacity>
);

const FavoriteFeatures = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Chức năng ưa thích</Text>
          <Settings2 color="#2c7a3f" size={20} />
        </View>
        <TouchableOpacity style={styles.titleContainer}>
          <Search color="#2c7a3f" size={20} />
          <Text style={styles.searchText}>Tìm kiếm</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={DATA}
        style={{overflow: 'visible'}}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item, index}) => {
          return (
            <View style={{width: getWidth()}}>
              <FlatList
                style={{
                  width: getWidth(),
                  paddingHorizontal: WIDTH(16),
                  overflow: 'visible',
                }}
                data={item?.data}
                numColumns={3}
                renderItem={({item, index}) => {
                  return (
                    <FeatureButton
                      key={index}
                      icon={item?.icon}
                      label={item?.title}
                      isNew={item?.isNew}
                    />
                  );
                }}
              />
              <TouchableOpacity style={styles.buttonNav}>
                <ChevronRight color={'black'} size={20} />
              </TouchableOpacity>
            </View>
          );
        }}
      />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingRight: WIDTH(16),
          paddingLeft: WIDTH(48),
        }}>
        <View style={{flexDirection: 'row', gap: 4}}>
          <View
            style={{
              height: 6,
              width: 16,
              borderRadius: 100,
              backgroundColor: '#2c7a3f',
            }}
          />
          <View
            style={{
              height: 6,
              width: 6,
              borderRadius: 100,
              backgroundColor: 'gray',
            }}
          />
        </View>
        <TouchableOpacity style={styles.viewAllButton}>
          <Text style={styles.viewAllText}>Xem tất cả</Text>
          <MoveRight color={'#2c7a3f'} size={18} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: HEIGHT(16),
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    marginHorizontal: WIDTH(16),
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000000',
  },
  searchText: {
    color: '#2c7a3f',
    fontSize: 14,
    fontWeight: '400',
  },
  featuresGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  featureButton: {
    width: (getWidth() - WIDTH(32)) / 3,
    paddingHorizontal: WIDTH(16),
    alignItems: 'center',
    marginBottom: HEIGHT(16),
    overflow: 'visible',
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 24,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  featureLabel: {
    textAlign: 'center',
    fontSize: 13,
    color: '#000000',
  },
  newBadge: {
    position: 'absolute',
    top: 0,
    left: (getWidth() - WIDTH(32)) / 6 + 4,
    backgroundColor: 'red',
    borderRadius: 100,
    paddingHorizontal: 8,
    paddingVertical: 2,
  },
  newBadgeText: {
    color: 'white',
    fontSize: 10,
  },
  viewAllButton: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 8,
  },
  viewAllText: {
    color: '#2c7a3f',
    fontWeight: 'bold',
  },
  buttonNav: {
    backgroundColor: '#CCCC99',
    paddingVertical: 8,
    paddingLeft:8,
    borderTopLeftRadius: 100,
    borderBottomLeftRadius: 100,
    position: 'absolute',
    right: -2,
    top: HEIGHT(72),
  },
});

export default FavoriteFeatures;
