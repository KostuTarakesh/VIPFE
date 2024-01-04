import React, { useState } from "react";
import { StyleSheet, View, Text, ImageBackground, Keyboard, TouchableOpacity, Image, TextInput, KeyboardAvoidingView, TouchableWithoutFeedback } from 'react-native';
import { CheckBox } from '@rneui/themed';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from "@react-navigation/native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const Loginscreen = () => {
    const navigation = useNavigation();
    const img3 = require('../../assets/images/logo.jpeg');
    const [isChecked, setIsChecked] = useState(false);
    const [mobileNumber, setMobileNumber] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showPassworderror, setShowPassworderror] = useState(false);
    const [mobileNumberError, setMobileNumberError] = useState('');

    const handleCheckboxPress = () => {
        setIsChecked(!isChecked);
    };

    const isLoginButtonDisabled = !(isChecked && mobileNumber && password);
    const homeButton = () => {
        navigation.navigate('register');
    }



    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const sendVerification = async () => {

        setShowPassworderror('')
        setMobileNumberError('');

        if (!password) {
            setShowPassworderror('Password is required');
            return;
        }

        // Validate Mobile Number
        if (!mobileNumber) {
            setMobileNumberError('Mobile Number is required');
            return;
        } else {
            // Check if the mobile number is valid
            const mobileRegex = /^\d{10}$/;
            if (!mobileRegex.test(mobileNumber)) {
                setMobileNumberError('Mobile number must be 10 digits');
                return;
            }
        }
        const userData = {
            mobile: mobileNumber,
            password: password,
        };

        try {
            const response = await fetch('http://192.168.1.110:2001/signup/logindetails', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            });

            if (response.ok) {
                const responseData = await response.json();
                console.log('login successful:', responseData.data);
                await AsyncStorage.setItem('userData', JSON.stringify(responseData.data));
                navigation.navigate('bottomtabs');
                setMobileNumber('');
                setPassword('')
            } else {
                const errorData = await response.json();
                console.log('Signup failed:', errorData);
                setMobileNumber('');
                setPassword('')
            }
        } catch (error) {
            console.error('Error during signup:', error);
            setMobileNumber('');
            setPassword('')
        }
    };

    return (
        <>
            <ImageBackground source={require('../../assets/images/VIPmebg.png')} resizeMode="cover" style={{ flex: 1 }}>
                <KeyboardAvoidingView behavior="position"
                    style={styles.keycontainer}>
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                        <View style={styles.container}>

                            <View style={{ alignItems: 'center', marginTop: hp(15) }}>
                                <Image source={img3} style={styles.images2} />
                                <Text style={styles.login}>Login</Text>
                            </View>
                            <View style={{ marginBottom: wp('8%') }}>

                                <View style={styles.inputContainer}>
                                    <MaterialIcons name="phone" size={25} color="black" style={styles.icon} />
                                    <TextInput
                                        value={mobileNumber}
                                        placeholder="Enter your Mobile Number"
                                        style={styles.textinput1}
                                        keyboardType="numeric"
                                        onChangeText={(text) => {
                                            setMobileNumber(() => {
                                                setMobileNumberError('');
                                                if (text.length === 10) {
                                                    Keyboard.dismiss();
                                                }
                                                return text.slice(0, 10);
                                            });
                                        }}
                                    />

                                </View>
                                <View style={styles.input1}>
                                    <TextInput
                                        placeholder="Enter your password"
                                        style={styles.textinput1}
                                        secureTextEntry={!showPassword}
                                        value={password}
                                        onChangeText={(text) => setPassword(text)}
                                    />
                                    <MaterialCommunityIcons
                                        name={showPassword ? 'eye-off' : 'eye'}
                                        size={25}
                                        color="black"
                                        style={styles.icon1}
                                        onPress={togglePasswordVisibility}
                                    />
                                </View>
                            </View>
                            <Text style={{ fontSize: 20, textAlign: 'center', marginBottom: wp('8%') }}>Don't have an Account ? <Text style={{ color: '#1034a6' }} onPress={homeButton}>Signup</Text></Text>

                            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: wp('8%') }}>
                                <TouchableOpacity onPress={handleCheckboxPress}>
                                    <CheckBox
                                        checked={isChecked}
                                        onPress={handleCheckboxPress}
                                        containerStyle={{ backgroundColor: 'transparent', borderWidth: 0 }}
                                    />
                                </TouchableOpacity>
                                <Text style={{ fontSize: wp('4%'), width: wp(75), flexWrap: 'wrap' }}>I have read and accept the <Text style={{ color: 'blue' }}>Terms of use </Text>
                                    and <Text style={{ color: 'blue' }} onPress={() => setModalVisible(true)}>Privacy policy.</Text></Text>
                            </View>

                            <View style={{ alignItems: 'center', marginBottom: wp('10%') }}>
                                <TouchableOpacity
                                    style={[styles.sendVerification, { backgroundColor: isChecked ? 'rgba(255, 185, 21, 1)' : 'gray' }]}
                                    onPress={() => {
                                        if (isChecked) {
                                            sendVerification();
                                        }
                                    }}
                                    disabled={isLoginButtonDisabled}
                                >
                                    <Text style={styles.buttonText}>Login</Text>
                                </TouchableOpacity>
                            </View>

                        </View>
                    </TouchableWithoutFeedback>
                </KeyboardAvoidingView>
            </ImageBackground>
        </>
    )
}
export default Loginscreen;

const styles = StyleSheet.create({
    input1: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#1034A6',
        borderRadius: 15,
        width: 300,
        height: 50,
        marginHorizontal: wp(8),
        backgroundColor: '#f9f9f9'
    },
    textinput1: {
        flex: 1,
        fontSize: 16,

    },
    keycontainer: {
        flex: 1,
    },
    icon: {
        marginHorizontal: 10,
    },
    textinput: {
        width: 300,
        borderWidth: 1,
        borderRadius: 15,
        borderColor: '#1034A6',
        backgroundColor: 'rgba(255, 255, 255, 1)',
        color: 'black',
        height: 50
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#1034A6',
        borderRadius: 15,
        width: 300,
        height: 50,
        marginHorizontal: wp(8),
        backgroundColor: 'rgba(255, 255, 255, 1)',
        marginVertical: wp(10)
    },
    icon: {
        marginRight: 10,
        marginLeft: 10
    },
    errorText: {
        color: 'red',
    },
    input: {
        alignItems: 'center',
        paddingVertical: 20
    },
    sendVerification: {
        backgroundColor: 'rgba(255, 185, 21, 1)',
        borderRadius: 20,
        width: wp('50%'),
        height: hp(6),
        justifyContent: 'center'

    },
    buttonText: {
        textAlign: "center",
        color: '#fff',
        fontWeight: "600",
        fontSize: wp('5%'),

    },
    arrow: {
        paddingTop: hp(10),
        paddingHorizontal: hp(2),
        // paddingBottom: hp('5%')
    },

    images2: {
        width: wp(28),
        height: hp(17),
        borderRadius: 30,
    },
    login: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingVertical: 30
    },

});