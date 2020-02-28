import React from 'react';
import { Text, View, Image, StyleSheet, SectionList, FlatList, ScrollView } from 'react-native';
import Images from '../helpers/ImageConstant.js';
import * as User from '../assets/data/UserProfile.json';
import AsyncStorage from '@react-native-community/async-storage';

export class ProfileScreen extends React.Component {

    static navigationOptions = {
        title: 'Profile'
    };

    addTrainingDetails = () => {
        console.log('addTrainingDetails');
    }

    constructor(props) {
        super(props);
        this.state = {
            trainingDetailsList: []
        }

        this.saveTraingDetails();
    }

    saveTraingDetails = async () => {
        try {
            await AsyncStorage.setItem('trainings', JSON.stringify(User.details.trainings));
        } catch (error) {
            // Error retrieving data
            console.log(error.message);
        }
    }

    getTrainingDetails = () => {
        try {
            AsyncStorage.getItem('trainings', (_err, result) => {
                if (result.length > 0) {
                    this.setState(previousState => ({
                        trainingDetailsList: previousState.trainingDetailsList.concat(result)
                    }))
                    
                } else {
                    this.setState({
                        trainingDetailsList: []
                    })
                }

            });
        } catch (err) {

        }
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
                    <Text style={styles.user_name}>{User.details.name}</Text>
                    <Text style={styles.designation}>{User.details.designation}</Text>
                </View>
                <ScrollView>
                    <View style={styles.sub_conatiner}>
                        <Text style={styles.conatiner_heading}>Skills</Text>

                        <Text style={styles.sectionHeader}>Technical Skills</Text>
                        {User.details.skill[0].technical.map((item, index) => <Text style={styles.item} key={index}>{item}</Text>)}

                        <Text style={styles.sectionHeader}>Management Skills</Text>
                        {User.details.skill[0].managerial.map((item, index) => <Text style={styles.item} key={index}>{item}</Text>)}
                        {/* <SectionList style={{ width: '100%' }}
                            sections={[
                                { title: 'Technical Skills', data: User.details.skill[0].technical },
                                { title: 'Management Skills', data: User.details.skill[0].managerial }
                            ]}
                            renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
                            renderSectionHeader={({ section }) => <Text style={styles.sectionHeader}>{section.title}</Text>}
                            keyExtractor={(_item, index) => index}
                        /> */}
                    </View>

                    <View style={styles.exp_conatiner}>
                        <Text style={styles.conatiner_heading}>Experience</Text>
                        {/* <FlatList
                            data={User.details.experience}
                            renderItem={({ item }) => <ExperienceCard {...item} />}
                            keyExtractor={item => item.id.toString()}
                        /> */}
                        {User.details.experience.map(item => <ExperienceCard {...item} key={item.id.toString()} />)}
                        {/* <Text style={styles.conatiner_heading}>See All</Text> */}

                    </View>

                    <View style={styles.exp_conatiner}>
                        <Text style={styles.conatiner_heading}>Education</Text>
                        {/* <FlatList style={{ width: '100%' }} horizontal={true}
                            data={User.details.education}
                            renderItem={({ item }) => <EducationCard {...item} />}
                            keyExtractor={item => item.id.toString()}
                        /> */}
                        {User.details.education.map(item => <EducationCard {...item} key={item.id.toString()} />)}

                    </View>

                    <View style={styles.exp_conatiner}>
                        <View style={{ flex: 1, flexDirection: 'row' }}>
                            <Text style={{ fontSize: 16, fontWeight: 'bold', flex: 1 }}>Trainings</Text>
                            <Text style={{ width: 50 }} click={this.addTrainingDetails}>Add</Text>
                        </View>
                    </View>

                </ScrollView>

            </View>
        );
    }
}

class ExperienceCard extends React.Component {

    constructor(props) {
        super(props);
    }

    getImage(name) {
        if (name === 'rsystems') {
            return Images.company.rsystems;
        } else if (name === 'cognizant') {
            return Images.company.cognizant;
        } else if (name === 'infosys') {
            return Images.company.infosys;
        }
    }

    render() {
        const { designation, compnayName, start, end, company } = this.props;

        return (
            <View style={{ flex: 1, flexDirection: 'row' }}>
                <Image
                    source={this.getImage(company)}
                    style={styles.company_logo}
                />
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', flex: 1 }}>
                    <View>
                        <Text style={styles.sectionHeader}>{designation}</Text>
                        <Text style={styles.item}>{compnayName}</Text>
                        <Text style={styles.item}>{start} - {end}</Text>
                    </View>

                    <Text style={{ width: 50 }}>Edit</Text>
                </View>
            </View>
        );
    }
}

class TrainingCard extends React.Component {

    constructor(props) {
        super(props);
    }

    getImage(name) {
        if (name === 'msit') {
            return Images.company.msit;
        } else if (name === 'smjps') {
            return Images.company.smjps;
        }
    }

    render() {
        console.log('props', this.props);
        const { name, course, start, end, logo } = this.props;
        
        return (
            <View style={{ flex: 1, flexDirection: 'row' }}>
                <Image
                    source={this.getImage(logo)}
                    style={styles.company_logo}
                />
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', flex: 1 }}>
                    <View style={{ flex: 1 }}>
                        <Text style={styles.sectionHeader}>{name}</Text>
                        <Text style={styles.item}>{course}</Text>
                        <Text style={styles.item}>{start} - {end}</Text>
                    </View>
                    <Text style={{ width: 50 }}>Edit</Text>
                </View>
            </View>
        );
    }
}

class EducationCard extends React.Component {

    constructor(props) {
        super(props);
    }

    getImage(name) {
        if (name === 'msit') {
            return Images.company.msit;
        } else if (name === 'smjps') {
            return Images.company.smjps;
        }
    }

    render() {
        const { name, course, main, start, end, logo } = this.props;
        return (
            <View style={{ flex: 1, flexDirection: 'row' }}>
                <Image
                    source={this.getImage(logo)}
                    style={styles.company_logo}
                />
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', flex: 1 }}>
                    <View style={{ flex: 1 }}>
                        <Text style={styles.sectionHeader}>{name}</Text>
                        <Text style={styles.item}>{course}</Text>
                        <Text style={styles.item}>{main}</Text>
                        <Text style={styles.item}>{start} - {end}</Text>
                    </View>
                    <Text style={{ width: 50 }}>Edit</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#d3d3d3'
    },
    user_profile_header: {
        backgroundColor: '#fff',
        height: 90,
        padding: 5,
        margin: 5,
        flexWrap: 'wrap',
        borderRadius: 10
    },
    user_image: {
        width: 60,
        height: 80,
        borderRadius: 10
    },
    user_name: {
        fontSize: 18,
        paddingLeft: 10
    },
    designation: {
        fontSize: 14,
        paddingLeft: 10,
        color: '#2345ff',
        fontStyle: 'italic'
    },
    sub_conatiner: {
        backgroundColor: '#fff',
        padding: 5,
        margin: 5,
        flexWrap: 'wrap',
        borderRadius: 10,
    },
    conatiner_heading: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    sectionHeader: {
        padding: 2,
        fontSize: 16,
        fontWeight: 'bold',
        backgroundColor: 'rgba(247,247,247,1.0)',
    },
    item: {
        padding: 2,
        fontSize: 14
    },
    company_logo: {
        width: 80,
        height: 80,
        borderRadius: 10
    },
    exp_conatiner: {
        backgroundColor: '#fff',
        flex: 1,
        padding: 5,
        margin: 5,
        borderRadius: 10
    }
})
