import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'


export class Category extends Component {
  render() {
    return (
        <View style={{height: 130, width: 130, borderWidth: 1, borderColor:'#ddd', marginLeft: 20}}>
        <View style={{flex:2}}>
            <Image
            source={this.props.imageUri}
            style={{flex: 1, height:null, width:null, resizeMode:'cover'}}
            />
        </View>
        <View style={{flex:1}}>
            <Text style={{flex:1, paddingLeft: 10, paddingTop: 10}}>
                {this.props.name}
            </Text>
        </View>

    </View>
    )
  }
}

export default Category