import React, { Component } from 'react'
import {
  Text,
  View,
  Image,
  Dimensions, StyleSheet,
} from 'react-native'
import Swiper from 'react-native-swiper';

const { width } = Dimensions.get('window')

export default class Slider extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Swiper style={styles.wrapper} height={190} autoplay showsButtons
          onMomentumScrollEnd={(e, state, context) => console.log('index:', state.index)}
          dot={<View style={{backgroundColor: 'rgba(0,0,0,.2)', width: 5, height: 5, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3}} />}
          activeDot={<View style={{backgroundColor: '#000', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3}} />}
          buttonWrapperStyle={{backgroundColor: 'transparent', flexDirection: 'row', position: 'absolute', top: 0, left: 0, flex: 1, paddingHorizontal: 10, paddingVertical: 10, justifyContent: 'space-between', alignItems: 'center'}}
          paginationStyle={{
            bottom: -23, left: null, right: 10
          }} loop>
          <View style={styles.slide}>
            <Image resizeMode='stretch' style={styles.image} source={{uri:'https://www.seva.id/otomotif/wp-content/uploads/sites/2/2018/09/Movic-App-Banner_MOVIC-1-1.jpg'}} />
          </View>
          <View style={styles.slide}>
            <Image resizeMode='stretch' style={styles.image} source={{uri:'https://www.seva.id/otomotif/wp-content/uploads/sites/2/2018/09/Movic-App-Banner_MOVIC-2-1.jpg'}} />
          </View>
          <View style={styles.slide}>
            <Image resizeMode='stretch' style={styles.image} source={{uri:'https://bagoestrans.files.wordpress.com/2012/02/cropped-spanduk-bagoes-300x100-1x-lipat-putihan-keling-a4-b2.jpg'}} />
          </View>
          <View style={styles.slide}>
            <Image resizeMode='stretch' style={styles.image} source={{uri:'https://www.bastianrental.com/wp-content/uploads/2018/05/Banner-rental-mobil-murah-1.png'}} />
          </View>
        </Swiper>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  wrapper: {
  },

  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent'
  },

  image: {
    width,
    flex: 1
  }
});
