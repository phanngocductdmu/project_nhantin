import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import home from './home';
import dangNhap from './dangNhap';
import index from './tabNavigaton';
import NhanTin from './index/ComponentTinNhan/NhanTin';
import TaoTaiKhoanMoi from './TaoTaiKhoanMoi';
import DangKy from './index/DangKy';
import TimKiem from './index/TimKiem';
import TuyChon from './index/ComponentTinNhan/TuyChon';
import TrangCaNhanFriend from './index/ComponentTinNhan/TuyChon/TrangCaNhanFriend';
import MenuCaNhanFriend from './index/ComponentTinNhan/TuyChon/MenuCaNhanFriend';

const Stack = createStackNavigator();

export default RootComponent = function () {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="home"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="home" component={home} />
        <Stack.Screen name="dangNhap" component={dangNhap} />
        <Stack.Screen name="index" component={index} />
        <Stack.Screen name="NhanTin" component={NhanTin} />
        <Stack.Screen name="TaoTaiKhoanMoi" component={TaoTaiKhoanMoi} />
        <Stack.Screen name="DangKy" component={DangKy} />
        <Stack.Screen name="TimKiem" component={TimKiem} />
        <Stack.Screen name="TuyChon" component={TuyChon} />
        <Stack.Screen name="TrangCaNhanFriend" component={TrangCaNhanFriend} />
        <Stack.Screen name="MenuCaNhanFriend" component={MenuCaNhanFriend} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
