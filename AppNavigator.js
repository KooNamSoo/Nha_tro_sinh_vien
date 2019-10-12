import React,{Component} from'react';
import{Image} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import ManHinhChinh from './screens/ManHinhChinh';
import ManHinhPhu from './screens/ManHinhPhu';
import TinTucBds from './screens/TinTucBds';
import NoiDungTin from './screens/NoiDungScreens';
import ThongTinNhaTro from './screens/ThongTinNhaTro';
const ManhinhnchinhStack = createStackNavigator({
  ManHinhChinh,
  ManHinhPhu,
  ThongTinNhaTro,
});
ManhinhnchinhStack.navigationOptions ={
 tabBarLabel:'Trang chủ',
 tabBarIcon: ({ focused }) => (
  focused ? <Image
      source={require('./images/house_.png')}
      style={{width:25, height: 25}}
    />
    :
    <Image
      source={require('./images/house.png')}
      style={{width:25, height: 25}}
    />
),
 

};
const NewsStack = createStackNavigator({
    TinTucBds,
    NoiDungTin,
});
NewsStack.navigationOptions={
  tabBarLabel:'Tin Tức',
  tabBarIcon: ({ focused}) => (
    focused ? <Image
        source={require('./images/newspaper_active.png')}
        style={{width:25, height: 25}}
      />
      :
      <Image
        source={require('./images/newspaper.png')}
        style={{width:25, height: 25}}
      />
  ),
}
const AppNavigator = createBottomTabNavigator({
    ManhinhnchinhStack,
    NewsStack,
});
export default AppNavigator;