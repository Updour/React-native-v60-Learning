import react from 'react'
import {createAppContainer, createStackNavigator, StackActions, NavigationActions} from 'react-navigation';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
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
import Search from '../screens/Search';
import Detail from '../screens/Detail';
import Login from '../screens/Login';
import Registrasi from '../screens/Registrasi';
import Forgot from '../screens/Forgot';

import AppTabNavigator from '../navigation/TabBottomScreen';
// import disini file tabbottom nya 
// import TabBottomScreen from './TabBottomScreen'
// nah disni semua file yg ada stack navigasinya 
// setelah ini baru di tarok di app.js 

const RootRouterStack = createStackNavigator({ 
  AppTabNavigator: { screen: AppTabNavigator },
    Home: {
      screen: Home,
      navigationOptions: {
        header: null
      }
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
      navigationOptions: {tabBarVisible: false}
    },
    Kendaraan: {
      screen: Kendaraan,
      navigationOptions: {tabBarVisible: false}
    },
    Pakaian: { 
      screen: Pakaian,
      navigationOptions: {tabBarVisible: false}
    },
    Sarana: {
      screen: Sarana,
      navigationOptions: {tabBarVisible: false}
    },
    Detail: {
      screen: Detail,
      navigationOptions: {tabBarVisible: false}
    },
    Jas: {
      screen: Jas,
      navigationOptions: {tabBarVisible: false}
    },
    Kebaya: {
      screen: Kebaya,
      navigationOptions: {tabBarVisible: false}
    },
    Mobil: {
      screen: Mobil,
      navigationOptions: {tabBarVisible: false}
    },
    Motor: {
      screen: Motor,
      navigationOptions: {tabBarVisible: false}
    },
    Sepeda: {
      screen: Sepeda,
      navigationOptions: {tabBarVisible: false}
    },
    Gedung: {
      screen: Gedung,
      navigationOptions: {tabBarVisible: false}
    },
    Search: {
       screen: Search,
       navigationOptions: {tabBarVisible: false}
     },
     Forgot: {
      screen: Forgot,
      navigationOptions: {tabBarVisible: false}
     },
     Registrasi: {
      screen: Registrasi,
      navigationOptions: {tabBarVisible: false}
    },

    })



export default createAppContainer(RootRouterStack)