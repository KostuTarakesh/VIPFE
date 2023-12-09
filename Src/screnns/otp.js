import React, { useRef, useState } from "react";
import { StyleSheet, View, Text, Modal, Alert, TouchableOpacity, Image, Pressable, TextInput } from 'react-native';
import { FirebaseRecaptchaVerifierModal } from "expo-firebase-recaptcha";
import { firebaseConfig } from '../../firebaseConfig'
import firebase from "firebase/compat/app";
import PhoneInput from 'react-native-phone-number-input';
import { ImageBackground } from "react-native";
import { CheckBox } from '@rneui/themed';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from "@react-navigation/native";
import { FontAwesome5 } from 'react-native-vector-icons/FontAwesome5';
import OTPTextView from 'react-native-otp-textinput';

const Otp = () => {
    const navigation = useNavigation();
    const [phoneNumber, setPhoneNumber] = useState('');
    const [code, setCode] = useState('');
    const [verificationId, setVerificationId] = useState(null);
    const recaptchaVerifier = useRef(null);
    const img3 = require('../../assets/images/logo.jpeg');
    const phoneInput = useRef(null);
    const [isModalVisible, setModalVisible] = useState(false);
    const [isChecked, setChecked] = useState(false);

    const handleCheckboxPress = () => {
        setChecked(!isChecked);
    };

    const homeButton = () => {
        navigation.navigate('bottomtabs');
    }

    const sendVerification = () => {
        const phoneProvider = new firebase.auth.PhoneAuthProvider();
        phoneProvider
            .verifyPhoneNumber(phoneNumber, recaptchaVerifier.current)
            .then((verificationId) => {
                setVerificationId(verificationId);
                setModalVisible(true); // Open the modal after successful verification
            })
    };


    const confirmCode = () => {
        const credential = firebase.auth.PhoneAuthProvider.credential(
            verificationId,
            code
        );
        firebase.auth().signInWithCredential(credential)
            .then(() => {
                setCode('');

            })
            .catch((error) => {
                console.log(error)
            })
            .finally(() => {
                setModalVisible(false);
                navigation.navigate('bottomtabs');
            });
    };



    return (
        <ImageBackground source={require('../../assets/images/VIPmebg.png')} resizeMode="cover" style={{ flex: 1 }}>
            <View style={styles.container}>
                <FirebaseRecaptchaVerifierModal
                    ref={recaptchaVerifier}
                    firebaseConfig={firebaseConfig}
                    attemptInvisibleVerification={true}
                />
                {/* <View style={styles.arrow}>
                    <FontAwesome5 name="arrow-left" size={32} color="black" onPress={homeButton} />
                </View> */}
                <View style={{ alignItems: 'center', marginTop: hp(15) }}>
                    <Image source={img3} style={styles.images2} />
                    <Text style={styles.login}>Login</Text>
                </View>


                <View style={styles.contain}>
                    <PhoneInput
                        ref={phoneInput}
                        defaultValue={phoneNumber}
                        containerStyle={styles.phoneContainer}
                        textContainerStyle={styles.texInput}
                        onChangeFormattedText={(text) => setPhoneNumber(text)}
                        defaultCode="IN"
                        layout='first'
                        withShadow
                    />
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
                        disabled={!isChecked}
                    >
                        <Text style={styles.buttonText}>Generate OTP</Text>
                    </TouchableOpacity>
                </View>


            </View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={isModalVisible}>
                <View style={styles.modalView}>
                    <View style={styles.header}>
                        <Text style={styles.title}>Enter OTP</Text>
                        <Pressable >
                            <MaterialIcons name="close" color="#111111" size={32} onPress={() => setModalVisible(false)} />
                        </Pressable>
                    </View>
                    <Text style={{ color: '#111111', fontSize: wp('5%'), padding: 10 }}>Ener the OTP received to your number</Text>
                    <View style={{ alignItems: 'center', marginBottom: wp('8%') }}>
                        {/* <TextInput
                            placeholder="Confirm code"
                            onChangeText={setCode}
                            keyboardType='number-pad'
                            style={styles.textInput}
                            placeholderTextColor='white'
                        /> */}
                        <OTPTextView
                            handleCellTextChange={otpcode => setCode(otpcode)}
                            containerStyle={styles.textInputContainer}
                            textInputStyle={styles.roundedTextInput}
                            inputCount={6}
                            inputCellLength={1}
                            editable={true}
                            autoFocus={true}
                            keyboardType="numeric"
                            tintColor='black'
                        />
                    </View>
                    <Text style={{ color: '#111111', fontSize: wp('5%'), padding: 10, textAlign: 'center' }}>Didn't receive OTP? <Text style={{ color: 'rgba(255, 185, 21, 1)' }}>Resend OTP</Text></Text>
                    <View style={{ alignItems: 'center' }}>
                        <TouchableOpacity style={styles.sendCode} onPress={confirmCode}>
                            <Text style={styles.buttonText}>
                                Login
                            </Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </Modal>
        </ImageBackground>
    );
};

export default Otp


const styles = StyleSheet.create({

    textinputcontainer: {
        marginBottom: 10,
        width: 30,
        height: 45,
        color: '#f9f9f9',
        borderWidth: 1,
        borderBottomWidth: 3,
        borderBottomColor: '#f9f9f9'
    },
    textInputContainer: {
        marginBottom: 20,
    },
    roundedTextInput: {
        borderRadius: 10,
        borderWidth: 4,
        borderColor: 'black',
        width: wp(10),
        height: hp(5),
    },
    modalView: {
        height: hp(45),
        width: wp(100),
        backgroundColor: '#f9f9f9',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        position: 'absolute',
        bottom: 0

    },
    arrow: {
        paddingTop: hp(10),
        paddingHorizontal: hp(2),
        // paddingBottom: hp('5%')
    },
    otpInput: {
        width: '50%',
        height: 50,
        marginVertical: 20,
    },
    textInputStyle: {
        marginBottom: 10,
        width: 30,
        height: 45,
        color: '#f9f9f9',
        borderWidth: 1,
        borderBottomWidth: 3,
        borderBottomColor: '#f9f9f9',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: wp('5%'),
    },
    title: {
        fontSize: wp('6%'),
        color: 'rgba(255, 217, 74, 1)',
    },
    roundedtextinput: {

        backgroundColor: '#f9f9f9',

    },

    contain: {
        rowGap: 15,
        alignItems: 'center',
        marginBottom: wp(20),
        marginTop: hp(8)
    },
    login: {
        color: 'rgba(255, 185, 21, 1)',
        fontSize: wp(5),
        margin: wp(5),
        fontWeight: '900'
    },

    images2: {
        width: wp(28),
        height: hp(17),
        borderRadius: 30,
    },

    textInput: {
        paddingHorizontal: 30,
        fontSize: 20,
        marginBottom: 5,
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        color: '#f9f9f9',
        borderColor: '#fff'

    },
    phoneContainer: {
        width: '90%',
        height: 50,
    },
    sendVerification: {
        backgroundColor: 'rgba(255, 185, 21, 1)',
        borderRadius: 20,
        width: wp('50%'),
        height: hp(6),
        justifyContent: 'center'

    },
    sendCode: {
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
    otpText: {
        fontSize: 24,
        fontWeight: "bold",
        color: '#fff',
        margin: 20
    },
    text: {
        color: 'white',
        fontWeight: '600'
    },
    texInput: {
        paddingVertical: 0,
    },


});