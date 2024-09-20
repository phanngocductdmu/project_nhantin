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
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import GradientBackground from '../../../contain/gradientBackground';

export default function NhanTin({ navigation, route }) {
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
            <View style={styles.vName}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('TuyChon', { item });
                }}
              >
                <Text style={styles.tName}>
                  {item.name.first} {item.name.last}
                </Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={{ paddingRight: 15 }}>
              <Image
                style={styles.iQR}
                source={require('../../../image/call.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity style={{ paddingRight: 15 }}>
              <Image
                style={styles.iQR}
                source={require('../../../image/videocall.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.vMenu}>
              <Image
                style={styles.iPlus}
                source={require('../../../image/menu.png')}
              />
            </TouchableOpacity>
          </View>
        </GradientBackground>
        <View style={styles.contentContainer}></View>
        <KeyboardAvoidingView
          style={styles.bottomInput}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          keyboardVerticalOffset={10}
        >
          <View style={styles.vNhanDan}>
            <TouchableOpacity>
              <Image
                style={styles.iNhanDan}
                source={require('../../../image/nhandan.png')}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.vInput}>
            <TextInput style={styles.inputTinNhan} placeholder="Tin nhắn" />
          </View>
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e4e8f3',
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
  vName: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: 5,
    paddingLeft: 10,
  },
  tName: {
    color: 'white',
    fontSize: 16,
  },
  contentContainer: {
    flex: 8.3,
    backgroundColor: '#e4e8f3',
  },
  bottomInput: {
    flex: 0.7,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  iNhanDan: {
    height: 30,
    width: 30,
    backgroundColor: '#e2e1e1',
    borderRadius: 10,
  },
  vNhanDan: {
    marginLeft: 15,
    marginBottom: 20,
  },
  vInput: {
    marginLeft: 15,
    marginBottom: 20,
    marginTop: 15,
    width: '60%',
  },
  inputTinNhan: {
    fontSize: 16,
  },
});
