import React, { useState } from "react";
import { Image, ImageBackground, Keyboard, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation, useRoute } from "@react-navigation/native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { CheckBox } from 'react-native-elements';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import axios from "axios";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const Registration = () => {
    const user = require('../../assets/images/user.jpg')
    const navigation = useNavigation();
    const route = useRoute();

    const { role } = route.params || {};

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [mobileNumber, setMobileNumber] = useState("");
    const [isChecked, setisChecked] = useState(false);
    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [mobileNumberError, setMobileNumberError] = useState('');
    const [userrole, setuserrole] = useState(role);

    const handleRegister = async () => {
        setNameError('');
        setEmailError('');
        setMobileNumberError('');

        // Validate Name
        if (!name) {
            setNameError('Name is required');
            return;
        }

        // Validate Email
        if (!email) {
            setEmailError('Email is required');
            return;
        } else {
            // Check if the email is valid
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                setEmailError('Please enter a valid email');
                return;
            }
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

        try {
            // If all inputs are valid, make the POST request
            const userData = {
                name: name,
                email: email,
                mobile: mobileNumber,
                role: userrole,
            };

            const response = await axios.post('http://localhost:2001/signup/signup/', userData);

            console.log('Signup successful:', response.data);
            navigation.navigate('Otp');
            setEmail('');
            setMobileNumber('');
            setName('');
            setuserrole('');
        } catch (error) {
            console.error('Signup failed:', error);
            setEmail('');
            setMobileNumber('');
            setName('');
        }
    };



    const registerButton = () => {
        navigation.navigate('Otp');
    };

    const homeButton = () => {
        navigation.navigate('Home');
    };

    const handleCheckboxPress = () => {
        setisChecked(!isChecked);
    };

    return (
        <>

            <ImageBackground source={require('../../assets/images/VIPmebg.png')} resizeMode="cover" style={styles.background}>
                <View style={styles.container}>
                    <FontAwesome5 name="arrow-left" color="#111111" size={30} onPress={homeButton} style={{ paddingHorizontal: 40, paddingVertical: 20 }} />
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                        <Image source={user} style={{ height: 60, width: 60 }} />
                        <Text style={styles.text}>SignUp</Text>
                    </View>
                    <View style={{ paddingHorizontal: 40 }}>
                        <Text style={styles.label}>Name</Text>
                        <View style={styles.inputContainer}>
                            <MaterialIcons name="person" size={25} color="black" style={styles.icon} />
                            <TextInput
                                value={name}
                                placeholder="Enter your Name"
                                style={styles.textInput}
                                onChangeText={(text) => {
                                    setName(text); setNameError('')
                                }}
                            />
                        </View>

                        {nameError ? <Text style={styles.errorText}>{nameError}</Text> : null}
                        <Text style={styles.label}>Email</Text>
                        <View style={styles.inputContainer}>
                            <MaterialIcons name="mail" size={25} color="black" style={styles.icon} />
                            <TextInput
                                value={email}
                                placeholder="Enter your Email"
                                style={styles.textInput}
                                onChangeText={(text) => {
                                    setEmail(() => {
                                        setEmailError('');
                                        return text;
                                    });
                                }}
                            />
                        </View>
                        {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}
                        <Text style={styles.label}>Mobile Number</Text>
                        <View style={styles.inputContainer}>
                            <MaterialIcons name="phone" size={25} color="black" style={styles.icon} />
                            <TextInput
                                value={mobileNumber}
                                placeholder="Enter your Mobile Number"
                                style={styles.textInput}
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
                        {mobileNumberError ? <Text style={styles.errorText}>{mobileNumberError}</Text> : null}
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <TouchableOpacity onPress={handleCheckboxPress}>
                            <CheckBox
                                checked={isChecked}
                                onPress={handleCheckboxPress}
                                containerStyle={{ backgroundColor: 'transparent', borderWidth: 0 }}

                            />
                        </TouchableOpacity>
                        <Text style={styles.label1}>I agree with <Text style={{ color: 'blue' }}>Terms</Text> and <Text style={{ color: 'blue' }}> Privacy Policy</Text>.</Text>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <TouchableOpacity style={[styles.sendVerification, { backgroundColor: isChecked ? 'rgba(255, 185, 21, 1)' : 'gray' }]}
                            onPress={() => {
                                if (isChecked) {
                                    handleRegister();
                                }
                            }}
                            disabled={!isChecked}>
                            <Text style={styles.buttontext}>Register</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <View style={styles.divider} />
                    </View>

                    <Text style={{ textAlign: 'center', fontSize: 16 }}>Already have account ? <Text style={styles.login} onPress={registerButton}>Login</Text></Text>


                </View>
            </ImageBackground>

        </>
    )
}
const styles = StyleSheet.create({
    background: {
        flex: 1,
    },
    errorText: {
        color: 'red',
        margin: 10
    },
    textinput: {
        width: 300,
        borderWidth: 1,
        borderRadius: 15,
        borderColor: '#1034A6',
        backgroundColor: 'rgba(255, 255, 255, 1)',
        color: 'black',
        height: 40
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 15,
        borderColor: '#1034A6',
        // paddingVertical: 10,
        height: 50,
        backgroundColor: 'rgba(255, 255, 255, 1)'
    },
    icon: {
        marginRight: 10,
        marginLeft: 10
    },
    text: {
        paddingVertical: 50,
        marginLeft: 20,
        fontSize: 30,
        fontWeight: 'bold',
        color: '#111111',
        textAlign: 'center'
    },
    label: {
        fontSize: 18,
        paddingVertical: 10,
        color: 'black'
    },
    sendVerification: {
        backgroundColor: 'rgba(255, 185, 21, 1)',
        borderRadius: 20,
        width: wp('50%'),
        height: hp(6),
        justifyContent: 'center'

    },
    buttontext: {
        fontSize: 20,
        textAlign: "center",
        color: '#f9f9f9',
        // backgroundColor:"rgba(255, 217, 74, 1)"
    },
    label1: {
        fontSize: 17,
        paddingVertical: 10,
        marginVertical: 20,
        textAlign: 'center'
    },
    divider: {
        width: 350,
        color: 'black',
        borderWidth: 1,
        borderRadius: 10,
        marginVertical: 20,
        justifyContent: 'center'
    },
    login: {
        color: '#1034A6'
    },
    background: {
        flex: 1,
        width: '100%',
        height: '100%',
        backgroundColor: 'gray',

        // You can add additional styling here
    },
    inputs: {
        alignItems: 'center'
    }
})
export default Registration;