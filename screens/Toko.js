import React, { Component } from 'react'
import { Text, View, StyleSheet, Animated, Platform, TouchableOpacity, Image, Switch, ScrollView, Alert, ActivityIndicator, SafeAreaView, FlatList} from 'react-native';
import { Button } from 'react-native-elements';
import { Avatar, ListItem } from 'react-native-elements';
import PropTypes from 'prop-types';
import { Icon } from 'react-native-elements';
import { Rating, AirbnbRating } from 'react-native-elements'; 
import { default as NumberFormat } from 'react-number-format';
import * as Animatable from 'react-native-animatable';


class Toko extends Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#fff'}}>
      <View style={{height: 90, backgroundColor: '#F5F5F5', borderBottomColor: '#ddd', borderBottomWidth: 1, 
      flexDirection: 'row', shadowOffset: {width: 0, height: 0},
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
        <Text style={{paddingLeft: 48, marginTop: 40, color: 'blue', fontSize: 25, fontWeight: 'bold'}}>Toko</Text>
      </View>
      <Content/>
      </View>
    );
  }
}

class Content extends Component {
  
  constructor(props){
    super(props);
    this.state ={ isLoading: true, text: '', refreshing: false,}
  }

  _onRefresh = () => {
    this.setState({refreshing: true});
    fetchData().then(() => {
      this.setState({refreshing: false});
    });
  }

  
  componentDidMount(){
    return fetch('http://192.168.0.179/api/sewabarang/index.php/vendor/')
    .then((response) => response.json())
    .then((responseJson) => {

      this.setState({
        isLoading: false,
        dataSource: responseJson.vendor,
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
           namaUser={item.nama_user}
           Gambar={item.gambar}
           Alamat ={item.alamat}
        />
        }
          keyExtractor={({user_id}, index) => user_id}
        >
        </FlatList>
      </ScrollView>
      </SafeAreaView>
    );
  }
}
class PostView extends Component{
  render(){
    return(
      <View style={styles.postHolder}>
      <View style={styles.postContent}>
          <View style={{flex:1, flexDirection: 'row'}}>
            <Image 
              source={{uri: this.props.Gambar}}
              style={styles.postUserPic}
            ></Image>
            <View style={{flex:5}}>
            <Text style={styles.postUserName}>{this.props.namaUser}</Text>
            <Text style={styles.alamat}>
              {this.props.Alamat}
            </Text>
          </View>
          </View>
        </View>
        <View style={styles.hairline} />
        <View style={{flex:1}}>
          <Image 
            source={{uri: this.props.postImg}}
            style={styles.postImg}
          ></Image>
        </View>
      </View>
    );
  }
} 

const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  besar: {
    fontSize: 30,
    backgroundColor: '#ff0000'
  },
  putih40: {
    fontSize: 40, 
    color: '#fff'
  },
  postHolder: {
    margin:10, 
    borderColor:'grey', 
    borderWidth:0.5,
    width: 340
  },
  postImg: {
    height: 250, 
    width:'100%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10
  },
  postContent: {
    flex:1, 
    flexDirection: 'row', 
    padding:10
  },
  postUserPic: {
    height:45, 
    width:45, 
    borderRadius:20
  },
  postUserName: {
    fontSize:15, 
    fontWeight:'bold',
    paddingLeft: 10
  },
  alamat: {
    fontSize: 13,
    color: 'grey',
    paddingLeft: 10
  },
  hairline: {
  backgroundColor: '#A2A2A2',
  height: 0.5,
  width: 315,
  marginTop: 5,
  paddingLeft: 100,
  margin: 11,
},
});

export default Toko