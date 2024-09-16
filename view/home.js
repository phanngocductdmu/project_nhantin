import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent={true}
      />
      <Image
        style={styles.trangchinh1}
        source={require('./../image/trangchinh1.png')}
        resizeMode="contain"
      />
      <View style={styles.overlay}>
        <Text style={styles.test}>TEST</Text>
      </View>
      <TouchableOpacity style={styles.tiengViet}>
        <View>
          <Text style={styles.tTiengViet}>Tiếng việt</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.dangNhap}
        onPress={() => navigation.navigate('dangNhap')}
      >
        <Text style={styles.tDangNhap}>Đăng nhập</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.taoTaiKhoanMoi}
        onPress={() => navigation.navigate('TaoTaiKhoanMoi')}
      >
        <Text style={styles.tTaoTaiKhoanMoi}>Tạo tài khoản mới</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  trangchinh1: {
    height: 450,
    width: '100%',
  },
  overlay: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  test: {
    color: '#38ef7d',
    fontWeight: 'bold',
    fontSize: 65,
  },
  tiengViet: {
    position: 'absolute',
    top: 50,
    right: 20,
    width: 100,
    height: 35,
    borderWidth: 3,
    borderColor: '#f0f0f0',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tTiengViet: {
    fontSize: 14,
  },
  dangNhap: {
    position: 'absolute',
    backgroundColor: '#38ef7d',
    borderRadius: 50,
    bottom: 100,
    width: '90%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tDangNhap: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '500',
  },
  taoTaiKhoanMoi: {
    position: 'absolute',
    backgroundColor: '#f0f0f0',
    borderRadius: 50,
    bottom: 40,
    width: '90%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tTaoTaiKhoanMoi: {
    fontSize: 16,
    color: '#000000',
    fontWeight: '500',
  },
});
