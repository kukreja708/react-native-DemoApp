


/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import 'react-native-gesture-handler';
import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { Home_StackNavigator, Flex_StackNavigator, Profile_StackNavigator } from './app/views/StackNavigators.js';
import { ProfileDrawer } from './app/views/ProfileDrawer.js';

const DrawerNavigatorExample = createDrawerNavigator({
    //Drawer Optons and indexing
    profile: {
        screen: Profile_StackNavigator,
        navigationOptions: {
            drawerLabel: () => (
                <ProfileDrawer />
            )            
        },
    },
    home: {
        screen: Home_StackNavigator,
        navigationOptions: {
            drawerLabel: 'Home',
        },
    },
    flex: {
        screen: Flex_StackNavigator,
        navigationOptions: {
            drawerLabel: 'Flex',
        },
    },
    
}, {
    initialRouteName: 'home' 
});

export default createAppContainer(DrawerNavigatorExample);

