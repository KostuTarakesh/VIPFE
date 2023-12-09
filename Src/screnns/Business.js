import React, { useState } from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useNavigation } from "@react-navigation/native";
import Business from "./Businessscreen";

const BusinessHome = () => {
    const navigation = useNavigation();
    const img3 = require('../../assets/images/logo.jpeg');
    const img2 = require('../../assets/images/business.jpg');

    const [isModalVisible, setisModalVisible] = useState(false);

    const toggleModal = () => {
        setisModalVisible(!isModalVisible);
    };

    return (
        <>
            <View style={{ backgroundColor: 'rgba(255, 248, 241, 1)', flex: 1 }}>
                <View style={styles.header}>
                    <Image source={img3} style={styles.images2} />
                    <Text style={styles.text} onPress={toggleModal}>create your Business</Text>
                </View>
                <View style={styles.center}>
                    <Image source={img2} style={styles.images3} />
                    <Text style={styles.text2}>Create your Business</Text>
                </View>
            </View>
            <Business isVisible={isModalVisible} setModalVisible={setisModalVisible} onClose={toggleModal} />
        </>
    )
}

const styles = StyleSheet.create({
    images2: {
        width: wp(12),
        height: hp(6),
        borderRadius: 30,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: hp(2),
        paddingVertical: wp(5)
    },
    text: {
        fontSize: wp(5),
        color: 'rgba(255, 185, 21, 1)',
        textDecorationLine: 'underline'
    },
    center: {
        alignItems: 'center',
        marginTop: hp(25)
    },
    images3: {
        width: wp(30),
        height: hp(15),
        borderRadius: 50,
    },
    text2: {
        fontSize: wp(5),
        color: '#111111',
    },
});

export default BusinessHome;