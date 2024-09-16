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

export default function NhatKy({ navigation }) {
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
                source={require('../../image/search.png')}
                resizeMode="contain"
              />
            </TouchableOpacity>
            <View style={styles.vTimKiem}>
              <Text style={styles.tTimKiem}>Tìm kiếm</Text>
            </View>
            <TouchableOpacity style={{ paddingRight: 10 }}>
              <Image
                style={styles.iQR}
                source={require('../../image/qr.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.vPlus}>
              <Image
                style={styles.iPlus}
                source={require('../../image/plus.png')}
              />
            </TouchableOpacity>
          </View>
        </GradientBackground>
        <View style={styles.contentContainer}></View>
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
    flex: 8.3,
  },
});
