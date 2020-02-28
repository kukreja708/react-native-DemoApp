import React from 'react';
import {
    View, Text, StyleSheet, TouchableHighlight, TouchableOpacity,
    TouchableNativeFeedback, Platform, TouchableWithoutFeedback,
    SectionList
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export class FlexLayout extends React.Component {

    static navigationOptions = {
        title: 'Flex Screen'
    };

    _onPressButton = () => {
        alert('You tapped the button!');
    }

    _onLongPressButton = () => {
        alert('You long tapped the button!');
    }

    render() {
        return (
            <View style={{ alignItems: 'stretch' }}>
                <View>
                    <Text style={styles.heading}>Flex Layout</Text>
                    <View style={[styles.red, styles.container]}>
                        <View style={{flexWrap: 'wrap'}}>
                            <Text>Flex Layout</Text>
                            <Text>Flex Layout</Text>
                            <Text>Flex Layout</Text>
                            <Text>Flex Layout</Text>
                            <Text>Flex Layout</Text>
                            <Text>Flex Layout</Text>
                        </View>
                    </View>
                    <View style={[styles.blue, styles.container]} />
                    <View style={[styles.green, styles.container]} />
                </View>
                <TouchableHighlight onPress={this._onPressButton} underlayColor="white">
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>TouchableHighlight</Text>
                    </View>
                </TouchableHighlight>

                <TouchableOpacity onPress={this._onPressButton}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>TouchableOpacity</Text>
                    </View>
                </TouchableOpacity>

                <TouchableNativeFeedback
                    onPress={this._onPressButton}
                    background={Platform.OS === 'android' ? TouchableNativeFeedback.SelectableBackground() : ''}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>TouchableNativeFeedback {Platform.OS !== 'android' ? '(Android only)' : ''}</Text>
                    </View>
                </TouchableNativeFeedback>

                <TouchableWithoutFeedback
                    onPress={this._onPressButton}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>TouchableWithoutFeedback</Text>
                    </View>
                </TouchableWithoutFeedback>

                <TouchableHighlight onPress={this._onPressButton} onLongPress={this._onLongPressButton} underlayColor="white">
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Touchable with Long Press</Text>
                    </View>
                </TouchableHighlight>

                <SectionList horizontal={true} style={{height: 100}}
                    sections={[
                        { title: 'D', data: ['Devin', 'Dan', 'Dominic', 'Delnaz'] },
                        { title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie'] },
                    ]}
                    renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
                    renderSectionHeader={({ section }) => <Text style={styles.sectionHeader}>{section.title}</Text>}
                    keyExtractor={(_item, index) => index}
                />

            </View>
        )
    }
}

const styles = StyleSheet.create({
    heading: {
        fontSize: 28,
        alignSelf: 'center'
    },
    green: {
        backgroundColor: 'green'
    },
    red: {
        backgroundColor: 'red'
    },
    blue: {
        backgroundColor: 'blue'
    },
    container: {
        height: 50,
        //width: 50,
        // flex: 1
    },
    button: {
        marginBottom: 30,
        width: 260,
        alignItems: 'center',
        backgroundColor: '#2196F3'
    },
    buttonText: {
        textAlign: 'center',
        padding: 20,
        color: 'white'
    },
    sectionHeader: {
        paddingTop: 2,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 2,
        fontSize: 14,
        fontWeight: 'bold',
        backgroundColor: 'rgba(247,247,247,1.0)',
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44
    },
});

