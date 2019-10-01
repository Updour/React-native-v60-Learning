import {createStackNavigator, createAppContainer, createSwitchNavigator, AsyncStorage} from 'react-navigation';
import React, {Component} from 'react';
import { View, ActivityIndicator } from 'react-native';

import Home from '../screens/home';
import Login from '../screens/login';

class Loading extends Component {
    constructor(props) {
        super(props);
        this.getEmail();
    }

    getEmail = async () => {
        const Email = await AsyncStorage.getItem('Email');
        this.props.navigation.navigate(Email ? 'App' : 'Auth');
    }
    render() {
        return(
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <ActivityIndicator size='large' color='#ffffff' />
            </View>
        )
    }
}

const LoginScreen = createStackNavigator({
    Login: {
        screen: Login,
        navigationOptions: {
            header: null
        }
    },
});

const HomeScreen = createStackNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            header: null
        }
    },
});

const NaveScreen = createSwitchNavigator(
    {
        AuthLoading: Loading,
        App: Home,
        Auth: Login
    },
    {
        initialRouteName: 'AuthLoading',
    }
);

export default createAppContainer(NaveScreen);