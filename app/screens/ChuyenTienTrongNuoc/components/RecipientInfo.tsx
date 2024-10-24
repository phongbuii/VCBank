import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Switch,
  StatusBar,
  Image,
  Modal,
} from 'react-native';
import {ArrowLeft, ChevronDown, FileText} from 'lucide-react-native';
import {HEIGHT, WIDTH} from '../../../../app/config/functions';
import {images} from '../assets';
import BankSelection from './BankSelection';

const RecipientInfo = ({disableScroll}) => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (visible) {
      disableScroll(true)
    }
  },[visible])
  return (
    <View style={styles.section}>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Thông tin người nhận</Text>
        <TouchableOpacity
          style={{flexDirection: 'row', gap: HEIGHT(8), alignItems: 'center'}}>
          <FileText color="#2c7a3f" size={16} />
          <Text style={styles.transferTemplateText}>Mẫu chuyển tiền</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => setVisible(true)} style={styles.input}>
        <Image
          resizeMode="contain"
          source={images.a3}
          style={{height: HEIGHT(34), width: WIDTH(30), marginRight: 10}}
        />
        <View style={{gap: 2}}>
          <Text style={styles.title}>Ngân hàng nhận</Text>
          <Text style={styles.textName}>
            Vietcombank - Ngân hàng TMCP Ngoại th...
          </Text>
        </View>

        <ChevronDown color="#000" size={20} />
      </TouchableOpacity>
      <View style={styles.input}>
        <View style={{gap: 6}}>
          <Text style={styles.title}>Tài khoản/thẻ nhận</Text>
          <TextInput
            keyboardType="numeric"
            placeholder="123 45678 25353"
            style={{
              height: 16,
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 14,
              color: 'black',
              paddingVertical: 0,
            }}
          />
        </View>
        <TouchableOpacity>
          <Image
            source={images.a2}
            style={{height: HEIGHT(32), width: WIDTH(32)}}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.input}>
        <View style={{gap: 8, paddingBottom: 4}}>
          <Text style={styles.title}>Tên người nhận</Text>
          <TextInput
            placeholder="Nhập tên người nhận"
            style={{
              height: 16,
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 14,
              color: 'black',
              paddingVertical: 0,
            }}
          />
        </View>
      </View>
      <View style={styles.switchContainer}>
        <Text style={styles.textSave}>Lưu người nhận</Text>
        <Switch />
      </View>
      <Modal transparent animationType="slide" visible={visible}>
        <BankSelection onClose={() => setVisible(false)} />
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    marginHorizontal: WIDTH(16),
    gap: HEIGHT(16),
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#006840',
  },
  transferTemplateText: {
    color: '#2c7a3f',
    fontSize: 14,
  },
  input: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e0e0e0',
    backgroundColor: 'white',
    borderRadius: 12,
    paddingHorizontal: WIDTH(12),
    paddingVertical: HEIGHT(8),
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 4,
    alignItems: 'center',
  },
  textName: {
    fontSize: 14,
    color: 'black',
  },
  title: {
    fontSize: 13,
  },
  textSave: {
    fontSize: 14,
    color: 'black',
  },
});

export default RecipientInfo;
