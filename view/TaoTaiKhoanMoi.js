import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';

function CustomCheckBox({ isChecked, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.checkboxBase}>
      {isChecked ? (
        <Image
          source={require('../image/checkbox.png')}
          style={styles.checkboxChecked}
        />
      ) : (
        <View style={styles.checkboxUnchecked} />
      )}
    </TouchableOpacity>
  );
}

export default function TaoTaiKhoanMoi({ navigation }) {
  const [isTermsChecked, setIsTermsChecked] = useState(true);
  const [isPrivacyChecked, setIsPrivacyChecked] = useState(true);

  return (
    <View style={styles.container}>
      <View style={styles.vBack}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Image
            style={styles.iBack}
            source={require('../image/backblack.png')}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.form}>
        <Text style={styles.title}>Nhập số điện thoại</Text>
        <TextInput
          style={styles.input}
          placeholder="Nhập số điện thoại"
          keyboardType="phone-pad"
        />

        <View style={styles.checkboxContainer}>
          <CustomCheckBox
            isChecked={isTermsChecked}
            onPress={() => setIsTermsChecked(!isTermsChecked)}
          />
          <Text style={styles.checkboxLabel}>Tôi đồng ý với các </Text>
          <TouchableOpacity>
            <Text style={styles.DKTest}>điều khoản Test</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.checkboxContainer}>
          <CustomCheckBox
            isChecked={isPrivacyChecked}
            onPress={() => setIsPrivacyChecked(!isPrivacyChecked)}
          />
          <Text style={styles.checkboxLabel}>Tôi đồng ý với các </Text>
          <TouchableOpacity>
            <Text style={styles.DKMXH}>điều khoản mạng xã hội</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            if (isTermsChecked && isPrivacyChecked) {
              navigation.navigate('DangKy');
            } else {
              alert('Thông báo', 'Vui lòng đồng ý với tất cả các điều khoản.');
            }
          }}
        >
          <Text style={styles.buttonText}>Tiếp tục</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.DNN}>
        <Text>Bạn đã có tài khoản? </Text>
        <TouchableOpacity>
          <Text style={styles.tDangNhapNgay}>Đăng nhâp ngay</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  vBack: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  iBack: {
    width: 20,
    height: 20,
  },
  form: {
    flex: 10,
    justifyContent: 'flex-start',
    marginTop: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  input: {
    height: 50,
    borderColor: '#38ef7d',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 20,
    fontSize: 16,
    paddingHorizontal: 15,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  checkboxBase: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  checkboxChecked: {
    width: 20,
    height: 20,
  },
  checkboxUnchecked: {
    width: 16,
    height: 16,
    backgroundColor: '#fff',
  },
  checkboxLabel: {
    marginLeft: 8,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#38ef7d',
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
  DKTest: {
    fontSize: 16,
    color: '#38ef7d',
  },
  DKMXH: {
    fontSize: 16,
    color: '#38ef7d',
  },
  DNN: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  tDangNhapNgay: {
    color: '#38ef7d',
  },
});
