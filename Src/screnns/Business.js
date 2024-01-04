import React, { useState, useEffect } from "react";
import { Text, View, Image, StyleSheet, FlatList, TouchableOpacity, Pressable } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useNavigation } from "@react-navigation/native";
import Business from "./Businessscreen";
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Modal from "react-native-modal";
import SelectDropdown from 'react-native-select-dropdown';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { TextInput } from "react-native";

const BusinessHome = () => {
    const navigation = useNavigation();
    const img3 = require('../../assets/images/logo.jpeg');
    const img2 = require('../../assets/images/business.jpg');

    const [isModalVisible, setisModalVisible] = useState(false);
    const [businessData, setBusinessData] = useState([]);
    const [timemodal, setTimeisModal] = useState(false);
    const [isStartTimePickerVisible, setStartTimePickerVisible] = useState(false);
    const [isEndTimePickerVisible, setEndTimePickerVisible] = useState(false);
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');

    const weekdays = [
        'Sunday',
        'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday',
    ];

    const toggleModal = () => {
        setisModalVisible(!isModalVisible);
    };

    const timeModal = () => {
        setTimeisModal(!timemodal);
    };

   

    
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch('http://192.168.1.110:2001/createbusiness/business');
            const data = await response.json();
            setBusinessData(data.businesses);
            console.log('busiessdata', businessData)
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const renderBusinessCard = ({ item }) => {
        return (
            <>
                <View style={{ paddingHorizontal: 20, paddingVertical: 5 }}>
                    <View style={styles.card}>
                        <View style={styles.main}>
                            <Text style={styles.text}>{item.businessName}</Text>
                            <TouchableOpacity style={styles.camera}>
                                <Text style={{ color: '#f9f9f9', textAlign: 'center' }}>Images</Text>
                            </TouchableOpacity>
                        </View>
                        <Text style={{ color: 'black' }}>Branch:{item.street}</Text>
                        <View style={styles.main}>
                            <Text style={{ color: 'black' }}><AntDesign name="arrowsalt" size={15} />:{item.entitySize}</Text>
                            <Text style={{ color: 'black' }}><MaterialCommunityIcons name="table-furniture" size={15} />:{item.numberOfTables}</Text>
                        </View>
                        <Text style={{ color: 'black', paddingVertical: wp(3) }}><MaterialCommunityIcons name="account-supervisor" size={15} />:{item.entityCapacity}</Text>
                        <Image source={img3} style={styles.images1} />
                        <Text style={styles.approval}>Waiting For Approval</Text>
                        <View style={{ alignItems: 'center', paddingVertical: 10 }}>
                            <TouchableOpacity style={styles.view}>
                                <Text style={{ color: 'black', textAlign: 'center' }} >View/Edit</Text>
                            </TouchableOpacity>
                        </View>

                       
                        <View style={{ alignItems: 'center', justifyContent: 'space-evenly', flexDirection: 'row', paddingVertical: 10 }}>
                            <TouchableOpacity style={styles.btns}>
                                <Text style={{ color: 'white', textAlign: 'center' }} >Download QR</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.btns} onPress={timeModal}>
                                <Text style={{ color: 'white', textAlign: 'center' }} >Add Timings</Text>
                            </TouchableOpacity>
                            <Modal
                                isVisible={timemodal}
                                onBackdropPress={timeModal}
                                backdropOpacity={0.3}
                                animationIn="slideInUp"
                                animationOut="slideOutDown"
                                style={styles.modal}
                            >
                                {/* Your modal content goes here */}
                                <View style={styles.modalContent}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingVertical: 10, paddingHorizontal: 10 }}>
                                        <Text style={styles.label1}>Add Timings</Text>
                                        <TouchableOpacity style={styles.closeButton} onPress={timeModal}>
                                            <Pressable >
                                                <AntDesign name="closecircle" color="rgba(245, 99, 4, 0.3)" size={wp(7)} onPress={timeModal} />
                                            </Pressable>

                                        </TouchableOpacity>
                                    </View>
                                    <SelectDropdown
                                        data={weekdays}

                                        onSelect={(selectedItem) => {
                                            console.log(selectedItem);
                                        }}
                                        defaultButtonText={'select days'}
                                        buttonTextAfterSelection={(selectedItem) => {
                                            return selectedItem;
                                        }}
                                        rowTextForSelection={(item) => {
                                            return item;
                                        }}
                                        buttonStyle={styles.dropdown1BtnStyle}
                                        buttonTextStyle={styles.dropdown1BtnTxtStyle}
                                        renderDropdownIcon={isOpened => {
                                            return <FontAwesome name={isOpened ? 'chevron-circle-up' : 'chevron-circle-down'} color={'rgba(255, 217, 74, 1)'} size={wp(7)} />;
                                        }}
                                        dropdownIconPosition={'right'}
                                        dropdownStyle={styles.dropdown1DropdownStyle}
                                        rowStyle={styles.dropdown1RowStyle}
                                        rowTextStyle={styles.dropdown1RowTxtStyle}
                                    />
                                    {/* <View style={styles.container}>
                                        <TouchableOpacity onPress={showStartTimePicker} style={styles.button}>
                                            <Text>{startTime || 'Select Start Time'}</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={showEndTimePicker} style={styles.button}>
                                            <Text>{endTime || 'Select End Time'}</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={handleSave} style={styles.saveButton}>
                                            <Text>Save</Text>
                                        </TouchableOpacity>


                                        <DateTimePickerModal
                                            isVisible={isStartTimePickerVisible}
                                            mode="time"
                                            onConfirm={handleStartTimeConfirm}
                                            onCancel={hideStartTimePicker}
                                        />


                                        <DateTimePickerModal
                                            isVisible={isEndTimePickerVisible}
                                            mode="time"
                                            onConfirm={handleEndTimeConfirm}
                                            onCancel={hideEndTimePicker}
                                        />
                                    </View> */}
                                </View>
                            </Modal>
                        </View>
                    </View>
                </View>
            </>
        )
    }


    return (
        <>
            <View style={{ backgroundColor: 'rgba(255, 248, 241, 1)', flex: 1 }}>
                <View style={styles.header}>
                    <Image source={img3} style={styles.images2} />
                    <Text style={styles.text} onPress={toggleModal}>create your Business</Text>
                </View>
                {businessData ? (
                    <>
                        <FlatList
                            data={businessData}
                            keyExtractor={(item) => item._id.toString()}
                            renderItem={renderBusinessCard}
                        />
                    </>
                ) : (
                    <View style={styles.center}>
                        <Image source={img2} style={styles.images3} />
                        <Text style={styles.text2}>Create your Business</Text>
                    </View>
                )}
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
    modalContent: {
        backgroundColor: 'rgba(255, 248, 241, 1)',
        width: '100%',
        height: '90%',
        bottom: 0,
        flex: 0.5,
        position: 'absolute',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
    },
    images1: {
        width: wp(16),
        height: hp(8),
        borderRadius: 10,
    },
    label1: {
        fontSize: 20,
        paddingVertical: 10,
        color: 'rgba(255, 217, 74, 1)'
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
    card: {
        borderWidth: 1,
        borderColor: 'rgba(255, 185, 21, 1)',
        padding: 10,
        margin: 5,
        borderRadius: 5,
        backgroundColor: '#f9f9f9',
    },
    main: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: wp(3)
    },
    camera: {
        backgroundColor: 'rgba(255, 185, 21, 1)',
        width: wp(15),
        height: hp(4),
        justifyContent: 'center',
        borderRadius: 20
    },
    btns: {
        backgroundColor: 'rgba(255, 185, 21, 1)',
        width: wp(30),
        height: hp(4),
        justifyContent: 'center',
        borderRadius: 20
    },
    approval: {
        fontSize: 16,
        textAlign: 'center',
        color: 'red',
    },
    view: {
        borderWidth: 1,
        borderColor: 'rgba(255, 185, 21, 1)',
        justifyContent: 'center',
        width: wp(22),
        height: hp(4),
        borderRadius: 20,
        color: 'black',
    },
    dropdown1BtnStyle: {
        width: wp(37),
        height: hp(6),
        backgroundColor: '#FFF',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: 'rgba(255, 217, 74, 1)',
    },
    dropdown1BtnTxtStyle: { color: '#444', textAlign: 'left' },
    dropdown1DropdownStyle: { backgroundColor: '#EFEFEF', width: wp(37), },
    dropdown1RowStyle: { backgroundColor: '#EFEFEF', borderBottomColor: '#C5C5C5', width: wp(37), },
    dropdown1RowTxtStyle: { color: '#444', textAlign: 'left' },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        padding: 10,
        marginVertical: 10,
        backgroundColor: '#eee',
        width: 200,
        alignItems: 'center',
    },
    saveButton: {
        padding: 15,
        backgroundColor: 'green',
        marginTop: 20,
        borderRadius: 5,
    },
});

export default BusinessHome;