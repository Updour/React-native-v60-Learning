import React, { Component } from 'react'
import { Text, View, StyleSheet, SafeAreaView, 
    TextInput, Platform, StatusBar, ScrollView,
    Image, Dimensions, ImageBackground, Animated, Alert, AppRegistry, ActivityIndicator, FlatList, TouchableOpacity, TouchableHighlight,
} from 'react-native';
import { Rating, AirbnbRating } from 'react-native-elements';
import { Button } from 'react-native-elements';
import FontAwesome, { Icons } from 'react-native-fontawesome';
import { FontAwesomeIcon } from 'react-native-fontawesome';
import { Divider } from 'react-native-elements';


const {height, width} = Dimensions.get('window')


export default class Detail extends Component {
  
    constructor(props){
    super(props);
    this.state ={ 
      isLoading: true, 
      text: '', 
      refreshing: false,
    }
  }

  _onRefresh = () => {
    this.setState({refreshing: true});
    fetchData().then(() => {
      this.setState({refreshing: false});
    });
  }

  
  componentDidMount(){
    return fetch('http://192.168.0.179/api/sewabarang/index.php/home/' + navigation.getParam('id'))
    .then((response) => response.json())
    .then((responseJson) => {

      this.setState({
        isLoading: false,
        dataSource: responseJson.barang,
      }, function(){

      });

    })
    .catch((error) =>{ //catch menangkap eror.
      console.error(error);
    });

  }
    
  render() {
    if (this.state.isLoading){
      return(
        <View style={{flex:1, alignContent:"center", justifyContent:"center"}}>
          <ActivityIndicator></ActivityIndicator>
        </View>
      );
    }

    return(
      <SafeAreaView style={{flex:1}}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>

        <FlatList
          data={this.state.dataSource}
          renderItem={({item})=>
           <PostView
           namaBarang={item.nama_barang}
           Harga={item.harga}
           gambarBarang={item.gambar_barang}
           Desk ={item.deskripsi}
           Jaminan={item.jaminan}
        />
        }
        numColumns={2}
          keyExtractor={({barang_id}, index) => barang_id}
        >
        </FlatList>
      </ScrollView>
      </SafeAreaView>
    );
  }
}
class PostView extends Component{
  render(){
     const { navigation } = this.props;
    const itemId = navigation.getParam('itemId', 'NO-ID');
    console.log('id', itemID)
    const otherParam = navigation.getParam('otherParam', 'some default value');
    return(
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
        <Image source={{uri:this.props.gambarBarang}}
          style={{
            height:130, 
            width: 168,
            borderTopLeftRadius:10,
            borderTopRightRadius:10,
            }}
        ></Image>
        <Text style={{fontSize:13, fontWeight:'bold', paddingTop: 5, paddingLeft: 5, margin:5, width: '80%'}}>{this.props.namaBarang}</Text>
        <View style={{flex: 1, flexDirection: 'row', paddingTop: 5, margin:10, flexWrap: "wrap"}}>
        <NumberFormat value={this.props.Harga} displayType={'text'} thousandSeparator={true} prefix={'Rp.'} renderText={value => <Text style={styles.price}>{value}/Hari</Text>} />
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
    );
  }
} 