import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import BusinessHome from '../screnns/Business';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Octicons from 'react-native-vector-icons/Octicons';
import Reservations from '../screnns/Reservations';
import Media from '../screnns/Media';
import Events from '../screnns/Events';
import Rewards from '../screnns/Rewards';
import Profile from '../screnns/Profile';

const Tab = createBottomTabNavigator();

export default function Bottomtabs() {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{ headerShown: false }}
        >
            <Tab.Screen
                name="Home"
                component={BusinessHome}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="reservations"
                component={Reservations}
                options={{
                    tabBarLabel: 'Reservations',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name="table-bar" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="media"
                component={Media}
                options={{
                    tabBarLabel: 'Media',
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome name="file-photo-o" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="Events"
                component={Events}
                options={{
                    tabBarLabel: 'Events',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name="event-seat" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="rewards"
                component={Rewards}
                options={{
                    tabBarLabel: 'Rewerds',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="trophy-variant-outline" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarLabel: 'Me',
                    tabBarIcon: ({ color, size }) => (
                        <Octicons name="person" color={color} size={size} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}