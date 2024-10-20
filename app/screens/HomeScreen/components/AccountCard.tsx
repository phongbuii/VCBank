// components/AccountCard.js
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {UserCircle, Copy, Clock, CreditCard, Eye} from 'lucide-react-native';
import LinearGradient from 'react-native-linear-gradient';
import {HEIGHT, WIDTH} from '../../../../app/config/functions';

const AccountCard = () => {
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      colors={['#86C440', '#006840']}
      style={styles.card}>
      <View style={styles.userInfo}>
        <UserCircle color="white" size={24} />
        <Text style={styles.userName}>Nguyen Van A</Text>
      </View>
      <View style={{gap: 4, paddingHorizontal: WIDTH(16)}}>
        <View style={{flexDirection: 'row', alignItems: 'center', gap: 2}}>
          <Text style={styles.balanceLabel}>Số tài khoản</Text>
          <Text style={styles.balanceValue}>102198xxxxxx</Text>
          <Copy color="white" size={18} />
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center', gap: 2}}>
          <Text style={styles.balanceLabel}>Số dư</Text>
          <Text style={styles.balanceValue}>
            *** *** *** <Text style={styles.balanceValueVND}>VND</Text>
          </Text>
          <Eye color="white" size={18} style={{marginLeft: WIDTH(8)}} />
        </View>
      </View>
      <View style={styles.cardActions}>
        <TouchableOpacity style={styles.action}>
          <Clock color="white" size={18} />
          <Text style={styles.actionText}>Lịch sử giao dịch</Text>
        </TouchableOpacity>
        <View style={styles.divider} />
        <TouchableOpacity style={styles.action}>
          <CreditCard color="white" size={18} />
          <Text style={styles.actionText}>Tài khoản & Thẻ</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.qrButton}>
        <CreditCard color="white" size={18} />
        <Text style={styles.qrButtonText}>QR</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#2c7a3f',
    marginHorizontal: WIDTH(16),
    paddingTop: HEIGHT(12),
    borderRadius: 12,
    overflow: 'hidden',
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
    flex: 1,
    paddingHorizontal: WIDTH(16),
  },
  userName: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
    marginLeft: 8,
  },
  accountNumber: {
    color: 'white',
    fontSize: 13,
    fontWeight: '400',
  },
  balanceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  balanceLabel: {
    color: 'white',
    marginRight: 8,
    fontSize: 13,
    width: 90,
    textAlign: 'left',
  },
  balanceValue: {
    color: 'white',
    fontWeight: 'bold',
    marginRight: 8,
    fontSize: 14,
  },
  cardActions: {
    marginTop: HEIGHT(8),
    paddingHorizontal: WIDTH(24),
    paddingVertical: HEIGHT(12),
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
  },
  action: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionText: {
    color: 'white',
    marginLeft: 8,
    fontSize: 13,
  },
  divider: {
    width: 1,
    backgroundColor: 'white',
    marginHorizontal: 8,
  },
  qrButton: {
    position: 'absolute',
    top: 16,
    right: 16,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    borderRadius: 1000,
    padding: 4,
    paddingHorizontal: WIDTH(8),
  },
  qrButtonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
  balanceValueVND: {fontWeight: '300', fontSize: 13},
});

export default AccountCard;
