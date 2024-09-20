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
  SafeAreaView,
  TouchableWithoutFeedback,
} from 'react-native';
import GradientBackground from '../../../../contain/gradientBackground';

export default function ThongTinCaNhanFriend({ route, navigation }) {
  const { item } = route.params;
  const dateString = item.dob.date;
  const dateObj = new Date(dateString);

  const day = dateObj.getDate();
  const month = dateObj.getMonth() + 1;
  const year = dateObj.getFullYear();
  const formattedDate = `${day}/${month}/${year}`;

  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity style={styles.vAnhBia}>
          <Image
            source={require('../../../../image/android.jpg')}
            resizeMode="contain"
            style={styles.iAnhBia}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          style={styles.vBack}
        >
          <Image
            style={styles.iBack}
            source={require('../../../../image/quaylai.png')}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.vAVT}>
          <Image style={styles.iAVT} source={{ uri: item.picture.large }} />
        </TouchableOpacity>

        <View style={styles.vName}>
          <Text style={styles.tName}>
            {item.name.first} {item.name.last}
          </Text>
          <TouchableOpacity style={styles.ok}>
            <Image
              style={styles.iName}
              source={require('../../../../image/butchi.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.rowContainer}>
        <View style={{ flexDirection: 'column' }}>
          <View style={styles.vBody}>
            <View style={styles.vItem}>
              <Text style={styles.tThongTin}>Thông tin cá nhân</Text>
            </View>
            <View style={styles.vItem}>
              <Text style={styles.tItem}>Giới tính</Text>
              <Text style={styles.tOK}>{item.gender}</Text>
            </View>
            <View style={styles.vItem}>
              <Text style={styles.tItem}>Ngày sinh</Text>
              <Text style={styles.tOK}>{formattedDate}</Text>
            </View>
            <View style={styles.vItem}>
              <Text style={styles.tItem}>Điện thoại</Text>
              <Text style={styles.tOK}>
                {item.phone}
                {'  ||  '}
                {item.cell}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dfe3e6',
  },
  gradientBackground: {
    width: '100%',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  rowContainer: {
    position: 'absolute',
    top: 250,
    width: '100%',
    height: '100%',
  },
  vBack: {
    position: 'absolute',
    top: 35,
    left: 15,
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
  vAnhBia: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
  },
  iAnhBia: {
    height: 250,
    width: '100%',
  },
  vAVT: {
    position: 'absolute',
    top: 160,
    left: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 90,
    height: 70,
    width: 70,
  },
  iAVT: {
    height: 65,
    width: 65,
    borderRadius: 90,
  },
  vName: {
    position: 'absolute',
    flexDirection: 'row',
    top: 180,
    left: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 90,
  },
  tName: {
    fontSize: 20,
    color: '#fff',
  },
  iName: {
    height: 15,
    width: 15,
  },
  ok: {
    marginLeft: 10,
    backgroundColor: '#fff',
    height: 25,
    width: 25,
    borderRadius: 90,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tThongTin: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  vItem: {
    marginTop: 1.5,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 25,
    paddingVertical: 15,
    backgroundColor: '#fff',
  },
  tItem: {
    fontSize: 16,
    color: 'grey',
  },
  tOK: {
    fontSize: 16,
    marginLeft: 'auto',
  },
});
