import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  StatusBar,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
} from 'react-native';
import GradientBackground from '../contain/gradientBackground';

export default function DangNhap({ navigation }) {
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
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
                  source={require('../image/back.png')}
                  resizeMode="contain"
                />
              </TouchableOpacity>
              <View style={styles.vDangNhap}>
                <Text style={styles.tDangNhap}>Đăng nhập</Text>
              </View>
            </View>
          </GradientBackground>

          <View style={styles.contentContainer}>
            <View style={styles.ghiChu}>
              <Text style={styles.tGhiChu}>
                Vui lòng nhập số điện thoại và mật khẩu để đăng nhập
              </Text>
            </View>

            <View style={styles.inputContainer}>
              <View style={styles.editInput}>
                <TextInput
                  style={styles.tInputSDT}
                  placeholder="Số điện thoại"
                  keyboardType="phone-pad"
                />
                <Image
                  style={styles.iXoa}
                  source={require('../image/x.png')}
                  resizeMode="contain"
                />
              </View>
              <View style={styles.editInput}>
                <TextInput
                  style={styles.tInputMK}
                  placeholder="Mật khẩu"
                  secureTextEntry={true}
                />
                <Text style={styles.tHien}>Hiện</Text>
              </View>
              <TouchableOpacity style={styles.vLayLai}>
                <Text style={styles.tLayLai}>Lấy lại mật khẩu</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.containerTT}>
            <TouchableOpacity onPress={() => navigation.navigate('index')}>
              <View style={styles.vTiepTheo}>
                <Image
                  style={styles.iTiepTheo}
                  source={require('../image/next.png')}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.vCauHoi}>
                <Text style={styles.tCauHoi}>Câu hỏi thường gặp &gt;</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
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
  },
  ghiChu: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#f3f4f5',
  },
  tGhiChu: {
    color: 'grey',
    fontSize: 14,
  },
  inputContainer: {
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  tInputSDT: {
    height: 50,
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#f3f4f5',
    marginBottom: 15,
    fontSize: 16,
  },
  tInputMK: {
    height: 50,
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#f3f4f5',
    marginBottom: 15,
    fontSize: 16,
  },
  editInput: {
    flexDirection: 'row',
  },
  iXoa: {
    width: 20,
    height: 20,
    position: 'absolute',
    top: 15,
    end: 10,
  },
  tHien: {
    fontSize: 14,
    position: 'absolute',
    top: 15,
    end: 10,
    color: 'grey',
  },
  containerTT: {
    flex: 1.5,
  },
  vLayLai: {
    paddingTop: 20,
  },
  tLayLai: {
    fontSize: 14,
    color: '#2995ea',
    fontWeight: 'bold',
  },
  vTiepTheo: {
    height: 60,
    width: 60,
    borderRadius: 60,
    backgroundColor: '#bad2e9',
    justifyContent: 'center',
    alignItems: 'center',
    marginEnd: 10,
    position: 'absolute',
    top: 10,
    right: 20,
  },
  vCauHoi: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 30,
    left: 30,
  },
  tCauHoi: {
    color: 'grey',
  },
});
