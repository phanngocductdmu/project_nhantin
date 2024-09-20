import React, { useState, useEffect } from 'react';
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
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import connect from '../../api/connect';

export default function TimKiem({ navigation }) {
  const [outputs, setOutputs] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [filteredOutputs, setFilteredOutputs] = useState([]);

  useEffect(() => {
    connect
      .get('/?results=100&seed=fullstackio')
      .then((result) => {
        setOutputs(result.data.results);
        setFilteredOutputs(result.data.results);
      })
      .catch((error) => console.error('API fetch error:', error));
  }, []);

  useEffect(() => {
    if (searchText === '') {
      setFilteredOutputs(outputs);
    } else {
      const filteredData = outputs.filter((item) => {
        const fullName = `${item.name.first.toLowerCase()} ${item.name.last.toLowerCase()}`;
        return fullName.includes(searchText.toLowerCase());
      });
      setFilteredOutputs(filteredData);
    }
  }, [searchText, outputs]);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.vBody}
      onPress={() => {
        navigation.navigate('TrangCaNhanFriend', { item });
      }}
    >
      <Image source={{ uri: item.picture.medium }} style={styles.iAnh} />
      <Text style={styles.tName}>
        {item.name.first} {item.name.last}
      </Text>
    </TouchableOpacity>
  );

  return (
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
              value={searchText}
              onChangeText={(text) => setSearchText(text)}
            />
            <TouchableOpacity>
              <Image
                style={styles.iQR}
                source={require('../../image/qr.png')}
              />
            </TouchableOpacity>
          </View>
        </GradientBackground>
        <View style={styles.contentContainer}>
          <FlatList
            data={filteredOutputs} // Thay vì outputs
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    backgroundColor: '#e4e8f3',
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
  vBody: {
    flexDirection: 'row',
    height: 'auto',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: '#fff',
    marginHorizontal: 10,
    marginVertical: 7,
    borderRadius: 10,
  },
  iAnh: {
    height: 60,
    width: 60,
    borderRadius: 90,
  },
  tName: {
    fontSize: 16,
    marginLeft: 10,
  },
});
