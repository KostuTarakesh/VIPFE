import React from "react";
import Registration from "./Src/screnns/Registration";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "./Src/screnns/Homescreen";
// import Login from "./Src/screnns/Login";
import Otp from "./Src/screnns/otp";
import Business from "./Src/screnns/Businessscreen";
import Bottomtabs from "./Src/components/Bottomtabs";
import Loginscreen from "./Src/screnns/Loginscreen";
import CountryDropdown from "./Src/screnns/Country";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Country">
          <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
          <Stack.Screen name="Business" component={Business} options={{ headerShown: false }} />
          <Stack.Screen name="Otp" component={Otp} options={{ headerShown: false }} />
          <Stack.Screen name="register" component={Registration} options={{ headerShown: false }} />
          <Stack.Screen name="bottomtabs" component={Bottomtabs} options={{ headerShown: false }} />
          <Stack.Screen name="login" component={Loginscreen} options={{ headerShown: false }} />
          <Stack.Screen name="Country" component={CountryDropdown} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>

    </>
  )
}
export default App;