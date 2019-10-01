import React from 'react'
import {
  Text,
  View,
  Image
} from 'react-native'
import Swiper from 'react-native-swiper'
import SwiperFlatList from 'react-native-swiper-flatlist';

var styles = {
  wrapper: {
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000FFF',
    borderRadius: 10
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000FFF',
    borderRadius: 10
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000FFF',
    borderRadius: 10
  },
  slide4: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000FFF',
    borderRadius: 10
  },
  text: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold'
  }
}

export default () => <Swiper style={styles.wrapper} autoplay height={200} autoplayDelay={2} autoplayLoop index={2}
dot={<View style={{backgroundColor: 'rgba(0,0,0,.2)', width: 5, height: 5, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3}} />}
activeDot={<View style={{backgroundColor: 'white', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3}} />}>
  <View style={styles.slide1}>
  <Image source={require('../src/img/Iklan.png')}
         style={{height: 40, width: 250}}
  />
    <Text style={styles.text}>Memudahkan anda dalam mencari barang.</Text>
  </View>
  <View style={styles.slide2}>
  <Image source={require('../src/img/Iklan.png')}
         style={{height: 40, width: 250}}
  />
    <Text style={styles.text}>Nikmati promo menarik dari aplikasi sewabarang.</Text>
  </View>
  <View style={styles.slide3}>
  <Image source={require('../src/img/Iklan.png')}
         style={{height: 40, width: 250}}
  />
    <Text style={styles.text}>Bahkan anda bisa menjadi Vendor.</Text>
  </View>
  <View style={styles.slide4}>
  <Image source={require('../src/img/Iklan.png')}
         style={{height: 40, width: 250}}
  />
    <Text style={styles.text}>Mudah diakses dimana saja dan kapan saja.</Text>
  </View>
</Swiper>
