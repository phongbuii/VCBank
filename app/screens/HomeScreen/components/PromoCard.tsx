import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {ChevronRight, CreditCard, MoveRight} from 'lucide-react-native';
import {HEIGHT, WIDTH} from '../../../../app/config/functions';
import LinearGradient from 'react-native-linear-gradient';

const PromoCard = ({onPress}) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          marginHorizontal: WIDTH(16),
          height: 3,
          borderTopLeftRadius: 12,
          borderTopRightRadius: 12,
          backgroundColor: '#81f840',
        }}
      />
      <View
        style={{
          marginHorizontal: WIDTH(8),
          height: 6,
          borderTopLeftRadius: 12,
          borderTopRightRadius: 12,
          backgroundColor: '#816440',
        }}
      />
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={['#86C440', '#81C440']}
        style={{
          paddingVertical: HEIGHT(16),
          paddingHorizontal: WIDTH(16),
          backgroundColor: '#E8F5E9',
          borderRadius: 12,
          flex: 1,
        }}>
        <View style={styles.logoContainer}>
          <CreditCard color="#FF5F00" size={24} style={styles.logo} />
          <CreditCard color="#1A1F71" size={24} style={styles.logo} />
          <CreditCard color="#0B4EA2" size={24} style={styles.logo} />
        </View>
        <View style={{flex: 1}}>
          <Text style={styles.promoText}>
            {'Miễn lãi 45 ngày,\nhoàn tiền chi tiêu lên đến 12%'}
          </Text>
        </View>

        <TouchableOpacity style={styles.detailsButton} onPress={onPress}>
          <Text style={styles.detailsButtonText}>Khám phá ngay</Text>
          <MoveRight color="#006A4E" size={18} />
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logoContainer: {
    flexDirection: 'row',
    // justifyContent: "flex-start",
    alignItems: 'center',
    marginBottom: 12,
  },
  logo: {
    marginRight: 12,
  },
  promoText: {
    fontSize: 14,
    color: 'black',
    marginBottom: 12,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
  },
  buttonText: {
    fontSize: 14,
    color: '#006A4E',
    fontWeight: 'bold',
    marginRight: 4,
  },
  detailsButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  detailsButtonText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#006A4E',
  },
});

export default PromoCard;
