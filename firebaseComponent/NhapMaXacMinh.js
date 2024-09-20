import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import auth from '@react-native-firebase/auth';

export default function NhapMaXacMinh({ route, navigation }) {
  const { verificationId } = route.params;
  const [code, setCode] = useState('');

  const handleVerifyCode = async () => {
    try {
      const credential = auth.PhoneAuthProvider.credential(
        verificationId,
        code,
      );
      await auth().signInWithCredential(credential);
      Alert.alert('Thành công', 'Số điện thoại đã được xác minh.');
      navigation.navigate('DangKy');
    } catch (error) {
      Alert.alert('Lỗi', 'Xác minh mã thất bại.');
      console.error(error);
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Nhập mã xác minh</Text>
      <TextInput
        placeholder="Mã xác minh"
        value={code}
        onChangeText={setCode}
        keyboardType="numeric"
        style={{ borderBottomWidth: 1, marginBottom: 20 }}
      />
      <Button title="Xác minh" onPress={handleVerifyCode} />
    </View>
  );
}
