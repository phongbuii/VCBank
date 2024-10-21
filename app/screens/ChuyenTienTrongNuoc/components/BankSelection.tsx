import {getWidth, HEIGHT, WIDTH} from '../../../../app/config/functions';
import React, {useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {
  FlatList,
  TouchableOpacity,
  Text,
  StyleSheet,
  View,
  TextInput,
  Image,
} from 'react-native';
import {images} from '../assets';

const banks = [
  {
    id: 1,
    name: 'Vietcombank',
    description: 'Ngân hàng TMCP Ngoại thương Việt Nam',
    icon: images.a1,
  },
  {
    id: 2,
    name: 'BIDV',
    description: 'Ngân hàng Đầu tư và Phát triển Việt Nam',
    icon: images.a1,
  },
  {
    id: 3,
    name: 'TP Bank',
    description: 'Ngân hàng Tiền Phong',
    icon: images.a1,
  },
  {
    id: 4,
    name: 'MSB',
    description: 'Ngân hàng Hàng Hải',
    icon: images.a1,
  },
  {
    id: 5,
    name: 'VIB',
    description: 'Ngân hàng Quốc Tế Việt Nam',
    icon: images.a1,
  },
  {
    id: 6,
    name: 'Vietinbank',
    description: 'Ngân hàng Công thương Việt Nam',
    icon: images.a1,
  },
  {
    id: 7,
    name: 'Sacombank',
    description: 'Ngân hàng Thương mại Cổ phần Sài Gòn Thương tín',
    icon: images.a1,
  },
  {
    id: 8,
    name: 'MB Bank',
    description: 'Ngân hàng Quân Đội',
    icon: images.a1,
  },
  {
    id: 9,
    name: 'ACB',
    description: 'Ngân hàng Thương mại Cổ phần Á Châu',
    icon: images.a1,
  },
  {
    id: 10,
    name: 'VP Bank',
    description: 'Ngân hàng TMCP Việt Nam Thịnh Vượng',
    icon: images.a1,
  },
];

const BankSelection = ({onClose}) => {
  const [selectedBank, setSelectedBank] = useState(null);

  const handleBankSelect = bank => {
    setSelectedBank(bank);
    // Do something with the selected bank, e.g., navigate to the next screen
  };

  return (
    <View style={{flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.5)'}}>
      <View
        style={{
          backgroundColor: '#fff',
          marginTop: HEIGHT(40),
          flex: 1,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        }}>
        <Text
          style={{
            fontWeight: '700',
            color: 'black',
            textAlign: 'center',
            marginTop: HEIGHT(16),
          }}>
          {' '}
          Chọn ngân hàng{' '}
        </Text>
        <TouchableOpacity
          style={{position: 'absolute', top: HEIGHT(10), right: 10}}
          onPress={() => onClose(false)}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: '500',
              transform: [{scaleX: 1.5}],
            }}>
            X
          </Text>
        </TouchableOpacity>
        <View style={{margin: HEIGHT(16)}}>
          <Image
            source={images.a5}
            style={{
              height: HEIGHT(20),
              width: WIDTH(20),
              position: 'absolute',
              top: HEIGHT(10),
              left: WIDTH(20),
            }}
          />
          <TextInput
            placeholder="Nhập tên ngân hàng"
            style={{
              borderWidth: 1,
              //   height: HEIGHT(36),
              width: '90%',
              alignSelf: 'center',
              alignItems: 'center',
              borderRadius: 14,
              borderColor: 'grey',
              paddingVertical: HEIGHT(4),
              paddingHorizontal: WIDTH(30),
            }}
          />
        </View>

        <FlatList
          style={{}}
          data={banks}
          keyExtractor={item => item.id.toString()}
          ItemSeparatorComponent={() => (
            <View
              style={{height: 0.5, backgroundColor: 'grey', width: getWidth()}}
            />
          )}
          renderItem={({item}) => (
            <TouchableOpacity
              style={[
                styles.bankItem,
                selectedBank?.id === item.id ? styles.selectedItem : null,
                {
                  marginHorizontal: WIDTH(12),
                  flexDirection: 'row',
                  alignItems: 'center',
                },
              ]}
              onPress={() => handleBankSelect(item)}>
              <Image
                source={item.icon}
                style={{
                  height: WIDTH(20),
                  width: WIDTH(20),
                  marginRight: WIDTH(12),
                }}
              />
              <View>
                <Text style={styles.bankName}>{item.name}</Text>
                <Text style={styles.bankDescription}>{item.description}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bankItem: {
    padding: 16,
    borderColor: '#ccc',
    borderRadius: 8,
    // marginVertical: 8,
  },
  selectedItem: {
    backgroundColor: '#f0f0f0',
  },
  bankName: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  bankDescription: {
    fontSize: 12,
    color: '#666',
  },
});

export default BankSelection;
