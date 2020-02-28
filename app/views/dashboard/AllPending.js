import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export class AllPending extends React.Component {
    render() {
        return (
            <View>
                <Text>All Pending Items</Text>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => this.props.navigation.navigate('flex')}>
                    <Text>Go to goals Tab</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10,
        width: 300,
        marginTop: 16,
    },
});

