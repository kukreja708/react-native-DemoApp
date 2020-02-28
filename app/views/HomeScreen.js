import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';
import { AllPending } from './dashboard/AllPending';
import { GoalList } from './dashboard/GoalList';
import { TaskList } from './dashboard/TaskList';
import { FeedbackList } from './dashboard/FeedbackList';

const ActData = [{
    'Key': 'AllPending',
    'Value': AllPending
}, {
    'Key': 'Goals',
    'Value': GoalList
}, {
    'Key': 'Tasks',
    'Value': TaskList
}, {
    'Key': 'Feedbacks',
    'Value': FeedbackList
}];

const getDashboardTabs = () => {
    return ActData.reduce((routes, tab) => {
        routes[tab.Key] = getTabScreen(tab);

        return routes;
    }, {})

}

const getTabScreen = (tab) => {
    switch (tab.Key) {
        case 'AllPending':
            return {
                screen: AllPending,
                navigationOptions: {
                    title: 'All Pending',
                }
            };

        case 'Goals':
            return {
                screen: GoalList,
                navigationOptions: {
                    title: 'Goals ',
                }
            };

        case 'Tasks':
            return {
                screen: TaskList,
                navigationOptions: {
                    title: 'Tasks',
                }
            };

        case 'Feedbacks':
            return {
                screen: FeedbackList,
                navigationOptions: {
                    title: 'Feedbacks',
                }
            };

    }
}
const HomeScreen = createBottomTabNavigator(
    getDashboardTabs(),
    {
        tabBarPosition: 'bottom',
        swipeEnabled: true,
        animationEnabled: true,
        tabBarOptions: {
            activeTintColor: '#FFFFFF',
            inactiveTintColor: '#F8F8F8',
            style: {
                backgroundColor: '#51677f',
            },
            labelStyle: {
                textAlign: 'center',
                fontSize: 12
            },
            indicatorStyle: {
                borderBottomColor: '#FFFFFF',
                borderBottomWidth: 2,
            }
        },
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: () => {
                const { routeName } = navigation.state;
                if (routeName === 'AllPending') {
                    return (
                        <Image
                            source={require('../assets/images/tabs/allpending_gray.png')}
                            style={{ width: 20, height: 20 }}
                        />
                    );
                } else if (routeName === 'Goals') {
                    return (
                        <Image
                            source={require('../assets/images/tabs/goals_gray.png')}
                            style={{ width: 20, height: 20 }}
                        />
                    );
                } else if (routeName === 'Tasks') {
                    return (
                        <Image
                            source={require('../assets/images/tabs/assessment.png')}
                            style={{ width: 20, height: 20 }}
                        />
                    );
                } else if (routeName === 'Feedbacks') {
                    return (
                        <Image
                            source={require('../assets/images/tabs/feedback_gray.png')}
                            style={{ width: 20, height: 20 }}
                        />
                    );
                }
            }
        }),
    }, {
        initialRouteName: 'Goals',

    }
);


export default createAppContainer(HomeScreen);