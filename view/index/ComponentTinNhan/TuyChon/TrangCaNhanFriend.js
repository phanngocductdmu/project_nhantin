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
import GradientBackground from '../../../../contain/gradientBackground';

export default function TrangCaNhan({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent={true}
      />
      <View style={styles.vBia}>
        <Image
          style={styles.iBia}
          source={require('../../../../image/android.jpg')}
          resizeMode="cover"
        />
      </View>
      <View style={styles.rowContainer}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          style={styles.vBack}
        >
          <Image
            style={styles.iBack}
            source={require('../../../../image/quaylai.png')}
          />
        </TouchableOpacity>
        <View style={styles.vToolbar}>
          <TouchableOpacity style={{ paddingRight: 10 }}>
            <Image
              style={styles.iQR}
              source={require('../../../../image/whilecall.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity style={{ paddingRight: 10 }}>
            <Image
              style={styles.iQR}
              source={require('../../../../image/whileusersetting.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.vPlus}
            onPress={() => {
              navigation.navigate('MenuCaNhanFriend');
            }}
          >
            <Image
              style={styles.iQR}
              source={require('../../../../image/whilebacham.png')}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.vAVT}>
          <Image
            style={styles.iAVT}
            source={require('../../../../image/android.jpg')}
          />
        </View>
      </View>
      <View style={styles.contentContainer}>
        <View style={{ flex: 1 }}>
          <View style={styles.vName}>
            <Text style={styles.tName}>Phan Ngoc Duc </Text>
            <TouchableOpacity>
              <Image
                style={styles.iSuaName}
                source={require('../../../../image/butchi.png')}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.vTieuSu}>
            <Text style={styles.tTieuSu}>Tieu su</Text>
          </View>
          <View style={styles.content}>
            <TouchableOpacity style={styles.contentV}>
              <Image
                style={styles.contentI}
                source={require('../../../../image/blueanh.png')}
              />
              <Text style={styles.contentT}>Ảnh 3</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.contentV}>
              <Image
                style={styles.contentI}
                source={require('../../../../image/greenvideocall.png')}
              />
              <Text style={styles.contentT}>Video 1</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.vThoiGian}>
            <Text style={styles.tThoiGian}>2 tháng 5</Text>
          </View>
          <View style={styles.body}>
            <View style={styles.vNoiDung}>
              <Text style={styles.tNoiDung}>Nội dung bài viết</Text>
              <Image
                style={styles.iBaiDang}
                source={require('../../../../image/android.jpg')}
              />
            </View>
            <View style={styles.vCMT}>
              <TouchableOpacity style={styles.vLike}>
                <Image
                  style={styles.iLike}
                  source={require('../../../../image/un_tim.png')}
                />
                <Text style={{ marginLeft: 5 }}>Thích</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.vBinhLuan}>
                <Image
                  style={styles.iLike}
                  source={require('../../../../image/binhluan.png')}
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.vLuaChon}>
                <Text style={styles.tLuaChon}>...</Text>
              </TouchableOpacity>
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
    backgroundColor: '#f5f6f8',
    color: '#fff',
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 40,
    width: '100%',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  vBack: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  iBack: {
    width: 23,
    height: 23,
  },
  iQR: {
    width: 23,
    height: 23,
  },
  vToolbar: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 9,
    justifyContent: 'flex-end',
  },
  vBia: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
  },
  iBia: {
    height: 250,
    width: '100%',
  },
  vAVT: {
    position: 'absolute',
    top: 115,
    height: 141,
    width: 141,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderRadius: 90,
  },
  iAVT: {
    height: 135,
    width: 135,
    borderRadius: 90,
  },
  contentContainer: {
    position: 'absolute',
    top: 300,
    width: '100%',
  },
  vName: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tName: {
    fontSize: 20,
  },
  iSuaName: {
    height: 20,
    width: 20,
  },
  vTieuSu: {
    alignItems: 'center',
  },
  tTieuSu: {
    color: 'grey',
  },
  content: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    paddingTop: 20,
  },
  contentV: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginHorizontal: 0,
    borderRadius: 13,
    alignItems: 'center',
    height: 50,
    width: '49%',

    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 3,
  },
  contentI: {
    marginHorizontal: 13,
    height: 27,
    width: 27,
  },
  contentT: {
    fontSize: 16,
  },
  vThoiGian: {
    marginLeft: 20,
    marginTop: 25,
    backgroundColor: '#e0e0e0',
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 8,
    width: 100,
  },
  tThoiGian: {
    fontSize: 16,
  },
  body: {
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  tNoiDung: {
    fontSize: 16,
  },
  iBaiDang: {
    marginTop: 10,
    width: 100,
    height: 100,
  },
  vCMT: {
    marginTop: 20,
    flexDirection: 'row',
  },
  iLike: {
    height: 25,
    width: 25,
  },
  vLike: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f7f7f7',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
  },
  vBinhLuan: {
    marginLeft: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f7f7f7',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
  },
  vLuaChon: {
    flex: 1,
    alignItems: 'flex-end',
    marginRight: 10,
    marginLeft: 200,
  },
  tLuaChon: {
    color: '#7f7f7f',
    fontWeight: 'bold',
    fontSize: 30,
  },
});
