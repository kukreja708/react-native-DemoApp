import React from 'react';
import { Image, TouchableNativeFeedback, StyleSheet } from 'react-native';
import { NavigationDrawerStructure, HeaderRight } from './NavigationDrawerStructure';
import { createStackNavigator } from 'react-navigation-stack';
import  HomeScreen from './HomeScreen';
import { FlexLayout } from './FlexLayout';
import { ProfileScreen } from './ProfileScreen';


export const Home_StackNavigator = createStackNavigator({
    //All the screen from the Screen1 will be indexed here
    First: {
        screen: HomeScreen,
        navigationOptions: ({ navigation }) => ({
            title: 'Dashboard',
            headerLeft: () => <NavigationDrawerStructure navigationProps={navigation} />,
            headerStyle: {
                backgroundColor: '#51677f',
            },
            headerTintColor: '#fff',
            headerRight: () => (
                <HeaderRight />
            )
        }),
    },
});

export const Flex_StackNavigator = createStackNavigator({
    //All the screen from the Screen2 will be indexed here
    Second: {
        screen: FlexLayout,
        navigationOptions: ({ navigation }) => ({
            title: 'Flex Demo',
            headerLeft: () => <NavigationDrawerStructure navigationProps={navigation} />,
            headerStyle: {
                backgroundColor: '#51677f',
            },
            headerTintColor: '#fff',
            headerRight: () => (
                <HeaderRight />
            )
        }),
    },
});

export const Profile_StackNavigator = createStackNavigator({
    //All the screen from the Screen3 will be indexed here
    Third: {
        screen: ProfileScreen,
        navigationOptions: ({ navigation }) => ({
            title: 'Profile',
            headerLeft: () => <NavigationDrawerStructure navigationProps={navigation} />,
            headerStyle: {
                backgroundColor: '#51677f',
            },
            headerTintColor: '#fff',
            headerRight: () => (
                <HeaderRight />
            )
        }),
    },
});

const styles = StyleSheet.create({
    user_image: {
        width: 40,
        height: 40,
        borderRadius: 20
    }
})