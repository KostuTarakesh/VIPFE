import React, { useEffect, useState } from 'react';
import {
  Alert,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import axios from 'axios';
import SelectDropdown from 'react-native-select-dropdown';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const CountryDropdown = () => {
  const [countryData, setCountryData] = useState([]);
  const [stateData, setStateData] = useState([]);
  const [cityData, setCityData] = useState([]);
  const [country, setCountry] = useState(null);
  const [state, setState] = useState(null);
  const [city, setCity] = useState(null);
  const [countryName, setCountryName] = useState(null);
  const [stateName, setStateName] = useState(null);
  const [cityName, setCityName] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const [value, setValue] = useState(null)

  const baseurl = process.env.BASE_URL;
  const apikey = process.env.API_KEY;


  useEffect(() => {
    var config = {
      method: 'get',
      url: `${baseurl}/countries`,
      headers: {
        'X-CSCAPI-KEY': apikey
      }
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        var count = Object.keys(response.data).length;
        let countryArray = [];
        for (var i = 0; i < count; i++) {
          countryArray.push({
            value: response.data[i].iso2,
            label: response.data[i].name
          })
        }
        setCountryData(countryArray)
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const handleState = countryCode => {

    var config = {
      method: 'get',
      url: `${baseurl}/countries/${countryCode}/states`,
      headers: {
        'X-CSCAPI-KEY': apikey
      }
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        var count = Object.keys(response.data).length;
        let stateArray = [];
        for (var i = 0; i < count; i++) {
          stateArray.push({
            value: response.data[i].iso2,
            label: response.data[i].name
          })
        }
        setStateData(stateArray)
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleCity = (countryCode, stateCode) => {

    var config = {
      method: 'get',
      url: `${baseurl}/countries/${countryCode}/states/${stateCode}/cities`,
      headers: {
        'X-CSCAPI-KEY': apikey
      }
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        var count = Object.keys(response.data).length;
        let cityArray = [];
        for (var i = 0; i < count; i++) {
          cityArray.push({
            value: response.data[i].id,
            label: response.data[i].name
          })
        }
        setCityData(cityArray)
      })
      .catch(function (error) {
        console.log(error);
      });
  };


  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={{ backgroundColor: '#fff', padding: 20, borderRadius: 15 }}>
        <SelectDropdown
          data={countryData}
          onSelect={(selectedItem, index) => {
            setCountry(selectedItem.value);
            handleState(selectedItem.value);
            setCountryName(selectedItem.label);
            setValue(selectedItem.value);
            setIsFocus(false);
          }}
          defaultButtonText={!isFocus ? 'Select country' : '...'}
          buttonTextAfterSelection={(selectedItem, index) => selectedItem.label}
          rowTextForSelection={(item, index) => item.label}
          buttonStyle={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
          buttonTextStyle={styles.selectedTextStyle}
          renderDropdownIcon={isOpened => (
            <FontAwesome
              name={isOpened ? 'chevron-circle-up' : 'chevron-circle-down'}
              color={'rgba(255, 217, 74, 1)'}
              size={25}
            />
          )}
          dropdownIconPosition={'right'}
          dropdownStyle={styles.dropdown2DropdownStyle}
          rowStyle={styles.dropdown2RowStyle}
          rowTextStyle={styles.dropdown2RowTxtStyle}
          selectedRowStyle={styles.dropdown2SelectedRowStyle}
          search
          searchInputStyle={styles.inputSearchStyle}
          searchPlaceHolder={'Search...'}
          searchPlaceHolderColor={'darkgrey'}
          renderSearchInputLeftIcon={() => (
            <FontAwesome name={'search'} color={'#444'} size={18} />
          )}
          maxHeight={300}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          value={country}
        />

        <SelectDropdown
          data={stateData}
          onSelect={(selectedItem, index) => {
            setState(selectedItem.value);
            handleCity(country, selectedItem.value);
            setStateName(selectedItem.label);
            setIsFocus(false);
            setValue(selectedItem.value);
          }}
          defaultButtonText={!isFocus ? 'Select state' : '...'}
          buttonTextAfterSelection={(selectedItem, index) => {
            return selectedItem.label;
          }}
          rowTextForSelection={(item, index) => {
            return item.label;
          }}
          buttonStyle={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
          buttonTextStyle={styles.selectedTextStyle}
          renderDropdownIcon={isOpened => {
            return <FontAwesome name={isOpened ? 'chevron-circle-up' : 'chevron-circle-down'} color={'rgba(255, 217, 74, 1)'} size={25} />;
          }}
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
          maxHeight={300}
          value={state}
        />

        <SelectDropdown
          data={cityData}
          onSelect={(selectedItem, index) => {
            setCity(selectedItem.value);
            setCityName(selectedItem.label);
            setIsFocus(false);
          }}
          defaultButtonText={!isFocus ? 'Select city' : '...'}
          buttonTextAfterSelection={(selectedItem, index) => selectedItem.label}
          rowTextForSelection={(item, index) => item.label}
          buttonStyle={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
          buttonTextStyle={styles.selectedTextStyle}
          renderDropdownIcon={isOpened => (
            <FontAwesome
              name={isOpened ? 'chevron-circle-up' : 'chevron-circle-down'}
              color={'rgba(255, 217, 74, 1)'}
              size={25}
            />
          )}
          dropdownIconPosition={'right'}
          dropdownStyle={styles.dropdown2DropdownStyle}
          rowStyle={styles.dropdown2RowStyle}
          rowTextStyle={styles.dropdown2RowTxtStyle}
          selectedRowStyle={styles.dropdown2SelectedRowStyle}
          search
          searchInputStyle={styles.inputSearchStyle}
          searchPlaceHolder={'Search...'}
          searchPlaceHolderColor={'darkgrey'}
          renderSearchInputLeftIcon={() => (
            <FontAwesome name={'search'} color={'#444'} size={18} />
          )}
          maxHeight={300}
          value={city}
        />

        <TouchableOpacity
          style={{
            backgroundColor: '#0F3460',
            padding: 20,
            borderRadius: 15,
            alignItems: 'center',
          }}
          onPress={() =>
            Alert.alert(
              `You have selected\nCountry: ${countryName}\nState: ${stateName}\nCity: ${cityName}`,
            )
          }>
          <Text
            style={{
              color: '#fff',
              textTransform: 'uppercase',
              fontWeight: '600',
            }}>
            Submit
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CountryDropdown;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#533483',
    padding: 16,
    justifyContent: 'center',
    alignContent: 'center',
  },
  dropdown: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
    marginBottom: 10,
  },
  icon: {
    marginRight: 5,
  },
  // label: {
  //   position: 'absolute',
  //   backgroundColor: 'white',
  //   left: 22,
  //   top: 8,
  //   zIndex: 999,
  //   paddingHorizontal: 8,
  //   fontSize: 14,
  // },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  dropdown2BtnStyle: {
    width: 200,
    height: 40,
    backgroundColor: '#FFF',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'rgba(255, 217, 74, 1)',
  },
  dropdown2BtnTxtStyle: { color: '#444', textAlign: 'left' },
  dropdown2DropdownStyle: { backgroundColor: '#EFEFEF' },
  dropdown2RowStyle: { backgroundColor: '#EFEFEF', borderBottomColor: '#C5C5C5' },
  dropdown2RowTxtStyle: { color: '#444', textAlign: 'left' },
  dropdown2SelectedRowStyle: { backgroundColor: 'rgba(0,0,0,0.1)' },
  dropdown2searchInputStyleStyle: {
    backgroundColor: '#EFEFEF',
    borderRadius: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#444',
  },
});



