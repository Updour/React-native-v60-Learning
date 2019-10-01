import React, { Component } from 'react'
import { 
  Text, View, StyleSheet, Animated, Platform, BackHandler, TouchableOpacity, Image, Switch, ScrollView, 
  Alert, AppRegistry, Dimensions, AsyncStorage
} from 'react-native';
import { Button } from 'react-native-elements';
import { Avatar, ListItem } from 'react-native-elements';
import { Icon } from 'react-native-elements';
import {createStackNavigator} from 'react-native-navigation';
import IonIcon from 'react-native-vector-icons/Ionicons';


const { height, width } = Dimensions.get('window');

class Profile extends Component {
 //  componentDidMount() {
 //    this._retrieveData()
 // }

 //   _retrieveData = async () => {
 //  try {
 //       const value = await AsyncStorage.getItem('@keyData'); //get item ketika set di screen login yang mau di tampilkan
 //     if (value) {
 //       // We have data!!
 //       console.log(value); //di console.log datanya muncul apa gak? jika muncul
 //        let parsed = JSON.parse(value)
 //        console.log(parsed)
 //        this.setState({ 
 //         name: parsed.name //kan sudah di setState baru deh d render
 //        })
 //     }
 //   } catch (error) {
 //     // Error retrieving data
 //   }
 // };

  static navigationOptions= ({navigation}) =>({
   title: 'Akun',
   header: null,
   tabBarVisible: false,
  });

  logout = () =>{
      Alert.alert(
        'Warning',
        'Apa anda yakin?',
        [
          {text:'yes', onPress: () => this.props.navigation.navigate('Login')},
          {text:'no', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        ]
      );
  };
  static navigationOptions = {
  title: 'Akun',
  header: null,
  tabBarVisible: false,
  headerLeft: null
  };  

  render() {
    // console.log(this.state.name) //memastikan muncul gak ?? kalau muncul baru tarok d render
    return (
      <ScrollView style={styles.scroll}>
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
        <Text style={{paddingLeft: 48, marginTop: 40, color: 'blue', fontSize: 25, fontWeight: 'bold'}}>Akun</Text>
      </View>
        <View style={styles.userRow}>
          <View style={styles.userImage}>
            <Avatar
              rounded
              size="large"
              source={{
                uri:'https://cdn.pixabay.com/photo/2014/04/03/10/32/businessman-310819_960_720.png'
              }}
            />
          </View>
          <View>
            {/*<Text style={{ fontSize: 16 }}>{this.state.name}</Text>*/}
            <Text
              style={{
                color: 'gray',
                fontSize: 16,
              }}
            >
              sutaone13@gmail.com
            </Text>
          </View>
      </View>
      <View style={{paddingLeft: 102}}>
      <View style={{marginTop: -25}}>
          <Button 
          title="Edit Profil"
          color="blue"
          buttonStyle={{height: 30, width: 90}}
          />   
      </View>
      </View>
        <View style={{marginTop: 10}}>
        <View style={styles.container} />
        </View>
        <View>
          <ListItem
            title="Ubah kata sandi"
            containerStyle={styles.listItemContainer}
            leftIcon={
              <Icon
              size={24}
              name='lock'
              type='feather'
              color='blue'
            />
            }
           rightIcon={
            <Icon
              size={24}
              name='ios-arrow-forward'
              type='ionicon' 
              color='grey'
            />
          }
          />
          <ListItem
            title="Tentang Kami"
            containerStyle={styles.listItemContainer}
            leftIcon={
               <Icon
              size={24}
              name='information-outline'
              type='material-community'
              color='blue'
            />
            }
           rightIcon={
            <Icon
              size={24}
              name='ios-arrow-forward'
              type='ionicon' 
              color='grey'
            />
          }
          />
          <ListItem
            title="FAQ"
            containerStyle={styles.listItemContainer}
            leftIcon={
              <Icon
              size={24}
              name='questioncircleo'
              type='antdesign'
              color='blue'
            />
            }
          rightIcon={
            <Icon
              size={24}
              name='ios-arrow-forward'
              type='ionicon' 
              color='grey'
            />
          }
          />
          <ListItem
            title="Privacy Policy"
            containerStyle={styles.listItemContainer}
            leftIcon={
              <Icon
              size={24}
              name='shield-outline'
              type='material-community'
              color='blue'
            />
            }
           rightIcon={
            <Icon
              size={24}
              name='ios-arrow-forward'
              type='ionicon' 
              color='grey'
            />
          }
          />
        <View>
        <View style={styles.container} />
        </View>
          <ListItem
            title="Keluar"
            containerStyle={styles.listItemContainer}
            onPress={this.logout}
            leftIcon={
              <Icon
              size={24}
              name='logout'
              type='simple-line-icon' 
              color='blue'
            />
            }
          rightIcon={
            <Icon
              size={24}
              name='ios-arrow-forward'
              type='ionicon' 
              color='grey'
            />
          }
          />
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  scroll: {
    backgroundColor: '#F5F5F5',
  },
  userRow: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingBottom: 8,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 6,
  },
  userImage: {
    marginRight: 12,
    marginTop: 20,
  },
  listItemContainer: {
    height: 55,
    borderWidth: 0.5,
    borderColor: '#ECECEC',
  },
  container: {
    paddingTop: 20,
    paddingBottom: 12,
    backgroundColor: '#F4F5F4',
  },
})

AppRegistry.registerComponent('assessment', () => Profile);

export default Profile