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
  TouchableWithoutFeedback,
} from 'react-native';
import GradientBackground from '../../contain/gradientBackground';

export default function CaNhan({ navigation }) {
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
            <TouchableOpacity style={styles.vBack}>
              <Image
                style={styles.iBack}
                source={require('../../image/search.png')}
                resizeMode="contain"
              />
            </TouchableOpacity>
            <View style={styles.vTimKiem}>
              <Text style={styles.tTimKiem}>Tìm kiếm</Text>
            </View>
            <TouchableOpacity style={styles.vPlus}>
              <Image
                style={styles.iPlus}
                source={require('../../image/setting.png')}
              />
            </TouchableOpacity>
          </View>
        </GradientBackground>
        <View style={styles.contentContainer}>
          <TouchableOpacity style={styles.vXemTrangCaNhan}>
            <Image
              style={styles.iAvt}
              source={require('../../image/avtzalo.png')}
            />
            <View style={styles.vTitle}>
              <Text style={{ fontSize: 16 }}>Phan Ngọc Đức</Text>
              <Text style={{ fontSize: 14, color: 'grey' }}>
                Xem trang cá nhân
              </Text>
            </View>
            <TouchableOpacity>
              <Image
                style={styles.iChuyenTaiKhoan}
                source={require('../../image/chuyentaikhoan.png')}
              />
            </TouchableOpacity>
          </TouchableOpacity>
          <TouchableOpacity style={styles.vCloud}>
            <Image
              style={styles.iCloud}
              source={require('../../image/may.png')}
            />
            <View style={styles.vTitle}>
              <Text style={{ fontSize: 16 }}>Cloud của tôi</Text>
              <Text style={{ fontSize: 14, color: 'grey' }}>
                Lưu trữ các tin nhắn quan trọng
              </Text>
            </View>
            <View>
              <Image
                style={styles.iChuyenTaiKhoan}
                source={require('../../image/tieptheo.png')}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.vCloud}>
            <Image
              style={styles.iCloud}
              source={require('../../image/data.png')}
            />
            <View style={styles.vTitle}>
              <Text style={{ fontSize: 16 }}>Dữ liệu trên máy</Text>
              <Text style={{ fontSize: 14, color: 'grey' }}>
                Quản lý dữ liệu Test của bạn
              </Text>
            </View>
            <View>
              <Image
                style={styles.iChuyenTaiKhoan}
                source={require('../../image/tieptheo.png')}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.vTaiKhoanVaBaoMat}>
            <Image
              style={styles.iTaiKhoanVaBaoMat}
              source={require('../../image/khien.png')}
            />
            <View style={styles.vTitle}>
              <Text style={{ fontSize: 16 }}>Tài khoản và bảo mật</Text>
            </View>
            <View>
              <Image
                style={styles.iChuyenTaiKhoan}
                source={require('../../image/tieptheo.png')}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.vQuyenRiengRu}>
            <Image
              style={styles.iTaiKhoanVaBaoMat}
              source={require('../../image/quenriengtu.png')}
            />
            <View style={styles.vTitle}>
              <Text style={{ fontSize: 16 }}>Quyền riêng tư</Text>
            </View>
            <View>
              <Image
                style={styles.iChuyenTaiKhoan}
                source={require('../../image/tieptheo.png')}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f7',
  },
  gradientBackground: {
    width: '100%',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 40,
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
  vTimKiem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: 5,
    paddingLeft: 10,
  },
  tTimKiem: {
    color: 'white',
    fontSize: 16,
  },
  contentContainer: {
    flex: 8.3,
  },
  vXemTrangCaNhan: {
    padding: 15,
    backgroundColor: '#fff',
    height: 80,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iAvt: {
    height: 50,
    width: 50,
    borderRadius: 50,
  },
  vTitle: {
    paddingLeft: 15,
    flex: 1,
  },
  iChuyenTaiKhoan: {
    height: 20,
    width: 20,
  },
  vCloud: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginTop: 8,
    height: 75,
    alignItems: 'center',
    padding: 15,
  },
  iCloud: {
    height: 30,
    width: 30,
  },
  vTaiKhoanVaBaoMat: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginTop: 8,
    height: 55,
    alignItems: 'center',
    padding: 15,
  },
  iTaiKhoanVaBaoMat: {
    height: 30,
    width: 30,
  },
  vQuyenRiengRu: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginTop: 1,
    height: 55,
    alignItems: 'center',
    padding: 15,
  },
});
