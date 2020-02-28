import React from 'react';
import { View, Image, Text, StyleSheet, TouchableNativeFeedback } from 'react-native';
import Images from '../helpers/ImageConstant';
import * as User from '../assets/data/UserProfile.json';

export class ProfileDrawer extends React.Component {

    settingsClicked = () => {
        
    }

    render() {
        const navigation = this.props.navigation;
        return (
            <View style={styles.container}>
                <View style={styles.user_profile_header}>
                    <Image
                        source={Images.user.user1}
                        style={styles.user_image}
                    />
                    <View style={{ flex: 1 }}>
                        <Text style={styles.user_name}>{User.details.name}</Text>
                        <Text style={styles.designation}>View Profile</Text>
                    </View>
                    {/* <TouchableNativeFeedback onPress={this.settingsClicked}>
                        <Image
                            source={Images.user.user2}
                            style={styles.user_image}
                        />
                    </TouchableNativeFeedback> */}
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
    },
    user_profile_header: {
        backgroundColor: '#fff',
        padding: 5,
        margin: 5,
        flex: 1,
        flexDirection: 'row',
        borderRadius: 10
    },
    user_image: {
        width: 40,
        height: 40,
        borderRadius: 20
    },
    user_name: {
        fontSize: 15,
        paddingLeft: 10
    },
    designation: {
        fontSize: 12,
        paddingLeft: 10,
        color: '#2345ff'
    }
});

