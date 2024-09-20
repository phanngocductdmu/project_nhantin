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
  ScrollView,
} from 'react-native';
import GradientBackground from '../../../contain/gradientBackground';

export default function TuyChon({ route, navigation }) {
  const { item } = route.params;
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
                source={require('../../../image/quaylai.png')}
                resizeMode="contain"
              />
            </TouchableOpacity>
            <View style={styles.vTimKiem}>
              <Text style={styles.tTimKiem}>Tùy chọn</Text>
            </View>
          </View>
        </GradientBackground>
        <View style={styles.contentContainer}>
          <ScrollView>
            <View style={{ backgroundColor: '#ffffff' }}>
              <View style={styles.vAVT}>
                <Image
                  style={styles.iAVT}
                  source={{ uri: item.picture.large }}
                />
              </View>
              <View style={styles.vUsername}>
                <Text style={styles.tUsername}>
                  {item.name.first} {item.name.last}
                </Text>
              </View>
              <View style={styles.vTieuSu}>
                <Text style={styles.tTieuSu}>Tiểu sử</Text>
              </View>
              <View style={styles.body}>
                <TouchableOpacity style={styles.vTuyChon}>
                  <View style={styles.vChon}>
                    <Image
                      style={styles.iTuyChon}
                      source={require('../../../image/timtinnhan.png')}
                    />
                  </View>
                  <Text style={styles.tTuyChon}>Tìm</Text>
                  <Text style={styles.tTuyChon}>tin nhắn</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.vTuyChon}
                  onPress={() => {
                    navigation.navigate('TrangCaNhanFriend', {item});
                  }}
                >
                  <View style={styles.vChon}>
                    <Image
                      style={styles.iTuyChon}
                      source={require('../../../image/blacktrangcanhan.png')}
                    />
                  </View>
                  <Text style={styles.tTuyChon}>Trang</Text>
                  <Text style={styles.tTuyChon}>cá nhân</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.vTuyChon}>
                  <View style={styles.vChon}>
                    <Image
                      style={styles.iTuyChon}
                      source={require('../../../image/doihinhnen.png')}
                    />
                  </View>
                  <Text style={styles.tTuyChon}>Đổi</Text>
                  <Text style={styles.tTuyChon}>hình nền</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.vTuyChon}>
                  <View style={styles.vChon}>
                    <Image
                      style={styles.iTuyChon}
                      source={require('../../../image/blacktatthongbao.png')}
                    />
                  </View>
                  <Text style={styles.tTuyChon}>Tắt</Text>
                  <Text style={styles.tTuyChon}>thông báo</Text>
                </TouchableOpacity>
              </View>
            </View>
            <TouchableOpacity style={{ backgroundColor: '#fff', marginTop: 9 }}>
              <View style={styles.vCustomBody}>
                <Image
                  style={styles.iCustomBody}
                  source={require('../../../image/butchi.png')}
                />
                <Text style={styles.tCustomBody}>Đổi tên gợi nhớ</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ backgroundColor: '#fff', marginTop: 1.7 }}
            >
              <View style={styles.vCustomBody}>
                <Image
                  style={styles.iCustomBody}
                  source={require('../../../image/ngoisao.png')}
                />
                <Text style={styles.tCustomBody}>Đánh dấu bạn thân</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ backgroundColor: '#fff', marginTop: 1.7 }}
            >
              <View style={styles.vCustomBody}>
                <Image
                  style={styles.iCustomBody}
                  source={require('../../../image/anhfile.png')}
                />
                <Text style={styles.tCustomBody}>Ảnh, file, link</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ backgroundColor: '#fff', marginTop: 1.7 }}
            >
              <View style={styles.vCustomBody}>
                <Image
                  style={styles.iCustomBody}
                  source={require('../../../image/taonhom.png')}
                />
                <Text style={styles.tCustomBody}>
                  Tạo nhóm với {item.name.first} {item.name.last}
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ backgroundColor: '#fff', marginTop: 1.7 }}
            >
              <View style={styles.vCustomBody}>
                <Image
                  style={styles.iCustomBody}
                  source={require('../../../image/themvaonhom.png')}
                />
                <Text style={styles.tCustomBody}>
                  Thêm {item.name.first} {item.name.last} vào nhóm
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ backgroundColor: '#fff', marginTop: 1.7 }}
            >
              <View style={styles.vCustomBody}>
                <Image
                  style={styles.iCustomBody}
                  source={require('../../../image/xemnhomchung.png')}
                />
                <Text style={styles.tCustomBody}>Xem nhóm chung (9)</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={{ backgroundColor: '#fff', marginTop: 9 }}>
              <View style={styles.vCustomBody}>
                <Image
                  style={styles.iCustomBody}
                  source={require('../../../image/ghim.png')}
                />
                <Text style={styles.tCustomBody}>Ghim trò chuyện</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ backgroundColor: '#fff', marginTop: 1.7 }}
            >
              <View style={styles.vCustomBody}>
                <Image
                  style={styles.iCustomBody}
                  source={require('../../../image/thephanloai.png')}
                />
                <Text style={styles.tCustomBody}>Thẻ phân loại</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ backgroundColor: '#fff', marginTop: 1.7 }}
            >
              <View style={styles.vCustomBody}>
                <Image
                  style={styles.iCustomBody}
                  source={require('../../../image/antrochuyen.png')}
                />
                <Text style={styles.tCustomBody}>Ẩn trò chuyện</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ backgroundColor: '#fff', marginTop: 1.7 }}
            >
              <View style={styles.vCustomBody}>
                <Image
                  style={styles.iCustomBody}
                  source={require('../../../image/baocuocgoiden.png')}
                />
                <Text style={styles.tCustomBody}>Báo cuộc gọi đến</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ backgroundColor: '#fff', marginTop: 1.7 }}
            >
              <View style={styles.vCustomBody}>
                <Image
                  style={styles.iCustomBody}
                  source={require('../../../image/caidatcanhan.png')}
                />
                <Text style={styles.tCustomBody}>Cài đặt trang cá nhân</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ backgroundColor: '#fff', marginTop: 1.7 }}
            >
              <View style={styles.vCustomBody}>
                <Image
                  style={styles.iCustomBody}
                  source={require('../../../image/tinnhantuxoa.png')}
                />
                <Text style={styles.tCustomBody}>Tin nhắn tự xóa</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={{ backgroundColor: '#fff', marginTop: 9 }}>
              <View style={styles.vCustomBody}>
                <Image
                  style={styles.iCustomBody}
                  source={require('../../../image/baoxau.png')}
                />
                <Text style={styles.tCustomBody}>Báo xấu</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ backgroundColor: '#fff', marginTop: 1.7 }}
            >
              <View style={styles.vCustomBody}>
                <Image
                  style={styles.iCustomBody}
                  source={require('../../../image/chan.png')}
                />
                <Text style={styles.tCustomBody}>Quản lý chặn</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ backgroundColor: '#fff', marginTop: 1.7 }}
            >
              <View style={styles.vCustomBody}>
                <Image
                  style={styles.iCustomBody}
                  source={require('../../../image/dungluongtrochuyen.png')}
                />
                <Text style={styles.tCustomBody}>Dung lượng trò chuyện</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ backgroundColor: '#fff', marginTop: 1.7 }}
            >
              <View style={styles.vCustomBody}>
                <Image
                  style={styles.iCustomBody}
                  source={require('../../../image/xoalichsutrochuyen.png')}
                />
                <Text style={styles.tCustomBody}>Xóa lịch sử trò chuyện</Text>
              </View>
            </TouchableOpacity>
          </ScrollView>
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
    flex: 9,
    backgroundColor: '#f5f6f8',
  },
  vAVT: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  iAVT: {
    height: 90,
    width: 90,
    borderRadius: 90,
  },
  vUsername: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  tUsername: {
    fontSize: 20,
  },
  vTieuSu: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  tTieuSu: {
    color: 'grey',
  },
  body: {
    paddingVertical: 25,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  vTuyChon: {
    paddingHorizontal: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iTuyChon: {
    height: 23,
    width: 23,
  },
  vChon: {
    backgroundColor: '#f7f7f7',
    height: 35,
    width: 35,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  vCustomBody: {
    flexDirection: 'row',
    height: 60,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  iCustomBody: {
    height: 25,
    width: 25,
    marginRight: 15,
  },
  tCustomBody: {
    fontSize: 16,
  },
});
