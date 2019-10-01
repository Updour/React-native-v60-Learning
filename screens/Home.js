import React, { Component } from 'react'
import { Text, View, StyleSheet, SafeAreaView, 
    TextInput, Platform, StatusBar, ScrollView,
    Image, Dimensions, params, ImageBackground, Animated, Alert, AppRegistry, ActivityIndicator, FlatList, TouchableOpacity, TouchableHighlight, RefreshControl,
} from 'react-native';
import { Rating, AirbnbRating } from 'react-native-elements';
import {createAppContainer, createStackNavigator, StackActions, NavigationActions} from 'react-navigation'; 
import { Button } from 'react-native-elements';
import FontAwesome, { Icons } from 'react-native-fontawesome';
import { FontAwesomeIcon } from 'react-native-fontawesome';
import { default as NumberFormat } from 'react-number-format';
import * as Animatable from 'react-native-animatable';
import {CirclesLoader, PulseLoader, TextLoader, DotsLoader} from 'react-native-indicator';
import IonIcon from 'react-native-vector-icons/Ionicons';
import Swiper from './Swiper';
import Promo from '../components/Promo';
import ImageCarousel from '../components/promosi/ImageCarousel';
import axios from 'axios'

const {height, width} = Dimensions.get('window')


// import
import ModalDetails from './Components/ModalDetails'

export default class Home extends Component {
  render() {
    return (
        <SafeAreaView style={{flex:1, backgroundColor: '#F5F5F5'}}>
          <View style={{flex: 1}}> 
            <Animated.View style={styles.animated}>

              <View style={{ paddingLeft: -10, marginTop: 10,}}>
                <Image source={require('../src/img/LogoMobile.png')}
                       style={styles.Logom} 
                />

                </View>
                <View>
                  <View style={styles.android}>
                    <IonIcon
                      name="ios-search" size={24} color='grey'
                    />

                <TouchableHighlight onPress={() => this.props.navigation.navigate('Search')} underlayColor="#fff">
                  <View>
                    <TextInput
                      placeholder='Cari Produk'
                      placeholderTextColor='grey'
                      underlineColorAndroid='transparent'
                      style={{flex:1, fontWeight: '700', backgroundColor: 'white', marginLeft: 10 }} />
                  </View>
                </TouchableHighlight>
              </View>
            </View>
          </Animated.View>

              <ScrollView
                scrollEventThrottle={16}
                onScroll={Animated.event([
                    {
                        nativeEvent: {contentOffset:{y:this.scrollY}}
                    }
                ])}
                >

              <View style={styles.swipe}> 
                <Swiper />  
              </View>

                <View style={{flex: 1, paddingTop:15, backgroundColor: '#F5F5F5'}}>
                 <View style={{flexDirection: 'row', margin: 20}}>
                  <View style={{paddingLeft: 5, width: 130}}>
                    <Button
                      onPress={() => this.props.navigation.navigate('Notifikasi', {hideTabBar: true})}
                      title="Notifikasi"
                      icon={{name: 'notifications', color: 'blue'}}
                      buttonStyle={styles.buttons}
                      titleStyle={{fontWeight: 'bold', color: 'black'}}
                    />
                  </View>

                  <View style={{paddingLeft: 60, width: 185}}>
                  <Button
                      onPress={() => this.props.navigation.navigate('Vendor')}
                      title="Vendor"
                      icon={{name: 'store', color: 'blue'}}
                      buttonStyle={styles.buttons}
                      titleStyle={{ fontWeight: 'bold', color: 'black' }}
                    />
                  </View>
                </View>

              <View style={{flexDirection: 'row', backgroundColor: '#F5F5F5'}}>
                <View style={styles.hairline} />
                <Text style={styles.loginButtonBelowText1}>KATEGORI</Text>
                <View style={styles.hairline} />
              </View>
                
                <View style={{margin: 20, flexDirection: 'row', backgroundColor: '#F5F5F5'}}>

              <TouchableHighlight onPress={() => this.props.navigation.navigate('Kendaraan')} underlayColor="#F5F5F5">
                <View>
                  <Image 
                      source={require('../images/ButtonTransprtasi.png')} 
                      style={{height: 90, width: 90}}
                  />
                  <Text style={{paddingLeft: 9}}>Kendaraan</Text>
                </View>
              </TouchableHighlight>

              <TouchableHighlight onPress={() => this.props.navigation.navigate('Pakaian')} underlayColor="#F5F5F5">
                <View style={{paddingLeft: 25}}>
                  <Image source={require('../images/ButtonPakaian.png')} 
                      style={{height: 90, width: 90}}
                  />
                  <Text style={{paddingLeft: 19}}>Pakaian</Text>
                </View>
              </TouchableHighlight>

              <TouchableHighlight onPress={() => this.props.navigation.navigate('Sarana')} underlayColor="#F5F5F5">
                <View style={{paddingLeft: 25}}>
                  <Image source={require('../images/ButtonGedung.png')}
                      style={{height: 90, width: 90}}
                  />
                  <Text style={{paddingLeft: 25}}>Sarana</Text>
                </View>
              </TouchableHighlight>

              </View>

                <View style={{flex: 1, marginTop: 50,elevation: 7, height: 300, paddingLeft: 5}}>
                <ImageCarousel/>
              </View>

                <View style={{flex: 1, flexDirection: 'row' ,paddingTop:45, backgroundColor: '#F5F5F5', marginTop: 30, paddingLeft: 20}}>
                    <Image 
                    source={require('../images/thumbs-up.png')}
                    style={{width: 33, height: 33, paddingLeft: 20}}
                    />
                  <Text style={{ fontSize: 14, fontWeight: '500', paddingLeft: 10, marginTop: 5 }}>
                              Produk Pilihan
                  </Text>
                </View>
                  <View>
                    <Text style={{ paddingLeft: 62, color: 'grey', marginTop: -10 }}>
                        Produk-produk yang kami rekomendasikan!</Text>
                  </View>
                </View>
              <Content/>
            </ScrollView>
          </View>
        </SafeAreaView>
    )
  }
}

 class Content extends Component {
  
  constructor(props){
    super(props);
    this.state ={ 
      isLoading: true,
      modalVisible: false,
      text: '', 
      refreshing: false,
      dataSource: [],
      price: ''
    }
  }

  _onRefresh = () => {
    this.setState({refreshing: true});
    fetchData().then(() => {
      this.setState({refreshing: false});
    });
  }
  
  componentDidMount(){
    return fetch('http://192.168.0.179/api/sewabarang/index.php/home/')
    .then((response) => response.json())
    .then((responseJson) => {

      this.setState({
        isLoading: false,
        dataSource: responseJson.barang,
      })
    })
    .catch((error) =>{ //catch menangkap eror.
      console.error(error);
    });

  }

  _onRetrieveValueIdData = async (id) => {
    try {
      let uri = 'http://192.168.0.179/api/sewabarang/index.php/home/api/sewabarang/index.php/home?id=' + id
      let results = await axios.get(uri)
      let response = results.data.barang
      let data = response
      // in render
      let names = data.nama_barang
      let prices = data.harga
      let images = data.gambar_barang
      let descriptions = data.deskripsi
      let assurance = data.jaminan
      this.setState({
        names: names,
        prices: prices,
        images: images,
        descriptions: descriptions,
        assurance: assurance,
        modalVisible: true
      })
    }catch(e) {
      throw e
    }
  }
    
  render() {
    let { names, prices, images, descriptions, assurance, isLoading } = this.state;
    if (isLoading){
      return(
        <View style={{flex:1, alignContent:"center", justifyContent:"center"}}>
          <ActivityIndicator size='large' color='blue'/>
        </View>
      );
    }
    return(
      <SafeAreaView style={{flex:1}}>
      <ScrollView 
      horizontal={true}  
      showsHorizontalScrollIndicator={true}>
        <FlatList
          data={this.state.dataSource}
          renderItem={({item})=>
           <PostView
           onPress={() => this._onRetrieveValueIdData(item.id_barang)}
           /*Button={() => this.props.navigation.navigate('Detail', {'id': item.id})}*/
           namaBarang={item.nama_barang}
           Harga={item.harga}
           gambarBarang={item.gambar_barang}
           Desk ={item.deskripsi}
           Jaminan={item.jaminan}
        />
        }
        numColumns={2}
          keyExtractor={(x,y) => y.toString()}
        >
        </FlatList>
      </ScrollView>

    {/*for modal pop up in pressed*/}
      <ModalDetails 
        visible={this.state.modalVisible}
        onPress={() => this.setState({modalVisible: true})}
        onRequestClose={() => this.setState({modalVisible: false})}
      >
      <View style={{flex:4}}>
      <View style={{
        backgroundColor:'white', 
        flex:3, 
        margin:5,
        flexWrap: "wrap", 
        borderWidht:0.5, 
        borderRadius:10, 
        borderColor: '#ddd', 
        resizeMode:'cover', 
        borderWidth: 1,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 2,
        width: 170,
        }}>
        <Image source={{uri: images}}
          style={{
            height:130, 
            width: 168,
            borderTopLeftRadius:10,
            borderTopRightRadius:10,
            }}
        >
        </Image>
        <Text style={{fontSize:13, fontWeight:'bold', paddingTop: 5, paddingLeft: 5, margin:5, width: '80%'}}>{names}</Text>
        <View style={{flex: 1, flexDirection: 'row', paddingTop: 5, margin:10, flexWrap: "wrap"}}>
        <NumberFormat value={prices} 
          displayType={'text'}
          thousandSeparator={true} 
          prefix={'Rp.'} 
            renderText={value => 
              <Text style={styles.price}>{value}/Hari</Text>
            } 
        />
        <Rating
            type='star'
            ratingCount={1}
            imageSize={25}
            onFinishRating={this.ratingCompleted}
            style={{paddingTop: 12, paddingLeft: 10}}
          />
        </View>
      </View>
    </View>

      </ModalDetails>
      </SafeAreaView>
    );
  }
}

class PostView extends Component{

  render(){
    return(
      <View style={{flex:4}}>
      <View style={styles.postHorder}>
        <Image source={{uri:this.props.gambarBarang}}
          style={styles.postImage}
        >
        </Image>
        <Text style={styles.postText}>{this.props.namaBarang}</Text>
        <View style={styles.Viewp}>
        <NumberFormat value={this.props.Harga} displayType={'text'} thousandSeparator={true} prefix={'Rp.'} renderText={value => <Text style={styles.price}>{value}/Hari</Text>} />
        <Rating
            type='star'
            ratingCount={1}
            imageSize={25}
            onFinishRating={this.ratingCompleted}
            style={{paddingTop: 12, paddingLeft: 10}}
          />
        </View>
       <Button
          title="Go to Details"
          onPress={this.props.onPress}
        />
      </View>
    </View>
    );
  }
} 


const styles = StyleSheet.create({
  hairline: {
  backgroundColor: '#A2A2A2',
  height: 1,
  width: 120,
  marginTop: 30,
  paddingLeft: 100,
  margin: 11,
},

loginButtonBelowText1: {
  fontSize: 14,
  paddingHorizontal: 5,
  alignSelf: 'center',
  color: '#000',
  marginTop: 15,
  fontWeight: 'bold',
},
price: {
  paddingTop: 15, 
  color: 'green', 
  paddingRight: 5,
  width: '70%' 
},
animated: {
  height: 90,
  backgroundColor: '#F5F5F5',
  borderBottomColor: '#ddd',
  borderBottomWidth: 1,
  flexDirection: 'row',
  shadowOffset: {width: 0, height: 0},
  shadowColor: 'black',
  shadowOpacity: 0.2,
  elevation: 5,
},
Logom: {
  height: 100, width: 100, borderRadius: 5, 
  shadowOffset: {width: 0, height: 0},
  shadowColor: 'black',
  shadowOpacity: 1,
  borderColor: '#ddd'
},
android: {
  flexDirection: 'row',
  padding: 10,
  marginHorizontal: -5,
  backgroundColor: 'white',
  shadowOffset: {width: 0, height: 0},
  shadowColor: 'black',
  shadowOpacity: 0.2,
  elevation: 1,
  marginTop: Platform.OS == 'android' ? 35 : null,
  marginRight: 10, 
  borderRadius: 5,
  height: 45,
  width: 250,
  borderWidth: 0.2,
  borderColor: '#ddd',
},
swipe: {
  flex: 1, marginTop: -5, borderColor: 'grey',
  shadowColor: "#000",
  shadowOffset: {width: 0, height: 2,},
  shadowOpacity: 0.25,
  shadowRadius: 3.84,
  elevation: 10
},
buttons: {
  backgroundColor: 'white',
  borderWidth: 0.1,
  borderColor: 'grey',
  borderRadius: 10,
  shadowColor: "#000",
  shadowOffset: { width: 0, height: 2, },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,
  elevation: 4,
  height: 50,
},
postHorder: {
  backgroundColor:'white', 
  flex:3, 
  margin:5,
  flexWrap: "wrap", 
  borderWidth:0.5, 
  borderRadius:10, 
  borderColor: '#ddd', 
  resizeMode:'cover', 
  borderWidth: 1,
  shadowColor: "#000",
  shadowOffset: { width: 0, height: 2, },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,
  elevation: 2,
  width: 170,
},
postImage: {
  height:130, 
  width: 168,
  borderTopLeftRadius:10,
  borderTopRightRadius:10,
},
postText: {
  fontSize: 13, 
  fontWeight: 'bold', 
  paddingTop: 5, 
  paddingLeft: 5, 
  margin: 5, 
  width: '80%'
},
Viewp: {
  flex: 1, 
  flexDirection: 'row', 
  paddingTop: 5, 
  margin:10, 
  flexWrap: "wrap"
}
});