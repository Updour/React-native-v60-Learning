import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  ScrollView,
  Image,
  Dimensions,
  ImageBackground,
  Animated,
  Alert,
  AppRegistry,
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
  TouchableHighlight,
  KeyboardAvoidingView,
  Picker,
  Modal,
  AsyncStorage

} from 'react-native';
import IonIcon from 'react-native-vector-icons/Ionicons';
import { TextInput} from 'react-native-paper';
import { CheckBox } from 'react-native-elements';
import { Dropdown } from 'react-native-material-dropdown';
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from 'radio-button-react-native';
import { DatePicker } from 'react-native-datepicker';
import Loading from 'react-native-whc-loading';
// tampilannya gimana mas? bvendor ini ada di luar? apa ada stelah login?
// jadi saya ada 2 aktor user dan pengguna nah pengguna hanya dapat melihat detail barang tapi tidak bisa menjadi vendor
//kecuali user bisa, nah saya taruh di luar sebelum login udh keliatan button vendorny
// bingung mas, masih gak ada pandangan saya, tampilannya kek apa? munkin bisa di screen shoot mas? 
// ok wait bang
// cukup komplek keknya wkwk , ini mah bisa id bilang project , kwwk
// mana button vendornya? 

const { height, width } = Dimensions.get('window');

class Vendor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataKategori: ['Kendaraan', 'Pakaian', 'Sarana'],
      dataJaminan: [{ label: 'Ktp', value: 0 }],
      formData: {
        id_kategori: '',
        id_metode_bayar: '',
        id_metode_kirim: '',
        id_user: '',
        nama_barang: '',
        harga: '',
        jml_barang: '',
        gambar_barang: '',
        deskripsi: '',
        jaminan: 0,
      },
    };
  }
  static navigationOptions = {
    title: 'Vendor',
    headerStyle: {
      backgroundColor: 'blue',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  // componentDidMount() {
  //   let data = AsyncStorage.getItem('@keyData') //get for login screen
  //   if (data == null ) { //jika data sama dengan null | kosong maka ke halama login, 
  //       console.log(data) //cek dulu datanya
  //       // this.props.navigation.navigate('Home')
  //   } else {
  //     comsole.log('err')
  //   }
  // } 
  // kurang lebioh kek gitu loginnya mas,  kalau masih error bisa kabar2 i lah , selama q bisa tak bantu mas \InsyaAllah :d
  //  ada lagi ?
  // segitu dulu bang, saya mau coba2 dulu, nnti klo error saya tanya langsung makasi bang
  // oke sma sama, yang tadi malam, kalau masih belum bisa , mana filenya? yang detailny yaa bang
  // iya

  render() {
    const {
      id_kategori,
      id_metode_bayar,
      id_metode_kirim,
      id_user,
      nama_barang,
      harga,
      jml_barang,
      gambar_barang,
      deskripsi,
      jaminan,
    } = this.state.formData;
    return (
      <ScrollView>
        <KeyboardAvoidingView style={styles.container} enabled>
         <View style={styles.inputContainer}>
          <View style={styles.row}>
            
            <Picker
              label="Nama Barang"
              mode="outlined"
              selectedValue={id_kategori}
              style={{ height: 50 }}
              onValueChange={id_kategori =>
                this.setState(prevState => ({
                  formData: {
                    ...prevState.formData,
                    id_kategori,
                  },
                }))
              }>
              {this.state.dataKategori.map((item, index) => (
                <Picker.Item
                  key={index}
                  label={item}
                  value={item.toLocaleLowerCase()}
                />
              ))}
            </Picker>
          </View>
          <View style={styles.row}>
            <TextInput
              label="Nama Barang"
              mode="outlined"
              onChangeText={nama_barang =>
                this.setState(prevState => ({
                  formData: {
                    ...prevState.formData,
                    nama_barang,
                  },
                }))
              }
              value={nama_barang}
            />
          </View>
          <View style={styles.row}>
            <TextInput
              label="Harga"
              mode="outlined"
              keyboardType="numeric"
              onChangeText={harga =>
                this.setState(prevState => ({
                  formData: {
                    ...prevState.formData,
                    harga,
                  },
                }))
              }
              value={harga}
            />
          </View>
          <View style={styles.row}>
            <TextInput
              label="Jumlah Barang"
              mode="outlined"
              keyboardType="numeric"
              onChangeText={jml_barang =>
                this.setState(prevState => ({
                  formData: {
                    ...prevState.formData,
                    jml_barang,
                  },
                }))
              }
              value={jml_barang}
            />
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Gambar</Text>
            <View>
              <Ionicon
                name="ios-image"
                size={25}
                color="grey"
                style={{ paddingLeft: 5, marginTop: 5 }}
                // onPress={this._pickImage.bind(this)}
              />
            </View>
          </View>
          <View style={styles.row}>
            <TextInput
              label="Deskripsi"
              mode="outlined"
              {...this.props}
              editable={true}
              maxLength={200}
              numberOfLines={4}
              multiline={true}
              onChangeText={deskripsi =>
                this.setState(prevState => ({
                  formData: {
                    ...prevState.formData,
                    deskripsi,
                  },
                }))
              }
              value={deskripsi}
            />
          </View>
          <View style={styles.row}>
            <Text style={[styles.label, { marginBottom: 10 }]}>Jaminan</Text>
            <RadioForm
              radio_props={this.state.dataJaminan}
              initial={0}
              formHorizontal={true}
              labelHorizontal={true}
              labelStyle={{ paddingRight: 15 }}
              buttonColor={'#2196f3'}
              animation={true}
              onPress={jaminan =>
                this.setState(prevState => ({
                  formData: {
                    ...prevState.formData,
                    jaminan,
                  },
                }))
              }
            />
          </View>
          </View>
          <View style={styles.row}>
            <TouchableHighlight
              onPress={this._saveData}
              style={styles.btnContainer}>
              <Text style={styles.textBtn}>Simpan</Text>
            </TouchableHighlight>
          </View>
        </KeyboardAvoidingView>
        <Loading ref="loading" />
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  row: {
    marginBottom: 15,
  },
  label: {
    fontSize: 15,
  },
  btnContainer: {
    alignSelf: 'stretch',
    margin: 20,
    padding: 20,
    backgroundColor: 'blue',
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
  textBtn: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
  textInput: {
    fontSize: 16,
    height: 40,
    padding: 10,
    marginBottom: 10, 
    backgroundColor: 'rgba(255,255,255,1)',
    borderRadius: 5
  },
  inputDesc: {
    fontSize: 16,
    height: 60,
    padding: 10,
    marginBottom: 10, 
    backgroundColor: 'rgba(255,255,255,1)',
    borderRadius: 5
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
});

export default Vendor;