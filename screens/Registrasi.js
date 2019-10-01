import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
  Image,
  Dimensions,
  Picker,
  ScrollView,
  TouchableHighlight,
} from 'react-native';

import { TextInput} from 'react-native-paper'; 
import { Button } from 'react-native-elements';
import { Dropdown } from 'react-native-material-dropdown';
import Loading from 'react-native-whc-loading';

const { height, width } = Dimensions.get('window');

export default class Registrasi extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: null,
    tabBarVisible: false,
  });
  constructor(props) {
    super(props);
    this.state = {isLoading: true}

    this.state = {
      id_kabupaten: '',
      email: '',
      password: '',
      alamat: '',
      nama: '',
      uploading: false
    }
  }

  registrasi(){
    var iNama = this.state.nama;
    var iEmail = this.state.email;
    var iPassword = this.state.password;
    var iAlamat = this.state.alamat;
    var iId_kabupaten = this.state.id_kabupaten;

    return fetch('http://192.168.0.179/api/sewabarang/index.php/auth/registrasi/', 
    {
        method: 'post',
        headers: new Headers ({
          'Content-Type': 'application/x-www-form-urlencoded',
        }),
         body: "nama="+iNama+"&email="+iEmail+"&password="+iPassword+"&alamat="+iAlamat+"&id_kabupaten="+iId_kabupaten
        }
      )
        .then((response) => response.json())
        .then((responseJson) => {
          Alert.alert(responseJson.msg)
          this.props.navigation.navigate('Login');
        })
      .catch((error) => {
        console.error(error);
      });
    }
  render() {
    if (this.state.isLoading){
      this.return(
      <View style={{flex:1, alignContent:"center", justifyContent:"center"}}>
        <ActivityIndicator></ActivityIndicator>
      </View>
      );
    }

    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={{ paddingLeft: 25, width: 100, marginTop: 50 }}>
            <Image
              source={require('../src/img/LOGOREGIS.png')}
              style={{ height: 50, width: 305 }}
            />
          </View>
          <View style={styles.content}>
            <View style={styles.inputContainer}>

              <TextInput
                label="Nama"
                mode="outlined"
                onChangeText={nama => this.setState({ nama })}
                value={this.state.nama}
              />
              
              <TextInput
                label="Email"
                mode="outlined"
                onChangeText={email => this.setState({ email })}
                value={this.state.email}
              />

              <TextInput
                label="Kabupaten"
                mode="outlined"
                onChangeText={id_kabupaten => this.setState({ id_kabupaten })}
                value={this.state.id_kabupaten}
              />

              <TextInput
                label="Alamat"
                mode="outlined"
                {...this.props}
                editable={true}
                maxLength={200}
                numberOfLines={4}
                multiline={true}
                onChangeText={alamat => this.setState({ alamat })}
                value={this.state.alamat}
              />

              <TextInput
                label="Kata Sandi"
                mode="outlined"
                secureTextEntry={true}
                onChangeText={password => this.setState({ password })}
                value={this.state.password}
              />
            </View>
            <TouchableHighlight
              onPress={this.registrasi.bind(this)}
              style={styles.buttonContainer}>
              <Text style={styles.buttonText}>DAFTAR</Text>
            </TouchableHighlight>

            <View style={styles.LoginV}>
            <View style={{flexDirection:'row' ,marginTop: 20, paddingLeft: 10}}>
            <Text style={{color: 'black'}}>Sudah Punya Akun?</Text>
            </View>
            
            <View style={{marginTop: 9, paddingLeft: 1}}>
            <Button 
            title="Masuk disini"
            type="clear"
            onPress={() => this.props.navigation.navigate('Login')}
            />
            </View>
            </View>

          </View>
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5'
  },
  inputContainer: {
    margin: 20,
    marginBottom: 0,
    padding: 20,
    paddingBottom: 10,
    alignSelf: 'stretch',
    borderWidth: 1,
    borderColor: '#4e73df',
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: 10,
    marginTop: 50,
  },
  input: {
    fontSize: 16,
    height: 40,
    padding: 10,
    marginBottom: 10,
    backgroundColor: 'rgba(255,255,255,1)',
    borderRadius: 5,
  },
  inputAlamat: {
    fontSize: 16,
    height: 60,
    padding: 10,
    marginBottom: 10,
    backgroundColor: 'rgba(255,255,255,1)',
    borderRadius: 5,
  },
  buttonContainer: {
    alignSelf: 'stretch',
    margin: 20,
    padding: 20,
    backgroundColor: '#4e73df',
    borderRadius: 10,
    shadowColor: '#000',
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
    marginTop: 50, 
    height: 80, 
    paddingLeft: 60, 
    backgroundColor: 'white',
    shadowOffset: {width: 5, height: 3},
    shadowColor: 'black',
    shadowOpacity: 0.5,
    elevation: 5
  }
});

AppRegistry.registerComponent('assessment', () => Registrasi);
