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
} from 'react-native';
import {ArrowLeft, ChevronDown, FileText} from 'lucide-react-native';
import ListSourceAccount from './components/SourceAccount';
import RecipientInfo from './components/RecipientInfo';
import TransactionInfo from './components/TransactionInfo';
import ButtonAction from './components/ButtonAction';
import Header from './components/Header';
import LinearGradient from 'react-native-linear-gradient';

const ChuyenTienTrongNuoc = ({navigation}) => {
  const [scroll,setScroll]=useState(false)
  return(
  <View style={styles.container}>
    <StatusBar
      backgroundColor={'transparent'}
      translucent
      barStyle={'dark-content'}
    />
    <LinearGradient
      style={styles.container}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      colors={['#e1f1f1', '#e4f2f2', '#e4f2f2']} >
      <Header navigation ={navigation} />
      <View style={{flex: 1, paddingBottom: 48}}>
        <ScrollView scrollEnabled ={!scroll} showsVerticalScrollIndicator={false} style={{flex: 1}}>
          <ListSourceAccount />
            <RecipientInfo disableScroll={(value) => {
            setScroll(value)
          }} />
          <TransactionInfo />
        </ScrollView>
        <ButtonAction navigation={navigation} />
      </View>
    </LinearGradient>
  </View>
);

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
});

export default ChuyenTienTrongNuoc;
