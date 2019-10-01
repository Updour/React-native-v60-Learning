import React, { Component } from 'react'
import { Text, View, StyleSheet, SafeAreaView, 
    TextInput, Platform, StatusBar, ScrollView,
    Image, Dimensions, ImageBackground, Animated, RefreshControl, Alert, AppRegistry, ActivityIndicator, FlatList, TouchableOpacity
} from 'react-native';
import { Rating, AirbnbRating } from 'react-native-elements';
import {Carousel} from 'react-native-snap-carousel';
import { Card } from 'react-native-paper';
import ImageCarousel from './promosi/ImageCarousel';

export default class Notifikasi extends Component {
  static navigationOptions = {
    title: 'Notifikasi',
    headerStyle: {
      backgroundColor: 'blue',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  render(){
    return (
      <View></View>
      );
  }

}


