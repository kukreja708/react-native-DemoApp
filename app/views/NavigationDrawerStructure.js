import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Images from '../helpers/ImageConstant';

export class NavigationDrawerStructure extends React.Component {
    //Structure for the navigatin Drawer
    toggleDrawer = () => {
        //Props to open/close the drawer
        this.props.navigationProps.toggleDrawer();
    };
    render() {
        return (
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity onPress={this.toggleDrawer}>
                    {/*Donute Button Image */}
                    <Image
                        source={require('../assets/images/common/drawer.png')}
                        style={{ width: 25, height: 25, marginLeft: 5 }}
                    />
                </TouchableOpacity>
            </View>
        );
    }
}

export class HeaderRight extends React.Component {
    render() {
        return (
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity>
                    <Image
                        source={Images.user.user1}
                        style={styles.user_image}
                    />
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    user_image: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 10
    }
})