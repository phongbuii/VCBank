import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {Crown, ChevronRight, MoveRight} from 'lucide-react-native';
import {HEIGHT, WIDTH} from '../../../../app/config/functions';
import {images} from '../assets';

const VCBRewardsCard = ({points = 0, onPress}) => {
  return (
    <TouchableOpacity style={styles.detailsButton} onPress={onPress}>
      <Image
        resizeMode="stretch"
        source={images.image_16}
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
  header: {
    marginBottom: 12,
    paddingTop: HEIGHT(16),
    paddingHorizontal: WIDTH(16),
    flex: 1,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#FFF5E6',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  title: {
    paddingTop: 4,
    fontSize: 18,
    fontWeight: '400',
    color: '#333',
  },
  content: {
    backgroundColor: '#F0F8ED',
    borderRadius: 8,
    padding: 12,
  },
  pointsContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginBottom: 8,
  },
  pointsLabel: {
    fontSize: 12,
    color: '#006A4E',
  },
  pointsValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#006A4E',
  },
  detailsButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  detailsButtonText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#006A4E',
  },
});

export default VCBRewardsCard;
