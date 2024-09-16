import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  StatusBar,
  FlatList,
} from 'react-native';
import GradientBackground from '../../contain/gradientBackground';
import DanhSachHienThi from './ComponentTinNhan/DanhSachHienThi';
import connect from '../../api/connect';

export default function TinNhan({ navigation }) {
  const [outputs, setOutputs] = useState([]);

  useEffect(() => {
    connect
      .get('/?results=100&seed=fullstackio')
      .then((result) => {
        setOutputs(result.data.results);
      })
      .catch((error) => console.error('API fetch error:', error));
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent={true}
      />
      <GradientBackground style={styles.gradientBackground}>
        <View style={styles.rowContainer}>
          <TouchableOpacity
            style={styles.vBack}
            onPress={() => {
              navigation.navigate('TimKiem');
            }}
          >
            <Image
              style={styles.iBack}
              source={require('../../image/search.png')}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.vTimKiem}
            onPress={() => {
              navigation.navigate('TimKiem');
            }}
          >
            <Text style={styles.tTimKiem}>Tìm kiếm</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ paddingRight: 10 }}>
            <Image style={styles.iQR} source={require('../../image/qr.png')} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.vPlus}>
            <Image
              style={styles.iPlus}
              source={require('../../image/plus.png')}
            />
          </TouchableOpacity>
        </View>
      </GradientBackground>
      <View style={styles.contentContainer}>
        <View style={styles.vPhanLoai}>
          <Text style={styles.tPhanLoai}>Tất cả</Text>
          <TouchableOpacity>
            <Image source={require('../../image/phanloai.png')} />
          </TouchableOpacity>
        </View>
        <FlatList
          data={outputs}
          renderItem={({ item }) => <DanhSachHienThi item={item} />}
          keyExtractor={(item) => item.login.uuid}
        />
      </View>
    </View>
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
  vPhanLoai: {
    backgroundColor: '#fff',
    height: 43,
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 14,
    justifyContent: 'space-between',
  },
  tPhanLoai: {
    fontWeight: 'bold',
  },
});
