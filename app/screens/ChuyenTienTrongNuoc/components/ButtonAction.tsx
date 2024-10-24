import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Switch,
  StatusBar,
  FlatList,
  Pressable,
} from 'react-native';
import {ArrowLeft, ChevronDown, FileText} from 'lucide-react-native';
import LinearGradient from 'react-native-linear-gradient';
import {HEIGHT, WIDTH} from '../../../../app/config/functions';

const SourceAccount = ({accountNumber, setIndexChoose, isChoose, index,}) => (
  <Pressable
    onPress={() => {
      setIndexChoose(index);
    }}>
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      colors={isChoose ? ['#86C440', '#006840'] : ['white', 'white']}
      style={styles.sourceAccount}>
      <View style={{flex: 1, marginRight: WIDTH(8), gap: HEIGHT(4)}}>
        <View style={styles.sourceAccountRight}>
          <Text
            style={[
              styles.sourceAccountLabel,
              {color: isChoose ? 'white' : 'black'},
            ]}>
            Tài khoản nguồn
          </Text>
          <Text
            style={[
              styles.sourceAccountNumber,
              {color: isChoose ? 'white' : 'black'},
            ]}>
            {accountNumber}
          </Text>
        </View>
        <View style={styles.sourceAccountRight}>
          <Text
            style={[
              styles.sourceAccountLabel,
              {color: isChoose ? 'white' : 'black'},
            ]}>
            Số dư
          </Text>
          <Text
            style={[
              styles.sourceAccountNumber,
              {color: isChoose ? 'white' : 'black'},
            ]}>
            {'*** *** ***'}{' '}
            <Text
              style={[
                styles.sourceAccountVND,
                {color: isChoose ? 'white' : 'black'},
              ]}>
              {'VND'}
            </Text>
          </Text>
        </View>
      </View>
      <ChevronDown color={isChoose ? 'white' : 'black'} size={24} />
    </LinearGradient>
  </Pressable>
);

const ButtonAction = ({navigation}) => {
  return (
    <TouchableOpacity onPress={() => {navigation.navigate("ChiTietChuyenTien")}}>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
      colors={['#9EDD50', '#008B50']} 
        style={styles.button}>
        <Text style={styles.textButton}>Tiếp tục</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};
export default ButtonAction;
const styles = StyleSheet.create({
  button: {
    height: 40,
    width: WIDTH(343),
    alignSelf: 'center',
    marginVertical: HEIGHT(16),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
  },
  textButton: {fontSize: 14, fontWeight: '600', color: 'white'},
  sourceAccount: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: HEIGHT(16),
    marginRight: WIDTH(16),
    marginVertical: WIDTH(16),
    borderRadius: 12,
    width: WIDTH(311),
  },
  sourceAccountLabel: {
    color: 'white',
    marginBottom: HEIGHT(4),
    fontSize: 12,
  },
  sourceAccountNumber: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
    letterSpacing: 2,
    textAlign: 'center',
  },
  sourceAccountVND: {
    color: 'white',
    fontWeight: '300',
    fontSize: 12,

    letterSpacing: 2,
    textAlign: 'center',
  },

  sourceAccountRight: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sourceAccountBalance: {
    color: 'white',
    marginRight: WIDTH(8),
  },
});
