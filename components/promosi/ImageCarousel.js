import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  ImageBackground
} from 'react-native';
import Carousel from 'react-native-anchor-carousel'; 

const { width } = Dimensions.get('window');

const data = [
  {
    uri: 'https://creativebonito.com/wp-content/uploads/2018/08/Online-Shopping.png',
    title: 'Sewa Barang',
    content: 'Memudahkan anda dalam mencari barang.'
  },
  {
    uri: 'https://serving.photos.photobox.com/62668354e30a13bc93c0298637f069018ac6e8a9616e5d41f65590f13210ae41ae89abc5.jpg',
    title: 'Sewa Barang',
    content: 'Nikmati promo menarik dari aplikasi sewabarang.'
  },
  {
    uri: 'https://external-preview.redd.it/5vU2lOz6BfhuEedYaMS1OkF2x8bHPmDh8T5ZXj6xp30.jpg?width=1024&height=512&auto=webp&s=2e0609715cf77162a2f9499e80b6e2615ef55e90',
    title: 'Sewa Barang',
    content: 'Bahkan anda bisa menjadi Vendor.'
  },
  {
    uri: 'https://serving.photos.photobox.com/321093867a55eab2ea0d13bde1959f6c7bc55381465104ae47e830a4181b28cae6e20a35.jpg',
    title: 'Sewa Barang',
    content: 'Mudah diakses dimana saja dan kapan saja.'
  },
  {
    uri: 'https://cdn.dribbble.com/users/1544347/screenshots/4775885/successful-purchase.png',
    title: 'Sewa Barang',
    content: 'Ayoo!!! Belanja di aplikasi sewa barang sekarang juga.'
  }
];

export default class ImageCarousel extends Component {
  renderItem = ({ item, index }) => {
    const { uri, title, content } = item;
    return (
      <TouchableOpacity
        activeOpacity={1}
        style={styles.item}
        onPress={() => {
          this.numberCarousel.scrollToIndex(index);
        }}
      >
        <ImageBackground
          source={{ uri: uri }}
          style={styles.imageBackground}
        >
        </ImageBackground>
        <View style={styles.lowerContainer}>
          <Text style={styles.titleText}>{title}</Text>
          <Text style={styles.contentText}>{content}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  render() {
    return (
      <Carousel
        data={data}
        renderItem={this.renderItem}
        itemWidth={0.7 * width}
        inActiveOpacity={0.3}
        autoPlay
        containerWidth={width - 10}
        ref={(c) => {
          this.numberCarousel = c;
        }}
      />
    );
  }
}

const styles = StyleSheet.create({
  carousel: {
    flex: 1,
    backgroundColor: 'white',

  },
  item: {
    borderWidth: 0.5,
    backgroundColor: 'blue',
    flex: 1,
    borderRadius: 10,
    borderColor: 'white',
    elevation: 3,
  },
  imageBackground: {
    flex: 2,
    backgroundColor: '#F5F5F5',
    borderWidth: 5,
    borderColor: 'white',
  },
  rightTextContainer: {
    marginLeft: 'auto',
    marginRight: -2,
    backgroundColor: 'rgba(49, 49, 51,0.5)',
    padding: 3,
    marginTop: 3,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5
  },
  rightText: { color: 'white' },
  lowerContainer: {
    flex: 1,
    margin: 10
  },
  titleText: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'white'
  },
  contentText: { 
    fontSize:12,
    color: 'white'
  }
});
