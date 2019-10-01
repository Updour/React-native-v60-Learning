import React, { Component } from 'react';
import {createAppContainer, createStackNavigator, StackActions, NavigationActions} from 'react-navigation';

import Home from '../screen/Home';
import Profile from '../screen/Profile';
import Vendor from '../components/Vendor';
import Notifikasi from '../components/Notifikasi';
import Kendaraan from '../components/kendaraan/Kendaraan';
import Pakaian from '../components/pakaian/Pakaian';
import Sarana from '../components/sarana/Sarana';
import Jas from '../components/pakaian/Jas';
import Kebaya from '../components/pakaian/Kebaya';
import Mobil from '../components/kendaraan/Mobil';
import Motor from '../components/kendaraan/Motor';
import Sepeda from '../components/kendaraan/Sepeda';
import Gedung from '../components/sarana/Gedung';
import Search from '../screen/Search';
import Detail from '../screen/Detail';

const AppNavigator = createStackNavigator({
    Home: {
      screen: Home,
    },
    Profile: { 
      screen: Profile 
     },
    Vendor: { 
      screen: Vendor,
      navigationOptions: {tabBarVisible: false}
    },
    Notifikasi: {
      screen: Notifikasi,
    },
    Kendaraan: {
      screen: Kendaraan
    },
    Pakaian: { 
      screen: Pakaian
    },
    Sarana: {
      screen: Sarana
    },
    Detail: {
      screen: Detail
    },
    Jas: {
      screen: Jas
    },
    Kebaya: {
      screen: Kebaya
    },
    Mobil: {
      screen: Mobil
    },
    Motor: {
      screen: Motor
    },
    Sepeda: {
      screen: Sepeda
    },
    Gedung: {
      screen: Gedung
    },
    Search: {
      screen: Search
    }
});

HomeStack.navigationOptions = ({
navigation}) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false
  }
  
  return {
    tabBarVisible,
  };
};

export default AppNavigator