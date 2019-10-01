import React, { Component } from 'react'
import IonIcon from 'react-native-vector-icons/Ionicons';
import { Text, View, StyleSheet, SafeAreaView, 
    TextInput, Platform, StatusBar, ScrollView,
    Image, Dimensions, ImageBackground, Animated, Alert, AppRegistry, ActivityIndicator, FlatList, TouchableOpacity, TouchableHighlight,
} from 'react-native';
import { Rating, AirbnbRating } from 'react-native-elements';

export default class Jas extends Component {
  static navigationOptions = {
    title: 'Jas',
    headerStyle: {
      backgroundColor: 'blue',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };
  constructor(props){
    super(props);
    this.state ={ isLoading: true, text: ''}
  }
  
  componentDidMount(){
    return fetch('http://192.168.1.6/tanaman/index.php/service')
    .then((response) => response.json())
    .then((responseJson) => {

      this.setState({
        isLoading: false,
        dataSource: responseJson.tanaman,
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
        <View style={{flex: 1, marginTop: -28}}> 
        
                </View>
        
        <FlatList
          data={this.state.dataSource}
          renderItem={({item})=>
           <PostView
           tanamanName={item.tanaman_name}
           desc ={item.description}
           tanamanImg={item.tanaman_image}
        />
        }numColumns={2}
          keyExtractor={({tanaman_id}, index) => tanaman_id}
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
      <View style={{flex:4}}>
      <View style={{
        backgroundColor:'white', 
        flex:3, 
        margin:5, 
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
        }}>
        <Image source={{uri:this.props.tanamanImg}}
          style={{
            height:130, 
            width: 160,
            borderTopLeftRadius:10,
            borderTopRightRadius:10,
            }}
        ></Image>
        <Text style={{fontSize:13, fontWeight:'bold', paddingTop: 5, paddingLeft: 5, margin:5}}>{this.props.tanamanName}</Text>
        <View style={{flex: 1, flexDirection: 'row', paddingTop: 5, margin:10}}>
        <Text style={{paddingTop: 15, color: 'green', paddingRight: 5}}>{this.props.desc}</Text>
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