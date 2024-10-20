import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Crown, ChevronRight, MoveRight} from 'lucide-react-native';
import {HEIGHT, WIDTH} from '../../../../app/config/functions';

const VCBRewardsCard = ({points = 0, onPress}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.iconContainer}>
          <Crown color="#FFA500" size={24} />
        </View>
        <Text style={styles.title}>VCB Rewards</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.pointsLabel}>
          Điểm tích lũy: <Text style={styles.pointsValue}>{points}</Text>
        </Text>

        <TouchableOpacity style={styles.detailsButton} onPress={onPress}>
          <Text style={styles.detailsButtonText}>Xem chi tiết</Text>
          <MoveRight color="#006A4E" size={18} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
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
    gap: 8,
  },
  detailsButtonText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#006A4E',
  },
});

export default VCBRewardsCard;
