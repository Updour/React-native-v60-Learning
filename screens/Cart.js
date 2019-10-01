import React, { Component } from 'react'
import { Text, View, StyleSheet, Button, TouchableOpacity, Image, Dimensions} from 'react-native'
import { Ionicons } from 'react-native-vector-icons';

const {height, width} = Dimensions.get('window')

class Cart extends Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#fff'}}>
      <View style={{height: 90, backgroundColor: '#F5F5F5', borderBottomColor: '#ddd', borderBottomWidth: 1, 
      flexDirection: 'row',  shadowOffset: {width: 0, height: 0},
                    shadowColor: 'black',
                    shadowOpacity: 0.2,
                    elevation: 5,}}>
        <Image source={require('../src/img/LogoMobile.png')}
                      style={{height: 100, width: 100, 
                      borderRadius: 5, 
                      shadowOffset: {width: 0, height: 0},
                      shadowColor: 'black',
                      shadowOpacity: 1,
                      borderColor: '#ddd',
                      marginTop: 10}}
        />
        <Text style={{paddingLeft: 26, marginTop: 40, color: 'blue', fontSize: 25, fontWeight: 'bold'}}>Keranjang</Text>
      </View>
      <Imageback/>
    </View>
    );
  }
}

class Imageback extends Component {
  render(){
    return(
    <View style={styles.container}>
    <View style={styles.anda}>
      <Image 
        source={require('../images/cart.png')}
        style={styles.backgroundImage}
      />
      <Text style={styles.Textt}>Keranjang Kosong!</Text>
      <Text style={styles.ket}>Silahkan lakukan pemesanan barang.</Text>
      </View>
    </View>
    )
  }
}

const styles = StyleSheet.create({
container: {
    flex: 1,
  },
anda: {
  flex: 1,
  paddingLeft: 70,
  marginTop: 130
},
backgroundImage: {
    width: 220,
    height: 220,
    alignSelf: 'stretch',
    justifyContent: 'center',
    paddingLeft: 100
  },
  Textt: {
    fontWeight: 'bold',
    fontSize: 15,
    paddingLeft: 48
  },
  Views: {
    paddingLeft: 10,
    marginTop: -100
  },
  ket: {
    marginTop: 20,
    fontSize: 14
  }
})
export default Cart
