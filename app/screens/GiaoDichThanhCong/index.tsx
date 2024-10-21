import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {images} from './assets';
import {HEIGHT, WIDTH} from '../../../app/config/functions';

const GiaoDichThanhCong = () => {
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaView style={[styles.container, {paddingTop: insets.top}]}>
      <View style={styles.header}>
        <Image
          resizeMode="contain"
          source={images.a1}
          style={{height: HEIGHT(30), width: WIDTH(120)}}
        />
        <TouchableOpacity style={{}}>
          <Image
            resizeMode="contain"
            source={images.a3}
            style={{height: WIDTH(40), width: WIDTH(40), borderRadius: 100}}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <View style={styles.successIcon}>
          <Text style={styles.checkmark}>✓</Text>
        </View>
        <Text style={styles.successText}>Giao dịch thành công!</Text>
        <Text style={styles.amount}>123,456 VND</Text>
        <Text style={styles.date}>09:30, Thứ tư 30/08/2023</Text>

        <View style={styles.detailsCard}>
          <DetailRow label="Tài khoản nhận" value="123 45678 25353" />
          <DetailRow label="Tên người nhận" value="Nguyen Chu Thuy Trang" />
          <DetailRow isIcon={true} label="Ngân hàng nhận" value="Vietcombank" />
          <Text style={styles.subBankName}>
            Ngân hàng TMCP Ngoại thương Việt Nam
          </Text>
          <DetailRow label="Nội dung" value="Nguyen Van An Chuyen Tien" />
          <DetailRow label="Phí chuyển tiền" value="Miễn phí" />
          <DetailRow
            label="Hình thức chuyển"
            value="Chuyển tiền trong Vietcombank"
          />
          <DetailRow label="Mã giao dịch" value="1234567890" />
        </View>

        <View style={styles.actionButtons}>
          <ActionButton icon="share" label="Chia sẻ" icon={images.a5} />
          <ActionButton icon="save" label="Lưu ảnh" icon={images.a6} />
          <ActionButton icon="split" label="Chia hoá đơn" icon={images.a7} />
        </View>
      </View>
    </SafeAreaView>
  );
};

const DetailRow = ({label, value, isIcon}) => (
  <View style={styles.detailRow}>
    {isIcon && (
      <Image
        resizeMode="center"
        source={images.a4}
        style={{
          height: HEIGHT(20),
          width: WIDTH(20),
          position: 'absolute',
          right: WIDTH(90),
          top: HEIGHT(8),
        }}
      />
    )}
    <Text style={styles.detailLabel}>{label}</Text>
    <Text style={styles.detailValue}>{value}</Text>
  </View>
);

const ActionButton = ({icon, label}) => (
  <TouchableOpacity style={styles.actionButton}>
    <Image
      source={icon}
      style={{height: HEIGHT(50), width: WIDTH(50), borderRadius: 50}}
    />
    <Text style={styles.actionLabel}>{label}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#edffff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  logo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#006f3c',
  },
  profileButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#006f3c',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileIcon: {
    width: 24,
    height: 24,
    backgroundColor: 'white',
    borderRadius: 12,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  successIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#4caf50',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  checkmark: {
    color: 'white',
    fontSize: 30,
  },
  successText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#006f3c',
    marginBottom: 8,
  },
  amount: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#006f3c',
    marginBottom: 8,
  },
  date: {
    fontSize: 14,
    color: '#666',
    marginBottom: 24,
  },
  detailsCard: {
    backgroundColor: '#edffff',
    borderRadius: 8,
    padding: 16,
    width: '100%',
    marginBottom: 24,
    borderWidth: 1,
    borderColor: '#e3e8e8',
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
    borderTopWidth: 1,
    borderColor: '#e3e8e8',
    padding: WIDTH(4),
  },
  detailLabel: {
    color: '#666',
  },
  detailValue: {
    fontWeight: 'bold',
  },
  subBankName: {
    color: '#666',
    fontSize: 12,
    marginTop: -8,
    marginBottom: 12,
    textAlign: 'right',
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  actionButton: {
    alignItems: 'center',
  },
  actionIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#ebffff',
    marginBottom: 8,
  },
  actionLabel: {
    color: '#006f3c',
  },
  footer: {
    padding: 16,
    alignItems: 'center',
  },
  footerText: {
    color: '#666',
    fontSize: 12,
  },
});

export default GiaoDichThanhCong;
