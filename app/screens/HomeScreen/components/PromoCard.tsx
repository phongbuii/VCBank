import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {ChevronRight, CreditCard, MoveRight} from 'lucide-react-native';
import {HEIGHT, WIDTH} from '../../../../app/config/functions';
import LinearGradient from 'react-native-linear-gradient';
import {images} from '../assets';

const PromoCard = ({onPress}) => {
  return (
    <TouchableOpacity style={styles.detailsButton} onPress={onPress}>
      <Image
        resizeMode="stretch"
        source={images.image_15}
        style={styles.container}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: HEIGHT(170),
    width: WIDTH(165),
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
