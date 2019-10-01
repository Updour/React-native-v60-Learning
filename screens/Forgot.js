import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  Alert,
  Image,
  Dimensions,
  Picker,
  ScrollView,
  TouchableHighlight,
} from 'react-native';
import { createStackNavigator } from 'react-native-navigation';
import { withNavigation } from 'react-native-navigation';
import { Dropdown } from 'react-native-material-dropdown';
import Loading from 'react-native-whc-loading';
import { TextInput, TextInputOutlined } from 'react-native-paper'; 

const { height, width } = Dimensions.get('window');

export default class Forgot extends Component {
  static navigationOptions= ({navigation}) =>({
    header: null,
  })
  render() {
    return(
      <View style={styles.container}>
        <Image
          source={require('../src/img/bgLogin1.jpg')} style={styles.backgroundImage} />
              <View style={styles.content}>
               
              <View style={styles.inputContainer}>
                <TextInput
                label="Email" 
                mode="outlined"
                ref={(input) => { this.fifthTextInput = input; }}   
                onChangeText={(email) => this.setState({email})}
                autoCapitalize='none'>
                </TextInput>
                
        <TouchableHighlight style={styles.buttonContainer}>
                  <Text style={styles.buttonText}>MASUK</Text>
        </TouchableHighlight>
      </View>
      </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5'
  },
  backgroundImage: {
    flex: 1,
    width: null,
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
    marginTop: 280,
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
    marginTop: 95,
  },
  input: {
    fontSize: 16,
    height: 40,
    padding: 10,
    marginBottom: 10, 
    backgroundColor: 'rgba(255,255,255,1)',
    borderRadius: 5
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
  }
});