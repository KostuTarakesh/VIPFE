import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import LinearGradient from 'react-native-linear-gradient';

const Home = () => {
    const navigation = useNavigation();

    const backgroundimg = require('../../assets/images/VIPmebg.png')
    const img1 = require('../../assets/images/sss.jpg')
    const img2 = require('../../assets/images/aaa.jpg')
    const img3 = require('../../assets/images/bbbb.jpg')

    const registerButton = (role) => {
        console.log('role', role)
        navigation.navigate('register', { role });
    }

    return (
        <>

            <ImageBackground source={backgroundimg} style={styles.background}>
                <View style={styles.container}>
                    <Image source={img1} style={styles.images} />
                    <Image source={img2} style={styles.images2} />
                    <Image source={img3} style={styles.images} />
                </View>
                <View style={styles.textcontainer}>
                    <Text style={styles.text}>A VIP me restaurants,pubs,nightclubs reservation system
                        lets customers reserve a table while restaurents eversee booking, cancellations.</Text>
                </View>
                <View style={styles.textcontainer}>
                    <Text style={styles.text2}>Register As :</Text>
                </View>
                <View style={styles.textcontainer}>
                    <TouchableOpacity style={styles.buttons}><Text style={styles.text3} onPress={() => registerButton('Business')}>Business</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.buttons2}><Text style={styles.text4} onPress={() => registerButton('User')}>User</Text></TouchableOpacity>
                </View>
            </ImageBackground>

        </>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1
    },
    image: {
        flex: 1,
    },
    container: {
        paddingVertical: 40,
        flexDirection: 'row',
        alignItems: 'center',
    },
    images: {
        width: 130,
        height: 186,
        // margin: 10,
        borderRadius: 10,
    
    },
    images2: {
        width: 110,
        height: 150,
        margin: 20,
        borderRadius: 20,
        marginVertical:10,
        
    },
    text: {
        flexWrap: 'wrap',
        width: 300,
        color: '#111111',
        textAlign: 'center',
        fontSize: 15,

    },
    textcontainer: {
        alignItems: 'center',
        marginTop: 50,
    },
    text2: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: "bold",
    },
    text3: {
        color: '#f9f9f9',
        textAlign: 'center',
        fontSize: 25,
        alignItems: 'center',
    },
    text4: {
        color: '#111111',
        textAlign: 'center',
        fontSize: 25,
        justifyContent: 'center',

    },
    buttons: {
        width: 300,
        height: 40,
        borderWidth: 1,
        borderRadius: 25,
        borderColor: 'yellow',
        margin: 20,
        backgroundColor: "rgba(255, 185, 21, 1)",
        

    },
    buttons2: {
        width: 300,
        height: 40,
        borderWidth: 1,
        borderRadius: 25,
        margin: 20,
        backgroundColor: 'rgba(255, 255, 255, 1)',


    },

})
export default Home