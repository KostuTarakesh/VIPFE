import React, { useState, useEffect, useRef } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView, Pressable, Keyboard } from "react-native";
import Modal from "react-native-modal";
import AntDesign from 'react-native-vector-icons/AntDesign';
import SelectDropdown from 'react-native-select-dropdown';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const Business = ({ isVisible, setModalVisible, onClose }) => {

    const [businessType, setBusinessType] = useState('');
    const [priceRange, setPriceRange] = useState('');
    const [businessName, setBusinessName] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [ein, setEIN] = useState('');
    const [typeOfFood, setTypeOfFood] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [country, setCountry] = useState('');
    const [street, setStreet] = useState('');
    const [entitySize, setEntitySize] = useState('');
    const [entityCapacity, setEntityCapacity] = useState('');
    const [numberOfTables, setNumberOfTables] = useState('');
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
    const [selectedState, setSelectedState] = useState('');
    const [selectedCity, setSelectedCity] = useState('');

    const [businessNameError, setBusinessNameError] = useState('');
    const [mobileNumberError, setMobileNumberError] = useState('');
    const [EntityError, setEntityError] = useState('');
    const [typeOfFoodError, settypeOfFoodError] = useState('');
    const [zipCodeError, setZipCodeError] = useState('');
    const [countryError, setCountryError] = useState('');
    const [streetError, setStreetError] = useState('');
    const [entitySizeError, setEntitySizeError] = useState('');
    const [entityCapacityError, setEntityCapacityError] = useState('');
    const [numberOfTablesError, setNumberOfTablesError] = useState('');
    const [latitudeError, setLatitudeError] = useState('');
    const [longitudeError, setLongitudeError] = useState('');
    const [selectedStateError, setSelectedStateError] = useState('');
    const [selectedCityError, setSelectedCityError] = useState('');
    const [einError, setEinError] = useState('');
    const [businesstypeError, setbusinesstypeError] = useState('');
    const [pricerangeError, setPricerangeError] = useState('');



    const businesstype = [
        'Night life', 'Day Parties', 'Restaurants'
    ];

    const pricerange = [
        '1$', '2$', '3$', '4$'
    ];

    const countries = [
        'America',
        'India',
    ];

    const typeoffoods = [
        'Indian',
        'American', 'Italian', 'Japanese', 'Mexican', 'Thai', 'Spanish', 'Korean', 'French'
    ];

    const [state, setState] = useState([]);
    const [cities, setCities] = useState([]);

    const citiesDropdownRef = useRef();

    useEffect(() => {
        setTimeout(() => {
            setState([
                {
                    title: 'AndhraPradesh',
                    cities: [{ title: 'Srikakulam' },
                    { title: 'Vizayanagara' },
                    { title: 'Visakhapatnam' },
                    { title: 'East Godavari' },
                    { title: 'West Godavari' },
                    { title: 'Krishna' },
                    { title: 'Guntur' },
                    { title: 'Koornal' },
                    { title: 'Anthapur' },
                    { title: 'Prakasham' },
                    { title: 'Vijayawada' },
                    { title: 'Chittoor' }]
                },
                {
                    title: 'Telangana',
                    cities: [{ title: 'Nizamabad' },
                    { title: 'Khammam' },
                    { title: 'Kaimnagar' },
                    { title: 'Warangal' },
                    { title: 'Rangareddy' },
                    { title: 'Adilabad' },
                    { title: 'Mahabubnagar' },
                    { title: 'Nalgonda' },
                    { title: 'Snagareddy' },
                    { title: 'Medhak' },
                    { title: 'Siddpet' },
                    { title: 'Vikarabad' }]
                },
            ]);
        }, 1000);
    }, []);


    const createBusiness = async () => {
        let isValid = true;

        if (!businessName.trim()) {
            setBusinessNameError('Please enter a business name');
            isValid = false;
        } else {
            setBusinessNameError('');
        }

        if (!mobileNumber.trim() || mobileNumber.length !== 10) {
            setMobileNumberError('Please enter a valid 10-digit mobile number');
            isValid = false;
        } else {
            setMobileNumberError('');
        }

        if (!entitySize.trim()) {
            setMobileNumberError('Please enter a Entity');
            isValid = false;
        } else {
            setEntityError('');
        }

        if (!typeOfFood.trim()) {
            settypeOfFoodError('Please enter a type of food');
            isValid = false;
        } else {
            settypeOfFoodError('');
        }

        if (!zipCode.trim() || zipCode.length !== 6) {
            setZipCodeError('Please enter a valid 6-digit Zipcodenumber');
            isValid = false;
        } else {
            setZipCodeError('');
        }

        if (!country.trim()) {
            setCountryError('Please enter a country name');
            isValid = false;
        } else {
            setCountryError('');
        }

        if (!street.trim()) {
            setStreetError('Please enter a country name');
            isValid = false;
        } else {
            setStreetError('');
        }

        if (!numberOfTables.trim()) {
            setNumberOfTablesError('Please enter a Numberof tables');
            isValid = false;
        } else {
            setNumberOfTablesError('');
        }

        if (!latitude.trim()) {
            setLatitudeError('Please enter a latitude');
            isValid = false;
        } else {
            setLatitudeError('');
        }

        if (!longitude.trim()) {
            setLongitudeError('Please enter a longitude');
            isValid = false;
        } else {
            setLongitudeError('');
        }

        if (!selectedState.trim()) {
            setSelectedStateError('Please enter a state');
            isValid = false;
        } else {
            setSelectedStateError('');
        }

        // if (!selectedCity.trim()) {
        //     setSelectedCityError('Please enter a city');
        //     isValid = false;
        // } else {
        //     setSelectedCityError('');
        // }


        if (!entitySize.trim()) {
            setEntitySizeError('Please enter entity size');
            isValid = false;
        } else {
            setEntitySizeError('');
        }

        if (!entityCapacity.trim()) {
            setEntityCapacityError('Please enter entity capacity');
            isValid = false;
        } else {
            setEntityCapacityError('');
        }
        if (!businessType.trim()) {
            setbusinesstypeError('Please business type');
            isValid = false;
        } else {
            setbusinesstypeError('');
        }

        if (!priceRange.trim()) {
            setPricerangeError('Please select price range');
            isValid = false;
        } else {
            setPricerangeError('');
        }

        if (!ein.trim()) {
            setEinError('Please enter ein');
            isValid = false;
        } else {
            setEinError('');
        }



        if (isValid) {
            const apiUrl = 'http://192.168.1.110:2001/createbusiness/business';

            try {
                const response = await fetch(apiUrl, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        businessType,
                        priceRange,
                        businessName,
                        mobileNumber,
                        ein,
                        typeOfFood,
                        zipCode,
                        country,
                        street,
                        entitySize,
                        entityCapacity,
                        numberOfTables,
                        latitude,
                        longitude,
                        selectedState,
                        selectedCity: selectedCity.title,
                    }),
                });

                if (response.ok) {
                    const responseData = await response.json();
                    console.log('Business creation response:', responseData.business);

                    // Reset form values and close modal on successful API call
                    onClose();
                    setBusinessName('');
                    setBusinessType('');
                    setCities('');
                    setCountry('');
                    setEIN('');
                    setEntityCapacity('');
                    setEntitySize('');
                    setLatitude('');
                    setLongitude('');
                    setMobileNumber('');
                    setNumberOfTables('');
                    setPriceRange('');
                    setState('');
                    setStreet('');
                    setZipCode('');
                } else {
                    const errorData = await response.json();
                    console.error('Error creating business:', errorData);
                    onClose();
                    setBusinessName('');
                    setBusinessType('');
                    setCities('');
                    setCountry('');
                    setEIN('');
                    setEntityCapacity('');
                    setEntitySize('');
                    setLatitude('');
                    setLongitude('');
                    setMobileNumber('');
                    setNumberOfTables('');
                    setPriceRange('');
                    setState('');
                    setStreet('');
                    setZipCode('');
                }
            } catch (error) {
                console.error('Error creating business:', error);
                // Handle error as needed
            }
        }

        return isValid;
    };

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
                                        <Pressable >
                                            <AntDesign name="closecircle" color="rgba(245, 99, 4, 0.3)" size={wp(7)} onPress={onClose} />
                                        </Pressable>
                                    </TouchableOpacity>
                                </View>
                                <View>
                                    <Text style={styles.label}> Type of Business</Text>
                                    <SelectDropdown
                                        data={businesstype}

                                        onSelect={(selectedItem) => {
                                            setBusinessType(selectedItem);
                                        }}
                                        defaultButtonText={'choose Your restaurant type'}
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
                                </View>
                                <Text style={styles.errorText}>{businesstypeError}</Text>
                                <View>
                                    <Text style={styles.label}> Price of Range</Text>
                                    <SelectDropdown
                                        data={pricerange}
                                        // defaultValueByIndex={1}
                                        // defaultValue={'Egypt'}
                                        onSelect={(selectedItem, index) => {
                                            setPriceRange(selectedItem);
                                        }}
                                        defaultButtonText={'Choose Your Price Range'}
                                        buttonTextAfterSelection={(selectedItem, index) => {
                                            return selectedItem;
                                        }}
                                        rowTextForSelection={(item, index) => {
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
                                </View>
                                <Text style={styles.errorText}>{pricerangeError}</Text>
                                <View>
                                    <Text style={styles.label}>Name of your Business</Text>
                                    <TextInput placeholder="Enter your business name"
                                        style={styles.textinput}
                                        value={businessName}
                                        onChangeText={(text) => setBusinessName(text)} />

                                </View>
                                <Text style={styles.errorText}>{businessNameError}</Text>
                                <View>
                                    <Text style={styles.label}>Mobile Number</Text>
                                    <TextInput
                                        placeholder="Enter your mobile number"
                                        style={styles.textinput}
                                        value={mobileNumber}
                                        onChangeText={(text) => {
                                            // Check if the length is 10, then dismiss the keyboard
                                            if (text.length === 10) {
                                                Keyboard.dismiss();
                                            }
                                            setMobileNumber(text);
                                        }}
                                    />


                                </View>
                                <Text style={styles.errorText}>{mobileNumberError}</Text>
                                <View>
                                    <Text style={styles.label}>EIN</Text>
                                    <TextInput placeholder="Enter your Entity"
                                        value={ein}
                                        onChangeText={(text) => setEIN(text)}
                                        style={styles.textinput} />

                                </View>
                                <Text style={styles.errorText}>{einError}</Text>
                                <View>
                                    <Text style={styles.label}> Type of Food</Text>

                                    <SelectDropdown
                                        data={typeoffoods}
                                        onSelect={(selectedItem, index) => {
                                            setTypeOfFood(selectedItem, index);
                                        }}
                                        defaultButtonText={'Select Food Type'}
                                        buttonTextAfterSelection={(selectedItem, index) => {
                                            return selectedItem;
                                        }}
                                        rowTextForSelection={(item, index) => {
                                            return item;
                                        }}
                                        buttonStyle={styles.dropdown2BtnStyle}
                                        buttonTextStyle={styles.dropdown2BtnTxtStyle}
                                        renderDropdownIcon={isOpened => {
                                            return <FontAwesome name={isOpened ? 'chevron-circle-up' : 'chevron-circle-down'} color={'rgba(255, 217, 74, 1)'} size={wp(7)} />;
                                        }}
                                        dropdownIconPosition={'right'}
                                        dropdownStyle={styles.dropdown2DropdownStyle}
                                        rowStyle={styles.dropdown2RowStyle}
                                        rowTextStyle={styles.dropdown2RowTxtStyle}
                                        selectedRowStyle={styles.dropdown2SelectedRowStyle}
                                        search
                                        searchInputStyle={styles.dropdown2searchInputStyleStyle}
                                        searchPlaceHolder={'Search here'}
                                        searchPlaceHolderColor={'darkgrey'}
                                        renderSearchInputLeftIcon={() => {
                                            return <FontAwesome name={'search'} color={'#444'} size={18} />;
                                        }}
                                    />
                                </View>
                                <Text style={styles.errorText}>{typeOfFoodError}</Text>
                                <View>
                                    <Text style={styles.label}>Zip Code</Text>
                                    <TextInput placeholder="Enter your ZIP Code"
                                        value={zipCode}
                                        onChangeText={(text) => setZipCode(text)}
                                        style={styles.textinput} />
                                </View>
                                <Text style={styles.errorText}>{zipCodeError}</Text>
                                <View>
                                    <Text style={styles.label}> Country</Text>
                                    <SelectDropdown
                                        data={countries}
                                        onSelect={(selectedItem, index) => {
                                            setCountry(selectedItem, index);
                                        }}
                                        defaultButtonText={'Select country'}
                                        buttonTextAfterSelection={(selectedItem, index) => {
                                            return selectedItem;
                                        }}
                                        rowTextForSelection={(item, index) => {
                                            return item;
                                        }}
                                        buttonStyle={styles.dropdown2BtnStyle}
                                        buttonTextStyle={styles.dropdown2BtnTxtStyle}
                                        renderDropdownIcon={isOpened => {
                                            return <FontAwesome name={isOpened ? 'chevron-circle-up' : 'chevron-circle-down'} color={'rgba(255, 217, 74, 1)'} size={wp(7)} />;
                                        }}
                                        dropdownIconPosition={'right'}
                                        dropdownStyle={styles.dropdown2DropdownStyle}
                                        rowStyle={styles.dropdown2RowStyle}
                                        rowTextStyle={styles.dropdown2RowTxtStyle}
                                        selectedRowStyle={styles.dropdown2SelectedRowStyle}
                                        search
                                        searchInputStyle={styles.dropdown2searchInputStyleStyle}
                                        searchPlaceHolder={'Search here'}
                                        searchPlaceHolderColor={'darkgrey'}
                                        renderSearchInputLeftIcon={() => {
                                            return <FontAwesome name={'search'} color={'#444'} size={18} />;
                                        }}
                                    />
                                </View>
                                <Text style={styles.errorText}>{countryError}</Text>
                                <View>
                                    <Text style={styles.label}> State</Text>
                                    <SelectDropdown
                                        data={state}
                                        onSelect={(selectedItem, index) => {
                                            citiesDropdownRef.current.reset();
                                            setCities([]);
                                            setCities(selectedItem.cities);
                                            setSelectedState(selectedItem.title)
                                            console.log('Selected State:', selectedItem);
                                        }}
                                        defaultButtonText={'Select state'}
                                        buttonTextAfterSelection={(selectedItem, index) => {
                                            return selectedItem.title;
                                        }}
                                        rowTextForSelection={(item, index) => {
                                            return item.title;
                                        }}
                                        buttonStyle={styles.dropdown2BtnStyle}
                                        buttonTextStyle={styles.dropdown2BtnTxtStyle}
                                        renderDropdownIcon={isOpened => {
                                            return <FontAwesome name={isOpened ? 'chevron-circle-up' : 'chevron-circle-down'} color={'rgba(255, 217, 74, 1)'} size={wp(7)} />;
                                        }}
                                        dropdownIconPosition={'right'}
                                        dropdownStyle={styles.dropdown2DropdownStyle}
                                        rowStyle={styles.dropdown2RowStyle}
                                        rowTextStyle={styles.dropdown2RowTxtStyle}
                                        selectedRowStyle={styles.dropdown2SelectedRowStyle}
                                        search
                                        searchInputStyle={styles.dropdown2searchInputStyleStyle}
                                        searchPlaceHolder={'Search here'}
                                        searchPlaceHolderColor={'darkgrey'}
                                        renderSearchInputLeftIcon={() => {
                                            return <FontAwesome name={'search'} color={'#444'} size={18} />;
                                        }}
                                    />
                                </View>
                                <Text style={styles.errorText}>{selectedStateError}</Text>
                                <View>
                                    <Text style={styles.label}> City</Text>
                                    <SelectDropdown
                                        ref={citiesDropdownRef}
                                        data={cities}
                                        onSelect={(selectedItem, index) => {
                                            setSelectedCity(selectedItem);
                                        }}
                                        defaultButtonText={'Select city'}
                                        buttonTextAfterSelection={(selectedItem, index) => {
                                            return selectedItem.title;
                                        }}
                                        rowTextForSelection={(item, index) => {
                                            return item.title;
                                        }}
                                        buttonStyle={styles.dropdown2BtnStyle}
                                        buttonTextStyle={styles.dropdown2BtnTxtStyle}
                                        renderDropdownIcon={isOpened => {
                                            return <FontAwesome name={isOpened ? 'chevron-circle-up' : 'chevron-circle-down'} color={'rgba(255, 217, 74, 1)'} size={wp(7)} />;
                                        }}
                                        dropdownIconPosition={'right'}
                                        dropdownStyle={styles.dropdown2DropdownStyle}
                                        rowStyle={styles.dropdown2RowStyle}
                                        rowTextStyle={styles.dropdown2RowTxtStyle}
                                        selectedRowStyle={styles.dropdown2SelectedRowStyle}
                                        search
                                        searchInputStyle={styles.dropdown2searchInputStyleStyle}
                                        searchPlaceHolder={'Search here'}
                                        searchPlaceHolderColor={'darkgrey'}
                                        renderSearchInputLeftIcon={() => {
                                            return <FontAwesome name={'search'} color={'#444'} size={18} />;
                                        }}
                                    />
                                </View>
                                {/* <Text style={styles.errorText}>{selectedCityError}</Text> */}
                                <View>
                                    <Text style={styles.label}>Street</Text>
                                    <TextInput placeholder="Enter your street name"
                                        value={street}
                                        onChangeText={(text) => setStreet(text)}
                                        style={styles.textinput} />
                                    <Text style={styles.errorText}>{streetError}</Text>
                                </View>
                                <View>
                                    <Text style={styles.label}>Size of your Entity</Text>
                                    <TextInput placeholder="in square feets"
                                        value={entitySize}
                                        onChangeText={(text) => setEntitySize(text)}
                                        style={styles.textinput} />
                                </View>
                                <Text style={styles.errorText}>{EntityError}</Text>
                                <View>
                                    <Text style={styles.label}>Capacity of your Entity</Text>
                                    <TextInput placeholder="No.of Customer can Occupy"
                                        value={entityCapacity}
                                        onChangeText={(text) => setEntityCapacity(text)}
                                        style={styles.textinput} />
                                </View>
                                <Text style={styles.errorText}>{entityCapacityError}</Text>
                                <View>
                                    <Text style={styles.label}>Tables</Text>
                                    <TextInput placeholder="No.of Tables available"
                                        value={numberOfTables}
                                        onChangeText={(text) => setNumberOfTables(text)}
                                        style={styles.textinput} />
                                </View>
                                <Text style={styles.errorText}>{numberOfTablesError}</Text>
                                <View>
                                    <Text style={styles.label}>Latitude</Text>
                                    <TextInput placeholder="No.of Tables available"
                                        value={latitude}
                                        onChangeText={(text) => setLatitude(text)}
                                        style={styles.textinput} />
                                </View>
                                <Text style={styles.errorText}>{latitudeError}</Text>
                                <View>
                                    <Text style={styles.label}>Longitude</Text>
                                    <TextInput placeholder="No.of Tables available"
                                        value={longitude}
                                        onChangeText={(text) => setLongitude(text)}
                                        style={styles.textinput} />
                                </View>
                                <Text style={styles.errorText}>{longitudeError}</Text>
                                <View style={{ alignItems: 'center', margin: 30 }}>

                                    <TouchableOpacity style={styles.createeButton} onPress={createBusiness}>
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
        width: wp(80),
        height: hp(6),
        borderWidth: 1,
        borderRadius: 20,
        backgroundColor: 'rgba(255, 255, 255, 1)',
        borderColor: 'rgba(255, 217, 74, 1)',
        color: 'black',
        paddingLeft: wp(4)
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
    },
    dropdown1BtnStyle: {
        width: wp(80),
        height: hp(6),
        backgroundColor: '#FFF',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: 'rgba(255, 217, 74, 1)',
    },
    dropdown1BtnTxtStyle: { color: '#444', textAlign: 'left' },
    dropdown1DropdownStyle: { backgroundColor: '#EFEFEF', width: wp(30), },
    dropdown1RowStyle: { backgroundColor: '#EFEFEF', borderBottomColor: '#C5C5C5', width: wp(30), },
    dropdown1RowTxtStyle: { color: '#444', textAlign: 'left' },

    dropdown2BtnStyle: {
        width: wp(80),
        height: hp(6),
        backgroundColor: '#FFF',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: 'rgba(255, 217, 74, 1)',
    },
    dropdown2BtnTxtStyle: { color: '#444', textAlign: 'left' },
    dropdown2DropdownStyle: { backgroundColor: '#EFEFEF', width: wp(80), },
    dropdown2RowStyle: { backgroundColor: '#EFEFEF', borderBottomColor: '#C5C5C5', width: wp(80), },
    dropdown2RowTxtStyle: { color: '#444', textAlign: 'left' },
    dropdown2SelectedRowStyle: { backgroundColor: 'rgba(0,0,0,0.1)' },
    dropdown2searchInputStyleStyle: {
        backgroundColor: '#EFEFEF',
        borderRadius: 8,
        borderBottomWidth: 1,
        borderBottomColor: '#444',
    },
    errorText: {
        color: 'red',
        fontSize: 12,
    },
})
export default Business;