import React from 'react'
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import IonIcon from 'react-native-vector-icons/Ionicons';

import  MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


// nah import disini komponentnya 
import Home from '../screens/Home'
import Toko from '../screens/Toko'
import Cart from '../screens/Cart'
import Login from '../screens/Login'
// nanti lanjutin ya?
// toko,cart etc 

const AppTabNavigator = createBottomTabNavigator({
  Home:{
    screen: Home,
    navigationOptions: {
      tabBarLabel: 'BERANDA',
      tabBarIcon: ({tintColor}) => (
        <IonIcon
        name="ios-home" size={24} color={tintColor}
        />
      )
    }
  },
  Toko: {
    screen: Toko,
    navigationOptions: {
      tabBarLabel: 'TOKO',
      tabBarIcon: ({tintColor}) => (
        <MaterialCommunityIcons
        name="store" size={24} color={tintColor}
        />
      )
    }
  },
  Cart: {
    screen: Cart,
    navigationOptions: {
      tabBarLabel: 'KERANJANG',
      tabBarIcon: ({tintColor}) => (
        <IonIcon
        name="ios-cart" size={24} color={tintColor}
        />
      )
    }
  },
  Login: {
    screen: Login,
    navigationOptions: {
      tabBarLabel: 'AKUN',
      tabBarIcon: ({tintColor}) => (
        <IonIcon
        name="ios-person" size={24} color={tintColor}
        />
      )
    }
  }
},{
    animationEnabled: true
  },
  {
  tabBarOptions:{
    activeTintColor: 'blue',
    inactiveTintColor: 'grey',
    style: {
        backgroundColor: '#F5F5F5',
        borderTopWidth: 0,
        shadowOffset: {width: 5, height: 3},
        shadowColor: 'black',
        shadowOpacity: 0.5,
        elevation: 5
    }
  },
});

export default createAppContainer(AppTabNavigator) //kan sudah d export nah ini baru kita panggil di stack nav


