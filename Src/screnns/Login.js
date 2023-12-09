// import React, { useState } from "react";
// import { ImageBackground, StyleSheet, Text, TextInput, View, TouchableOpacity } from "react-native";
// import { useNavigation } from "@react-navigation/native";
// import LinearGradient from 'react-native-linear-gradient';

// const Login = () => {
//     const navigation = useNavigation();

//     const [mobileNumber, setMobileNumber] = useState("");


//     const handleLogin = () => {

//         console.log("Mobile Number:", mobileNumber);


//     };

//     const registerButton = () => {
//         navigation.navigate('register');
//     }
//     return (
//         <ImageBackground source={require('../../assets/images/backgroundimg.jpeg')} style={styles.background}>
//             <View>
//                 <Text style={styles.text}>Login</Text>
//             </View>
//             <View style={styles.textinput}>
//             <TextInput placeholder="Enter your Mobile Number" style={styles.textinput}  />
                
//             </View>
//             <View>
//                 <Text style={styles.text}>Don't have an account ? <Text style={styles.signup} onPress={registerButton}>Signup</Text></Text>
//             </View>
//             <View>
//                 <Text>I have read and accept the <Text style={styles.text}>Terms of use and privacy policy</Text></Text>
//             </View>
//             <TouchableOpacity style={styles.buttons} onPress={handleLogin}>
//                 <Text style={styles.buttontext} >Generate OTP</Text>
//             </TouchableOpacity>
//         </ImageBackground>

//     );
// };

// const styles = StyleSheet.create({
//     background: {
//         flex: 1,
//         // width: '100%',
//         // height: '100%',
//         // backgroundColor: 'gray'
//         // You can add additional styling here
//     },
//     textinput: {
//         width: 300,
//         borderWidth: 1,
//         borderRadius: 15,
//         borderColor: '#1034A6',
//         backgroundColor: '#f9f9f9',
//         color: 'black',
//         alignItems:'center'
        
    
//     },
//     text: {
//         paddingVertical: 40,
//         marginTop: 50,
//         fontSize: 20,
//         fontWeight: '100',
//         textAlign: 'center',
        
//     },
//     buttons: {
//         width: 300,
//         height: 40,
//         borderWidth: 1,
//         borderRadius: 20,
//         borderColor: 'blue',
//         margin: 40,
//         textcolor: '#f9f9f9',
//         marginTop: 50,

//     },
//     buttontext: {
//         fontSize: 20,
//         textAlign: "center"
//     },
//     signup: {
//         color: 'blue',
//     }
// });

// export default Login;
