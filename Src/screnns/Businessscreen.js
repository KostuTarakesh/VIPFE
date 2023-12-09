import React from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import Modal from "react-native-modal";

const Business = ({ isVisible, setModalVisible, onClose }) => {
    return (
        <>
            <View>
                <Modal
                    animationIn="slideInUp"
                    animationOut="slideOutDown"
                    backdropOpacity={0.5}
                    visible={isVisible}
                    onBackButtonPress={onClose}
                    style={styles.modal}>
                    <View style={styles.modalcontainer}>
                        <ScrollView>
                            <View style={{ paddingHorizontal: 20 }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <Text style={styles.label1}>Create Business</Text>
                                    <TouchableOpacity style={styles.closeButton} onPress={onClose}>
                                        <Text style={styles.closeButtonText}>Close</Text>
                                    </TouchableOpacity>
                                </View>
                                <View>
                                    <Text style={styles.label}> Type of Business</Text>
                                    <TextInput placeholder="choose your business type" style={styles.textinput} />
                                </View>
                                <View>
                                    <Text style={styles.label}>Name of your Business</Text>
                                    <TextInput placeholder="Enter your business name" style={styles.textinput} />
                                </View>
                                <View>
                                    <Text style={styles.label}>Branch Address</Text>
                                    <TextInput placeholder="Enter full address with ZIP Code" style={styles.textinput} />
                                </View>
                                <View>
                                    <Text style={styles.label}>Country</Text>
                                    <TextInput placeholder="Enter your country" style={styles.textinput} />
                                </View>
                                <View>
                                    <Text style={styles.label}>Size of your Entity</Text>
                                    <TextInput placeholder="in square feets" style={styles.textinput} />
                                </View>
                                <View>
                                    <Text style={styles.label}>Capacity of your Entity</Text>
                                    <TextInput placeholder="No.of Customer can Occupy" style={styles.textinput} />
                                </View>
                                <View>
                                    <Text style={styles.label}>Tables</Text>
                                    <TextInput placeholder="No.of Tables available" style={styles.textinput} />
                                </View>
                                <View>
                                    <Text style={styles.label}>Timings</Text>
                                    <TextInput placeholder="No.of Tables available" style={styles.textinput} />
                                </View>
                                <View style={{ alignItems: 'center', margin: 30 }}>

                                    <TouchableOpacity style={styles.createeButton} onPress={onClose}>
                                        <Text style={styles.buttonText}>Create Business</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </ScrollView>
                    </View>
                </Modal>
            </View>

        </>

    )
}

const styles = StyleSheet.create({
    label1: {
        fontSize: 20,
        paddingVertical: 10,
        color: 'rgba(255, 217, 74, 1)'
    },
    label: {
        fontSize: 16,
        paddingVertical: 10,
        color: '#111111'
    },
    textinput: {
        width: 350,
        height: 50,
        color: 'block',
        borderRadius: 20,
        backgroundColor: 'rgba(255, 255, 255, 1)'
    },
    modalcontainer: {
        backgroundColor: '#f9f9f9',
        width: '100%',
        height: '90%',
        bottom: 0,
        flex: 0.5,
        position: 'absolute',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
    },
    modal: {
        margin: 0,
        justifyContent: 'flex-end'
    },
    createeButton: {
        backgroundColor: 'rgba(255, 217, 74, 0.59)',
        width: 150,
        height: 40,
        justifyContent: 'center',
        borderRadius: 50,
    },
    buttonText: {
        textAlign: 'center'
    }

})
export default Business;