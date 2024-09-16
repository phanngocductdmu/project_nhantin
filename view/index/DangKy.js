import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  StatusBar,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import GradientBackground from '../../contain/gradientBackground';

function CustomCheckBox({ isChecked, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.checkboxBase}>
      {isChecked ? (
        <Image
          source={require('../../image/checkbox.png')}
          style={styles.checkboxChecked}
        />
      ) : (
        <View style={styles.checkboxUnchecked} />
      )}
    </TouchableOpacity>
  );
}

export default function DangKy({ navigation }) {
  const [selectedGender, setSelectedGender] = useState(null);

  const handleGenderSelection = (gender) => {
    if (selectedGender !== gender) {
      setSelectedGender(gender);
    } else {
      setSelectedGender(null);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent={true}
        />
        <GradientBackground style={styles.gradientBackground}>
          <View style={styles.rowContainer}>
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}
              style={styles.vBack}
            >
              <Image
                style={styles.iBack}
                source={require('../../image/back.png')}
                resizeMode="contain"
              />
            </TouchableOpacity>
            <View style={styles.vDangNhap}>
              <Text style={styles.tDangNhap}>Thông tin</Text>
            </View>
          </View>
        </GradientBackground>
        <View style={styles.contentContainer}>
          <View style={styles.vContent}>
            <Text style={styles.tDienThongTin}>Điền thông tin</Text>
          </View>
          <View style={styles.vInput}>
            <Text style={styles.tInput}>Nhập mật khẩu:</Text>
            <TextInput style={styles.Input} />
            <Text style={styles.tInput}>Nhập lại mật khẩu:</Text>
            <TextInput style={styles.Input} />
            <Text style={styles.tInput}>Nhập tên của bạn:</Text>
            <TextInput style={styles.Input} />

            <View style={styles.checkboxContainer}>
              <View style={styles.genderOption}>
                <CustomCheckBox
                  isChecked={selectedGender === 'Nam'}
                  onPress={() => handleGenderSelection('Nam')}
                />
                <Text style={styles.checkboxLabel}>Nam</Text>
              </View>

              <View style={styles.genderOption}>
                <CustomCheckBox
                  isChecked={selectedGender === 'Nữ'}
                  onPress={() => handleGenderSelection('Nữ')}
                />
                <Text style={styles.checkboxLabel}>Nữ</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.vButton}>
          <TouchableOpacity style={styles.vBtn}>
            <Text style={styles.tXacNhan}>Xác nhận</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    color: '#fff',
  },
  gradientBackground: {
    width: '100%',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
  },
  vBack: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
  iBack: {
    width: 20,
    height: 20,
  },
  vDangNhap: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: 5,
  },
  tDangNhap: {
    color: 'white',
    fontSize: 16,
  },
  contentContainer: {
    flex: 10,
    paddingHorizontal: 10,
  },
  vContent: {
    flex: 1,
    alignItems: 'center',
  },
  tDienThongTin: {
    top: 50,
    fontSize: 20,
  },
  vInput: {
    flex: 6,
  },
  tInput: {
    color: 'grey',
    marginTop: 30,
  },
  Input: {
    top: 10,
    height: 40,
    borderRadius: 10,
    paddingHorizontal: 13,
    fontSize: 16,
    borderColor: '#38ef7d',
    borderWidth: 1,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  genderOption: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
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
    fontSize: 16,
  },
  vButton: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    padding: 15,
  },
  vBtn: {
    backgroundColor: '#38ef7d',
    height: 50,
    width: 110,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tXacNhan: {
    fontSize: 16,
    color: '#fff',
  },
});
