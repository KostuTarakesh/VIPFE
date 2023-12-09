import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Business from '../screnns/Businessscreen';
import BusinessHome from '../screnns/Business';

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
            {/* <Tab.Screen
                name="Notifications"
                component={Notifications}
                options={{
                    tabBarLabel: 'Reservations',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="bell" color={color} size={size} />
                    ),
                    tabBarBadge: 3,
                }}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarLabel: 'Media',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="account" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarLabel: 'Events',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="account" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarLabel: 'Rewerds',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="account" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarLabel: 'Me',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="account" color={color} size={size} />
                    ),
                }}
            /> */}
        </Tab.Navigator>
    );
}