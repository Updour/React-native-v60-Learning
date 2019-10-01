import React, { Component } from 'react';
import { 
  AppRegistry,StyleSheet, KeyboardAvoidingView, View, ActivityIndicator,
        TouchableOpacity, Image, Text, Keyboard, Alert, TouchableHighlight, 
        AsyncStorage, Dimensions } from 'react-native';
import { Button } from 'react-native-elements';
import {createAppContainer, createStackNavigator, StackActions, NavigationActions} from 'react-navigation';
import { TextInput, TextInputOutlined } from 'react-native-paper';

import Registrasi from './Registrasi';
import Profile from './Profile';
import Forgot from './Forgot';

const { height, width } = Dimensions.get('window');

export default class Login extends Component {
 constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            
        }
    }

    _storateData = async () => {
      try {
          await AsyncStorage.setItem('Email', this.state.email);
      }
      catch(error) {
          alert(error);
      }
  }

  login(){
    var email   = this.state.email;
    var password = this.state.password;

    return fetch('http://192.168.0.179/api/sewabarang/index.php/auth/login',
      {
        method: 'post',
        headers:new Headers({
          'Content-Type': 'application/x-www-form-urlencoded',
        }),
        body: "email="+email+"&password="+password
      }
    )
    .then((response) => response.json())
    .then((responseJson) => {
      if (responseJson.msg == 'sb') {
        let email = this.state.email
        AsyncStorage.setItem('email', email) //nah ini sudah di simpan , mau nampilinapa saja?
        //nampilin nama yg login dan biar gk kehalaman login lagi pas tekan tombol back diandroid
        AsyncStorage.setItem('@keyData', JSON.stringify(responseJson)) //untuk menyimpan datauser y login /
        this._storateData();
        this.props.navigation.navigate('Home'); //ini ganti ke home 
        // this.props.navigation.navigate('Home');  //jadi ketika login sukses baru k halaman home 
      } else {
        Alert.alert('username atau password salah');
      }
    })
    .catch((error) =>{
      console.error(error);
    });
  }

  static navigationOptions = {
  header: null,
  tabBarVisible: false,
  };   
    
  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require('../src/img/bgLogin1.jpg')} style={styles.backgroundImage} />
              <View style={styles.content}>
              <View style={styles.inputContainer}>
              <Text style={styles.input}>Login</Text>
                <TextInput 
                label='Email'
                mode="outlined"
                ref={(input) => { this.fifthTextInput = input; }}   
                onChangeText={(email) => this.setState({ email})}
                value={this.state.email}
                autoCapitalize='none'>
                </TextInput>

                <TextInput 
                label='Password'
                mode="outlined"
                ref={(input) => { this.fifthTextInput = input; }} 
                secureTextEntry={true}
                onChangeText={(password) => this.setState({ password })}
                value={this.state.password}
                autoCapitalize='none'>
                </TextInput>
            </View>

            <View style={{paddingLeft: 200, marginTop: 3}}>
            <Button 
            title = "Lupa Kata Sandi"
            type = "clear"
            titleStyle={{
              color: 'black'
            }}
            onPress={() => this.props.navigation.navigate('Forgot')}
            />
            </View>
            
            <TouchableHighlight onPress={this.login.bind(this)} style={styles.buttonContainer}>
                  <Text style={styles.buttonText}>MASUK</Text>
            </TouchableHighlight>

            <View style={styles.LoginV}>
            <View style={{flexDirection:'row' ,marginTop: 15, paddingLeft: 70}}>
            <Text style={{color: 'black'}}>Belum Punya Akun?</Text>
            </View>
            
            <View style={{marginTop: 3, paddingLeft: 1}}>
            <Button 
            title="Daftar disini"
            type="clear"
            onPress={() => this.props.navigation.navigate('Registrasi')}
            />
            </View>
            </View>
          </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    width: 365,
    height: 100,
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
  content: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0, 
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 240,
  },
  inputContainer: {
    marginTop: 125,
    width: 330,
  },
  input: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingLeft: 137,
    margin: 10
  },
  buttonContainer: {
    alignSelf: 'stretch',
    margin: 20,
    padding: 20,
    backgroundColor: 'blue',
    borderRadius: 10,
    shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
  LoginV: {
    flexDirection: 'row', 
    marginTop: 45, 
    paddingLeft: 20, 
    backgroundColor: 'white', 
    width: 400, 
    height: 60,
    shadowOffset: {width: 5, height: 3},
    shadowColor: 'black',
    shadowOpacity: 0.5,
    elevation: 5
  }
});


AppRegistry.registerComponent('assessment', () => Login);