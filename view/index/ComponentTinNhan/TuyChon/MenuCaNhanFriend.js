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
  Switch,
} from 'react-native';
import GradientBackground from '../../../../contain/gradientBackground';

export default function MenuCaNhanFriend({ route, navigation }) {
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
                source={require('../../../../image/quaylai.png')}
                resizeMode="contain"
              />
            </TouchableOpacity>
            <View style={styles.vTimKiem}>
              <Text style={styles.tTimKiem}>
                {item.name.first} {item.name.last}
              </Text>
            </View>
          </View>
        </GradientBackground>
        <View style={styles.contentContainer}>
          <TouchableOpacity
            style={styles.vForm}
            onPress={() =>
              navigation.navigate('ThongTinCaNhanFriend', { item })
            }
          >
            <Text style={styles.tForm}>Thông tin</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.vForm1}>
            <Text style={styles.tForm}>Đổi tên gợi nhớ</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.vForm1}>
            <Text style={styles.tForm}>Đánh dấu bạn thân</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.vForm1}>
            <Text style={styles.tForm}>Giới thiệu cho bạn</Text>
          </TouchableOpacity>
          <View style={styles.vForm2}>
            <View>
              <Text style={styles.tForm1}>Thông báo</Text>

              {/* <Switch /> */}
            </View>
            <TouchableOpacity>
              <Text style={styles.tForm}>
                Nhận thông báo hoạt động mới của người này
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.vForm2}>
            <View>
              <Text style={styles.tForm1}>Cài đặt riêng tư</Text>
            </View>
            <TouchableOpacity>
              <Text style={styles.tForm}>Chặn xem nhật ký của tôi</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.vForm1}>
            <Text style={styles.tForm}>Ẩn nhật ký của người này</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.vForm2}>
            <View>
              <Text style={styles.tForm}>Báo xấu</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.vForm1}>
            <View>
              <Text style={[styles.tForm, { color: 'red' }]}>Xóa bạn</Text>
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
    backgroundColor: '#f3f4f6',
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
    width: 23,
    height: 23,
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
  vForm: {
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
  tForm: {
    fontSize: 16,
  },
  vForm1: {
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    paddingVertical: 15,
    marginTop: 1.5,
  },
  vForm2: {
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    paddingVertical: 15,
    marginTop: 8,
  },
  tForm1: {
    fontSize: 16,
    paddingBottom: 15,
    color: '#1194ff',
    fontWeight: 'bold',
  },
});
