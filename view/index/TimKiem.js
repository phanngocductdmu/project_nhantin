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
  FlatList,
} from 'react-native';
import GradientBackground from '../../contain/gradientBackground';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'; // Import thư viện

export default function TimKiem({ navigation }) {
  return (
    <KeyboardAwareScrollView
      style={styles.container}
      enableOnAndroid={true}
      extraScrollHeight={100}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.innerContainer}>
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
                  source={require('../../image/quaylai.png')}
                  resizeMode="contain"
                />
              </TouchableOpacity>
              <TextInput
                style={styles.vTimKiem}
                placeholder="Tìm kiếm"
                keyboardType="default"
              />
              <TouchableOpacity>
                <Image
                  style={styles.iQR}
                  source={require('../../image/qr.png')}
                />
              </TouchableOpacity>
            </View>
          </GradientBackground>
          <View style={styles.contentContainer}>{/* <FlatList /> */}</View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    backgroundColor: '#fff',
    color: '#fff',
  },
  gradientBackground: {
    width: '100%',
    justifyContent: 'center',
    paddingHorizontal: 20,
    height: 88,
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
    backgroundColor: '#fff',
    borderRadius: 10,
    height: 33,
    marginHorizontal: 10,
    marginRight: 40,
    fontSize: 16,
  },
  tTimKiem: {
    color: 'white',
  },
  contentContainer: {
    flex: 8.3,
  },
});
