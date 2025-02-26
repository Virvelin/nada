import React from "react";
import { NavigationContainer } from "@react-navigation/native"; 
import { createStackNavigator } from "@react-navigation/stack"; 
import AppBar from "./components/AppBar";
import HomeScreen from "./index";
import SecondScreen from "./second";

const Stack = createStackNavigator(); 

export default function Layout() {
  return (
    
      <Stack.Navigator
        screenOptions={{
          header: (props) => <AppBar {...props} />, 
        }}
      >
        <Stack.Screen name="home" component={HomeScreen} />
        <Stack.Screen name="second" component={SecondScreen} />
      </Stack.Navigator>
    
  );
}
