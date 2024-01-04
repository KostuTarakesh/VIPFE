import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

const Profile = () => {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                // Retrieve user data from AsyncStorage
                const storedUserData = await AsyncStorage.getItem('userData');

                if (storedUserData) {
                    const parsedUserData = JSON.parse(storedUserData);
                    setUserData(parsedUserData);
                }
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchUserData();
    }, []);

    return (
        <View>
            {userData ? (
                <View>
                    <Text style={{
                        fontSize: 30, paddingVertical: 20, paddingHorizontal: 20, color: 'rgba(255, 185, 21, 1)',
                        textDecorationLine: 'underline'
                    }}>My Account</Text>
                    <View style={{ paddingVertical: 30, paddingHorizontal: 20 }}>
                        <Text style={{ fontSize: 20, paddingVertical: 20, paddingHorizontal: 20 }}>Username: <Text style={{ color: 'black' }}>{userData.name}</Text></Text>
                        <Text style={{ fontSize: 20, paddingVertical: 20, paddingHorizontal: 20 }}>Email: <Text style={{ color: 'black' }}>{userData.email}</Text></Text>
                        <Text style={{ fontSize: 20, paddingVertical: 20, paddingHorizontal: 20 }}>Role: <Text style={{ color: 'black' }}>{userData.role}</Text></Text>
                        <Text style={{ fontSize: 20, paddingVertical: 20, paddingHorizontal: 20 }}>Mobile: <Text style={{ color: 'black' }}>{userData.mobile}</Text></Text>
                    </View>
                </View>
            ) : (
                <Text>Loading user data...</Text>
            )}
        </View>
    );
};

export default Profile;
