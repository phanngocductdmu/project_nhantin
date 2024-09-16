import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function DanhSachHienThi({ item }) {
  const navigation = useNavigation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (item.login.uuid % 2 === 0) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [item.login.uuid]);

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('NhanTin', {
          id: item.login.uuid,
          name: item.name.first + ' ' + item.name.last,
        })
      }
    >
      <View style={styles.view}>
        <Image style={styles.iAvt} source={{ uri: item.picture.medium }} />
        <View style={styles.vTen}>
          <Text style={styles.tTen}>
            {item.name.first} {item.name.last}
          </Text>
          <Text style={styles.tTinNhan}>Tin nhắn mẫu</Text>
        </View>
        {isVisible && (
          <View style={styles.vThongBao}>
            <Image
              style={styles.iThongBao}
              source={require('../../../image/tatchuong.png')}
            />
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  view: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    padding: 14,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 1,
  },
  iAvt: {
    height: 50,
    width: 50,
    borderRadius: 50,
  },
  tTen: {
    fontSize: 16,
  },
  vTen: {
    marginLeft: 15,
    flex: 1,
  },
  tTinNhan: {
    fontSize: 14,
    color: 'grey',
  },
  iThongBao: {
    height: 20,
    width: 20,
  },
  vThongBao: {
    marginLeft: 'auto',
  },
});
