import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  TextInput,
  Image,
  Keyboard,
} from 'react-native';
import {ArrowLeft, Home} from 'lucide-react-native';
import {images} from '../assets';
import {getFont, HEIGHT, WIDTH} from '../../../../app/config/functions';
interface OTPPopupProps {
  isVisible: boolean;
  onClose: () => void;
  onConfirm: (otp: string) => void;
  phoneNumber: string;
}

const OTPPopup: React.FC<OTPPopupProps> = ({
  isVisible,
  onClose,
  onConfirm,
  phoneNumber,
}) => {
  const [otp, setOtp] = useState<string[]>(Array(6).fill(''));
  const inputRefs = useRef<Array<TextInput | null>>(Array(6).fill(null));

  const handleOtpChange = (value: string, index: number) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move to next input if value is entered
    if (value !== '' && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
    // Move to previous input if backspace is pressed on an empty input
    else if (value === '' && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleConfirm = () => {
    onConfirm(otp.join(''));
  };
  useEffect(() => {
    if (otp[5].length) {
   Keyboard.dismiss()
 }
  
},[otp])
  return (
    <Modal visible={isVisible} transparent>
      <View style={styles.overlay}>
        <View style={styles.popup}>
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Text style={{transform: [{scaleX: 1.2}], fontSize: getFont(18)}}>
              X
            </Text>
          </TouchableOpacity>

          <View style={styles.iconContainer}>
            <View style={{}}>
              <Image
                source={images.a3}
                style={{height: HEIGHT(40), width: WIDTH(40)}}
              />
            </View>
          </View>

          <Text style={styles.title}>Xác thực giao dịch</Text>
          <Text style={styles.subtitle}>
            Quý khách vui lòng nhập mã OTP đã được gửi về số điện thoại{' '}
            {phoneNumber}
          </Text>

          <View style={styles.otpContainer}>
            {otp.map((digit, index) => (
              <TextInput
                key={index}
                ref={ref => (inputRefs.current[index] = ref)}
                style={styles.otpInput}
                value={digit}
                onChangeText={value => handleOtpChange(value, index)}
                keyboardType="number-pad"
                maxLength={1}
                onKeyPress={({nativeEvent}) => {
                  if (
                    nativeEvent.key === 'Backspace' &&
                    digit === '' &&
                    index > 0
                  ) {
                    inputRefs.current[index - 1]?.focus();
                  }
                }}
              />
            ))}
          </View>

          <TouchableOpacity style={styles.resendLink}>
            <Text style={styles.resendText}>
              Chưa nhận được mã OTP?{' '}
              <Text style={styles.resendButton}>Gửi lại</Text>
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.confirmButton}
            onPress={handleConfirm}>
            <Text style={styles.confirmButtonText}>Xác nhận</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  popup: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    width: '90%',
    alignItems: 'center',
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  iconContainer: {
    marginBottom: 20,
  },
  icon: {
    backgroundColor: '#e8f5e9',
    borderRadius: 30,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    textAlign: 'center',
    marginBottom: 20,
    color: '#666',
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20,
  },
  otpInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    width: 40,
    height: 50,
    textAlign: 'center',
    fontSize: 20,
  },
  resendLink: {
    marginBottom: 20,
  },
  resendText: {
    color: '#666',
  },
  resendButton: {
    color: '#4caf50',
    fontWeight: 'bold',
  },
  confirmButton: {
    backgroundColor: '#4caf50',
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 30,
    width: '100%',
  },
  confirmButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default OTPPopup;
