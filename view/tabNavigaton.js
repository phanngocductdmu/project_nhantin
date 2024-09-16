import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TinNhan from './index/TinNhan';
import DanhBa from './index/DanhBa';
import KhamPha from './index/KhamPha';
import NhatKy from './index/NhatKy';
import CaNhan from './index/CaNhan';
import { Image } from 'react-native';

const Tab = createBottomTabNavigator();

export default function Index() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconPath;
          if (route.name === 'Tin nhắn') {
            iconPath = require('../image/un_message.png');
          } else if (route.name === 'Danh bạ') {
            iconPath = require('../image/un_danhba.png');
          } else if (route.name === 'Khám phá') {
            iconPath = require('../image/un_khampha.png');
          } else if (route.name === 'Nhật ký') {
            iconPath = require('../image/un_nhatky.png');
          } else if (route.name === 'Cá nhân') {
            iconPath = require('../image/un_user.png');
          }

          return (
            <Image
              source={iconPath}
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? '#38ef7d' : 'grey',
              }}
            />
          );
        },
        tabBarActiveTintColor: '#38ef7d',
        tabBarInactiveTintColor: 'grey',
        tabBarStyle: {
          height: 85,
          paddingBottom: 10,
          paddingTop: 5,
        },
        tabBarLabelStyle: {
          marginBottom: 25,
        },
        headerShown: false,
      })}
    >
      <Tab.Screen name="Tin nhắn" component={TinNhan} />
      <Tab.Screen name="Danh bạ" component={DanhBa} />
      <Tab.Screen name="Khám phá" component={KhamPha} />
      <Tab.Screen name="Nhật ký" component={NhatKy} />
      <Tab.Screen name="Cá nhân" component={CaNhan} />
    </Tab.Navigator>
  );
}
